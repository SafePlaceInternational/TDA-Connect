import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: "home.svg" },
    { href: "/resources", label: "Resources", icon: "resources.svg" },
    { href: "/new-post", label: "Post", icon: "post.svg" },
    { href: "/notifications", label: "Notifications", icon: "notifications.svg" },
  ];

  return (
    <nav className="fixed max-w-[640px] w-full bottom-0 bg-primary-500 h-20 border-none m-0">
      <div className="flex justify-around px-2 pb-4 pt-3 gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className="flex flex-col items-center justify-center text-white group"
            href={item.href}
          >
            <div
              className={`px-6 py-2 rounded-3xl ${
                pathname === item.href ? "bg-accent-purple" : ""
              }`}
            >
              <Image
                src={`/bottom-nav-bar/${item.icon}`}
                alt={item.label}
                width={24}
                height={24}
                className="mb-1"
              />
            </div>
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
