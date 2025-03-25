
import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";
import Image from "next/image";
import Link from "next/link";




export default async function page() {
  const user = await getCurrentUser();

  const [userInterViews, larestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ]);

  
  const hasPastInterViews = (userInterViews ?? []).length > 0;
  const hasUpcommingInterviews = (larestInterviews ?? []).length > 0;
  return (
    <>
      <section className="card-cta flex flex-col md:flex-row items-center gap-8 p-6">
        <div className="flex flex-col gap-6 max-w-lg w-full">
          <h2 className="text-2xl md:text-3xl font-bold">Ace Your Interviews with AI-Powered Practice & Instant Feedback!</h2>
          <p className="text-base md:text-lg">Sharpen your interview skills with real-world questions and AI-driven feedback—boost your confidence and land your dream job!</p>
          <Button asChild className="btn-primary  ">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <div className="w-full flex justify-center mt-6 md:mt-0">
          <Image
            src="/homepage_animation.gif"
            alt="robot"
            width={400}
            height={400}
            className="w-full max-w-[300px] md:max-w-[500px] object-contain"
            priority
          />
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8 mb-10">
        <h2>Your Intrviews</h2>


        <div className="interviews-section">
          {hasPastInterViews ? (
            userInterViews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
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
