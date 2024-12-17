import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed max-w-[640px] w-full bottom-0 bg-primary-500 h-20 border-none m-0">
      <div className="flex justify-around px-2 pb-4 pt-3 gap-2">
        <Link
          className="flex flex-col items-center justify-center text-white group"
          href="/"
        >
          <div
            className={`px-6 py-2 rounded-3xl   ${
              pathname === "/" ? "bg-accent-purple" : ""
            }`}
          >
            <Image
              src="/bottom-nav-bar/home.svg"
              alt="Home"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs font-bold">Home</span>
        </Link>

        <Link
          className="flex flex-col items-center justify-center text-white group"
          href="/resources"
        >
          <div
            className={`px-6 py-2 rounded-3xl  ${
              pathname === "/resources" ? "bg-accent-purple" : ""
            }`}
          >
            <Image
              src="/bottom-nav-bar/resources.svg"
              alt="Resources"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs">Resources</span>
        </Link>

        <Link
          className="flex flex-col items-center justify-center text-white group"
          href="/new-post"
        >
          <div
            className={`px-6 py-2 rounded-3xl ${
              pathname === "/new-post" ? "bg-accent-purple" : ""
            }`}
          >
            <Image
              src="/bottom-nav-bar/post.svg"
              alt="Post"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs">Post</span>
        </Link>

        <Link
          className="flex flex-col items-center justify-center text-white group"
          href="/notifications"
        >
          <div
            className={`px-6 py-2 rounded-3xl ${
              pathname === "/notifications" ? "bg-accent-purple" : ""
            }`}
          >
            <Image
              src="/bottom-nav-bar/notifications.svg"
              alt="Notifications"
              width={24}
              height={24}
              className="mb-1"
            />
          </div>
          <span className="text-xs">Notifications</span>
        </Link>
      </div>
    </nav>
  );
}
