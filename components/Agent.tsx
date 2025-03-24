'use client';

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { vapi } from '@/lib/vapi.sdk';
import { interviewer } from "@/constants";
import { LuPhoneCall } from "react-icons/lu";

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}

interface Message {
    type: string;
    transcriptType?: string;
    role: 'user' | 'system' | 'assistant';
    transcript: string;
}

interface AgentProps {
    userName: string;
    userId: string;
    type: 'generate' | 'interview';
    interviewId?: string;
    questions?: string[];
}

const Agent = ({ userName, userId, type, interviewId, questions }: AgentProps) => {
    const router = useRouter();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [messages, setMessages] = useState<SavedMessage[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(CallStatus.FINISHED);

        const onMessage = (message: Message) => {
            if (message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = { role: message.role, content: message.transcript }
                setMessages((prev) => [...prev, newMessage]);
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error: Error) => console.log('Error', error);

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);
        vapi.on('error', onError);

        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('speech-start', onSpeechStart);
            vapi.off('speech-end', onSpeechEnd);
            vapi.off('error', onError)
        }
    }, [])

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
        try {
            setIsGenerating(true);
            
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    interviewId,
                    userId,
                    transcript: messages
                }),
            });
            
            const data = await response.json();
            
            if (data.success && data.feedbackId) {
                router.push(`/interview/${interviewId}/feedback`);
            } else {
                console.error('Error saving feedback');
                router.push('/');
            }
        } catch (error) {
            console.error('Failed to generate feedback:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    useEffect(() => {
        if (callStatus === CallStatus.FINISHED) {
            if (type === 'generate') {
                router.push('/');
            } else {
                handleGenerateFeedback(messages);
            }
        }
    }, [messages, callStatus, type, userId, interviewId, router]);

    const handleCall = async () => {
        setCallStatus(CallStatus.CONNECTING);
        if (type === 'generate') {
            console.log("Starting call with workflow ID:", process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID);
            await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
                variableValues: {
                    username: userName,
                    userid: userId,
                }
            });
        } else {
            let formatedQuestions = '';
            
            if (questions) {
                formatedQuestions = questions.map((question) => 
                    `-${question}`
                ).join('\n');
            }

            await vapi.start(interviewer, {
                variableValues: {
                    questions: formatedQuestions,
                }
            });
        } 
    }

    const handleDisconnect = async () => {
        setCallStatus(CallStatus.FINISHED);
        vapi.stop();
    }

    const latestMessage = messages[messages.length - 1]?.content;
    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar pt-3 pr-1">
                        <Image src="/logo.png" alt="vapi" width={100} height={100} className="object-cover" />
                        {isSpeaking && <span className="animate-speak" />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image src="/avatar.png" alt="user avatar" width={650} height={650} className="rounded-full object-cover size-[250px]" />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {messages.length > 0 && (
                <div className="transcript-border">
                    <div className="transcript">
                        <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                            {latestMessage}
                        </p>
                    </div>
                </div>
            )}

            <div className="w-full flex justify-center">
                {callStatus !== 'ACTIVE' ? (
                    <button className="relative btn-call" onClick={handleCall}>
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' && 'hidden')} />
                        <span>
                            {isCallInactiveOrFinished ? <span className="flex justify-center items-center gap-2"><LuPhoneCall  size={15}/>Call</span> : '. . .'}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect" onClick={handleDisconnect}>
                        End the Interview
                    </button>
                )}
            </div>
        </>
    )
}

export default Agent;
