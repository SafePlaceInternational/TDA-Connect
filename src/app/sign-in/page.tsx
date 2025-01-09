"use client";

import SigninHeader from "@/components/sign-in/signin-header";
import BackgroundImage from "@/components/sign-in/signin-background-image";
import GoogleSignInButton from "@/components/sign-in/google-signin-button";
import TermsText from "@/components/sign-in/terms-text";
import { useSession } from "next-auth/react";


export default function SignIn() {
  const { data: session } = useSession();
  const email = session?.user?.email;

  return (
    <div className="flex flex-col bg-primary-500">
      {/* Main content */}
      <div className="flex-grow flex flex-col items-center">
        <SigninHeader />
        
        {/* Content section with wave background */}
        <div className="relative w-full flex items-center">
          <BackgroundImage />
          
          {/* Content on top of wave */}
          <div className="relative z-10 px-5 w-full py-[30%]">
            <TermsText />
            <GoogleSignInButton />
          </div>
        </div>
      </div>
    </div>
  );
}