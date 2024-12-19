import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col w-full bg-primary-500 p-6 text-white pb-16">
      <div className="flex justify-center item-center">
        <p className="font-bold text-xl">TDA Connect</p>
      </div>

      <p className="font-normal text-sm mt-2 self-center">
        A Safe Place for Community, Resources, and Growth
      </p>

      <div className="flex justify-between item-center px-2">
        <Link href="#" className="underline p-3 text-lg font-medium">
          About us
        </Link>

        <Link href="#" className="underline p-3 text-lg font-medium">
          FAQs
        </Link>

        <Link href="#" className="underline p-3 text-lg font-medium">
          Contact us
        </Link>
      </div>

      <hr className="border-accent-purple border-[1px]" />

      <div className="flex flex-row justify-center item-center mt-4">
        <Image
          src="/footer/Copyright.svg"
          alt="copyright"
          width={16}
          height={16}
        />
        <p className="text-md font-normal">2024 by Safe Place International</p>
      </div>

      <p className="text-md self-center font-normal">EIN 82-3250577</p>
    </div>
  );
}
