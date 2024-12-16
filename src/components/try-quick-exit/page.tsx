import Image from "next/image";

export default function TryQuickExit() {
  return (
    <div className="flex flex-col bg-accent-pink rounded-lg mx-4 my-3 px-4 py-3 gap-1">
      <div className="flex flex-row">
        <p className="font-[400] text-base">
          Tap Exit at the top right of the screen to leave the site and clear
          all session data. Customize this privacy feature in Settings.
        </p>
        <button className="flex justify-start p-2">
          <Image src="/Close.svg" alt="Close Button" width={100} height={100} />
        </button>
      </div>
      <div className="flex justify-end font-semibold m-2">
        <button>Try Quick Exit</button>
      </div>
    </div>
  );
}
