import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Intrview-Ready with AI_POwered Practice And Feedback</h2>
        <p className="text-lg">Practice on real intrvierw questions and get instant feedback on your interview skills</p>
        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start an Intrview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt="robot" width={400} height={400} className="max-sm:hidden" />
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Your Intrviews</h2>


      <div className="interviews-section">
       {dummyInterviews.map((interview) => (
        <InterviewCard {...interview} key={interview.id}/>
       ))}
      </div>
    </section>
    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>
      <div className="interviews-section">
      {dummyInterviews.map((interview) => (
        <InterviewCard {...interview} key={interview.id}/>
       ))}
       {/* <p>You have no interviews available at the moment</p> */}
      </div>
    </section>
    </>
  );
}
