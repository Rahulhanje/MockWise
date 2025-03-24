
import SignOutButton from '@/components/SignoutBtn'

import { isAuthenticated, signOut } from '@/lib/actions/auth.action'

import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav className='flex justify-between gap-2'>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.png" alt="logo" height={32} width={38} />
          <h2 className='text-primary-100'>MockWise</h2>
        </Link>
        <div>
        <SignOutButton/>
        </div>
      </nav>
      {children}
      <footer className="border-t py-6 mt-20">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MockWise. Made with 💖 by Rahul Hanje.
            </p>
          </div>
      </footer>
    </div>
  )
}

export default RootLayout