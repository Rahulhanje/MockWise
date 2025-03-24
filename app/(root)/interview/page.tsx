import Agent from '@/components/Agent'
import InterviewSuggestion from '@/components/InterviewSuggestion';
import { getCurrentUser } from '@/lib/actions/auth.action'
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();



  return (
    <>
      <h3>Interview generation</h3>
      <InterviewSuggestion/>

      <Agent userName={user?.name || ''} userId={user?.id || ''} type="generate" />
    </>
  )
}

export default page