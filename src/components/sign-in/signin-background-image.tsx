import React from "react";
import Image from "next/image";

const BackgroundImage = () => (
  <div className="absolute inset-0">
    <Image
      src="/sign-in/sign-in-background.svg"
      alt="Background wave"
      width={360}
      height={380}
      className="w-full h-auto object-contain"
      priority
    />
  </div>
);

export default BackgroundImage; 