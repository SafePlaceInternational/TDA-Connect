"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-500 text-white p-6">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-xl mb-8">
          Sign in to connect with your TDA Community
        </p>
        
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white rounded-lg p-4 text-primary-500 text-sm text-justify">
            <p>
              To continue, Google will share your full name, email address,
              language preference and profile picture with Safe Place
              International and TDA Connect. Before using this website, you can
              review TDA Connect's review TDA Connect's <Link href="/terms" className="underline font-bold">Terms & Conditions.</Link>
            </p>
          </div>

          <button 
            className="flex w-full bg-primary justify-center items-center text-primary-500 bg-white gap-2 py-2 rounded-full font-bold"
            onClick={() => {/* Add Google Sign In Logic */}}
          >
            <div className="p-2 ">
                <Image
                src="/sign-in/Google-logo.svg"
                alt="Profile-pic"
                width={24}
                height={24}
                className="rounded-full"
                />
            </div>
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
}