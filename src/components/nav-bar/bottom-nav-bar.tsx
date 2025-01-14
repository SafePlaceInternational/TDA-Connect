import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDialogContext } from "@/lib/dialog-provider";

export default function BottomNavBar() {
  const { highlightedComponent } = useDialogContext();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: "home.svg" },
    { href: "/resources", label: "Resources", icon: "resources.svg" },
    { href: "/new-post", label: "Post", icon: "post.svg" },
    {
      href: "/notifications",
      label: "Notifications",
      icon: "notifications.svg",
    },
  ];

  return (
    <nav className=" max-w-lg">
      <div
        className={`fixed flex justify-around px-2 pb-4 pt-3 gap-2 w-full bottom-0 bg-primary-500 h-20 border-none m-0 ${
          highlightedComponent === "resourceButton" && "z-[60]"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={`flex flex-col items-center justify-center text-white ${
              highlightedComponent === "resourceButton" &&
              item.href === "/resources"
                ? "shadow-up-lg shadow-white rounded-full transform transition-transform duration-300 scale-150 p-2 z-[1020] "
                : ""
            }`}
            href={item.href}
          >
            <div
              className={`px-6 py-2 rounded-3xl ${
                pathname === item.href &&
                highlightedComponent !== "resourceButton"
                  ? "bg-accent-purple"
                  : ""
              } `}
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
