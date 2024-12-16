import Image from "next/image";
  
export default function PostCreate(){
    return(
        <div className="flex w-full bg-primary justify-center items-center gap-2">
            <div className="p-2 ">
                <Image
                src="/add-post/profile-photo.svg"
                alt="Profile-pic"
                width={68}
                height={68}
                className="rounded-full"
                />
            </div>
            <div className="p-3 w-[80%]">
                <input
                className="w-full h-12 p-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                placeholder="Write a post..."
                />
            </div>
        </div>
    );
}