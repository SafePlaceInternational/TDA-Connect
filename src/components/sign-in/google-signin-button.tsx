import React from "react";
import Image from "next/image";

const GoogleSignInButton = () => (
  <div className="pt-6">
    <button
      className="flex w-full justify-center items-center gap-2 py-4 px-4 rounded-full bg-white border border-black"
      onClick={() => {/* Add Google Sign In Logic */}}
      type="button"
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
);

export default GoogleSignInButton; 