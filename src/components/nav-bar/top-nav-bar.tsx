import Image from "next/image";
import LeftSideMenu from "../side-menu/left-side-menu";
import { useDialogContext } from "@/lib/dialog-provider";

const Navbar = () => {
  const { highlightedComponent } = useDialogContext();
  return (
    <nav className="max-w-lg">
      <div className="flex items-center justify-between w-full bg-primary-500 h-16 pl-2 pr-4 py-2">
        <div className="flex items-center w-[30%]">
          <div className="p-3 cursor-pointer">
            <LeftSideMenu />
          </div>
          <button className="p-3">
            <Image
              src={"/top-nav-bar/searchIcon.svg"}
              alt="search icon"
              width={24}
              height={24}
            />
          </button>
        </div>
        <button className="flex justify-center w-[40%]">
          <Image
            src={"/logoColourWhite.svg"}
            alt="logo"
            width={68}
            height={40}
          />
        </button>
        <div className="w-[30%] flex justify-end items-center">
          <button
            id="exitButton"
            className={`flex justify-center items-center gap-2.5 px-4 py-2 bg-[#f4c521] rounded-[100px] text-[#13020f] ${
              highlightedComponent === "exitButton" && "shadow-2xl shadow-white rounded-full transform transition-transform duration-300 scale-125 z-[200]"
            }`}
          >
            <Image
              src={"/top-nav-bar/exitIcon.svg"}
              alt="exit button"
              width={24}
              height={24}
            />
            <p>Exit</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
