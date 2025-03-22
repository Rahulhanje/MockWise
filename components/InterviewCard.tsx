import React from 'react'
import dayjs from 'dayjs';
import Image from 'next/image';
import { getRandomInterviewCover } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import DisplayTechIcons from './DisplayTechIcons';
const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt}: InterviewCardProps) => {
    const feedback=null as Feedback | null;
    //technical 
    //mixed
    const normalizedType=/mix/gi.test(type) ? "mixed" : type;
    const formattedDate=dayjs(feedback?.createdAt|| createdAt||Date.now()).format('DD MMM YYYY');
  return (
    <div className='card-border w-[360px] max-sm:w-full min-h-96'>
       <div className='card-interview'>
        <div>
            <div className='absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600'>
                <p className='badge-text'>{normalizedType}</p>
            </div>
            <Image src={getRandomInterviewCover()} alt="coverimage" height={90} width={90} className="rounded-full object-fit size-[90px]"></Image>
            <h3 className='mt-5 capitalize'>{role} Interview</h3>
            <div className='flex flex-row gap-5 mt-3'>
                <div className='flex flex-row gap-2'>
                      <Image src="/calendar.svg" alt="calendar" height={22} width={22} ></Image>
                      <p>{formattedDate}</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                        <Image src="/star.svg" alt="star" height={22} width={22} ></Image>
                        <p>{feedback?.totalScore || '---'}/100</p>
                </div>
                

            </div>
            <p className='line-clamp-2 mt-5'>
                    {feedback?.finalAssessment || 'No feedback yet'}
                </p>
         </div>
            <div className='flex flex-row justify-between '>
                        <DisplayTechIcons techStack={techstack} />
                        <Button className='btn-primary'>
                            <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}></Link>
                            {feedback ? 'View Feedback' : 'Start Interview'}
                        </Button>
            </div>
        </div>
       </div>
    
  )
}

export default InterviewCard