import Image from "next/image";

export default function BottomNavBar() {
  return (
    <nav className="fixed max-w-[640px] w-full bottom-0 bg-primary-500 h-20 border-none m-0">
      <div className="flex justify-around px-2 pb-4 pt-3 gap-2">
        <button className="flex flex-col items-center justify-center text-white group">
          <div className="px-6 py-2 rounded-3xl group-hover:bg-accent-purple transition-colors">
            <Image
              src="/bottom-nav-bar/home.svg"
              alt="Home"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs font-bold">Home</span>
        </button>

        <button className="flex flex-col items-center justify-center text-white group">
          <div className="px-6 py-2 rounded-3xl group-hover:bg-accent-purple transition-colors">
            <Image
              src="/bottom-nav-bar/resources.svg"
              alt="Resources"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs">Resources</span>
        </button>

        <button className="flex flex-col items-center justify-center text-white group">
          <div className="px-6 py-2 rounded-3xl group-hover:bg-accent-purple transition-colors">
            <Image
              src="/bottom-nav-bar/post.svg"
              alt="Post"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs">Post</span>
        </button>

        <button className="flex flex-col items-center justify-center text-white group">
          <div className="px-6 py-2 rounded-3xl group-hover:bg-accent-purple transition-colors">
            <Image
              src="/bottom-nav-bar/notifications.svg"
              alt="Notifications"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs">Notifications</span>
        </button>
      </div>
    </nav>
  );
}
