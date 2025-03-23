"use client"; // ✅ This makes it a Client Component

import { signOut } from '@/lib/actions/auth.action';
import { Button } from '@/components/ui/button';

const SignOutButton = () => {
  return (
    <Button onClick={async () => await signOut()}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
