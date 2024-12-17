import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function Profile() {

   
  return (
    <div className="flex flex-row w-full px-3">
      <div className="basis-0.5/4">
        <Avatar>
          <AvatarImage src="/view-post/profile-photo.svg" />
          <AvatarFallback className="bg-accent-blue">CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-row basis-3/4 justify-start px-4">
        <div className="flex flex-row justify-start">
          <p className="font-bold">Rukiya </p>
          <p className="text-neutral-700">(they/them)</p>
        </div>
        <p>15m ago</p>
      </div>
      <div className="flex basis-0.5/4 justify-end">
        <button>
          <Image
            src="view-post/dot-icon.svg"
            alt="dot icon"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
}
