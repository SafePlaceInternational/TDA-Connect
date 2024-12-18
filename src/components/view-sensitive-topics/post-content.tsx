import Image from "next/image";

export default function PostContent() {
  return (
    <div className="flex flex-col bg-white m-4 rounded-lg p-4 justify-center items-center">
      <div><Image
        src="sensitive topics/Hidden Eye Icon.svg"
        alt="Hidden Eye icon"
        width={24}
        height={24}
      />
      </div>
      <div className="flex flex-col p-2 text-sm justify-center items-center">
        <p>Post hidden due to sensitive topic</p>
        <p>Change this filter in Settings</p>
      </div>
      <button className="border-[1px] border-black rounded-full px-4 py-2">View</button>
    </div>
  );
}
