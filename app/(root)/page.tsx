import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {  getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";



export default async function page() {
  const user=await getCurrentUser();

  const [userInterViews,larestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({userId:user?.id!})
  ]);


  const hasPastInterViews=(userInterViews ?? []).length > 0;
  const hasUpcommingInterviews=(larestInterviews ?? []).length > 0;
  return (
    <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Ace Your Interviews with  AI-Powered Practice & Instant Feedback!</h2>
        <p className="text-lg">Sharpen your interview skills with real-world questions and AI-driven feedback—boost your confidence and land your dream job!</p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start an Intrview</Link>
        </Button>
      </div>
      <Image src="/homepage_animation.gif" alt="robot" width={400} height={400} className="max-sm:hidden" />
    </section>
    <section className="flex flex-col gap-6 mt-8 mb-10">
      <h2>Your Intrviews</h2>


      <div className="interviews-section">
      { hasPastInterViews?(
        userInterViews?.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
         ))
      ):(
        <p>You have no interviews available at the moment</p>
      )
       }
      </div>
    </section>
    {/* <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>
      <div className="interviews-section">
      { hasUpcommingInterviews?(
        larestInterviews?.map((interview) => (
          <InterviewCard {...interview} key={interview.id}/>
         ))
      ):(
        <p>There are no new interviews available at the moment</p>
      )
       }
      </div>
    </section> */}
    </>
  );
}
