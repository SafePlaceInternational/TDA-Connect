import React from "react";
import Link from "next/link";

const TermsText = () => (
  <p className="text-base text-primary-500">
    To continue, Google will share your full name, email address,
    language preference and profile picture with Safe Place
    International and TDA Connect. Before using this website, you can
    review TDA Connect&apos;s{' '}
    <Link href="/terms-and-conditions" className="underline font-bold">
      Terms & Conditions.
    </Link>
  </p>
);

export default TermsText; 