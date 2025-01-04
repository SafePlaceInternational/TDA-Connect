"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/page";

export default function SignIn() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-500">
      {/* Main content */}
      <div className="flex-grow flex flex-col items-center">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-white pt-24">Welcome!</h1>
          <p className="text-2xl pt-4 text-white pb-24">
            Sign in to connect with<br />your TDA Community
          </p>
        </div>
        
          {/* Content section with wave background */}
          <div className="relative w-full flex items-center"> {/* Container for all content */}
            {/* Wave Background - covers entire container */}
            <div className="absolute inset-0"> {/* inset-0 makes it cover the whole container */}
              <Image
                src="/sign-in/sign-in-background.svg"
                alt="Background wave"
                width={360}
                height={380}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            
            {/* Content on top of wave */}
            <div className="relative z-10 px-5  w-full py-[30%]">

                <p className="text-xl text-primary-500">
                  To continue, Google will share your full name, email address,
                  language preference and profile picture with Safe Place
                  International and TDA Connect. Before using this website, you can
                  review TDA Connect's <Link href="/terms" className="underline font-bold">Terms & Conditions.</Link>
                </p>


            <div className="pt-6">
                <button 
                className="flex w-full justify-center items-center gap-2 py-4 px-4 rounded-full bg-white border border-black"
                onClick={() => {/* Add Google Sign In Logic */}}
                >
                <Image
                    src="/sign-in/Google-logo.svg"
                    alt="Google"
                    width={24}
                    height={24}
                />
                <span className="text-primary-500">Sign up with Google</span>
                </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}