"use client";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useSession } from "next-auth/react";


export default function TermsAndConditions() {
  const {data:user} = useSession()  
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleButton = async ()=>{
   if(isChecked){
    if (isChecked) {
        try {
          const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update-terms/`, { hasAgreedTerms: true });
          if (response.status === 200) {
            // Redirect user after successful update
            router.push('/')
          }
        } catch (error) {
          console.error("Error updating terms agreement:", error);
        }
      } else {
        alert("You must agree to the terms and conditions to continue.");
      }
   }
  }

  return (
    <div className="flex flex-col w-full bg-primary px-4 mt-4 mb-4 gap-2">
      <div>
        <h3 className="font-bold">Terms & Conditions</h3>
      </div>
      <div>
        <p>Scroll through the Terms & Conditions to continue</p>
      </div>
      <ScrollArea className="h-[484px] border-[1px]  border-[#D2D2D2] p-4 orientation-[vertical]">
        <div className="flex flex-col  h-[484px] px-4">
          <div className="mt-4">
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src={"/terms-and-conditions/Icon-check-circle.svg"}
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-bold">Confidentiality</p>
              </div>
            </div>
            <div>
              <p>
                Once you create an account with us, you are registered on the
                SPI Site. When you create an account, you will provide an email
                and a unique password.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src={"/terms-and-conditions/Icon-check-circle.svg"}
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-bold">Safety</p>
              </div>
            </div>

            <div>
              <p>
                You herein agree not to make use of Safe Place International's
                Services for the purpose of: uploading, posting, emailing,
                transmitting, or otherwise making available any content that
                shall be deemed unlawful, harmful, threatening, abusive,
                harassing, tortious, defamatory, vulgar, obscene, libelous, or
                invasive of another's privacy or which is hateful, and/or
                racially, ethnically, or otherwise objectionable.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src={"/terms-and-conditions/Icon-check-circle.svg"}
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-bold">Termination</p>
              </div>
            </div>
            <div>
              <p>
                As a member of TDAConnect.org, you may cancel or terminate your
                account, associated email address and/or access to our Services
                by submitting a cancellation or termination request to SPI. As a
                member, you agree that Safe Place International may, without any
                prior written notice, immediately suspend, terminate,
                discontinue and/or limit your account, any email associated with
                your account, and access to any of our Services.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row gap-4">
              <div>
                <Image
                  src={"/terms-and-conditions/Icon-check-circle.svg"}
                  alt="search icon"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="font-bold">Rights</p>
              </div>
            </div>
            <div>
              <p>
                You do hereby acknowledge and agree that Safe Place
                International's Services and any essential software that may be
                used in connection with our Services ("Software") shall contain
                proprietary and confidential material that is protected by
                applicable intellectual property rights and other laws.
                Furthermore, you herein acknowledge and agree that any Content
                which may be contained in any advertisements or information
                presented by and through our Services or by advertisers is
                protected by copyrights, trademarks, patents or other
                proprietary rights and laws.
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
      {user && <div className="flex gap-4">
        <input
          type="checkbox"
          id="terms"
          onChange={handleCheckBox}
          className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="terms">
          By creating an account, you agree to the Terms & Conditions of Safe
          Place International and TDA Connect.
        </label>
      </div>}
      <div className="flex justify-end mt-4">
        <button onClick={()=>router.push('/sign-in')} className="border-[1px] border-black rounded-full px-4 py-2">
          Close
        </button>
       {user && <button
          className={`${
            isChecked ? "bg-tertiary-500" : "bg-neutral-200"
          } rounded-full ml-2 px-4 py-2`}
          onClick={handleButton}
        >
          Next
        </button>}
      </div>
    </div>
  );
}
