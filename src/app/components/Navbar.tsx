import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between w-[100%] mb-[1em] bg-[#251a36] h-16 pl-2 pr-4 py-2">
        <div className="flex items-center w-[30%]">
          <div className="p-3">
            <Image
              src={'/icons/burgerMenuIcon.svg'}
              alt="tree"
              width={24}
              height={24}
            />
          </div>
          <div className="p-3">
            <Image
              src={'/icons/searchIcon.svg'}
              alt="tree"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="flex justify-center w-[40%]">
          <Image
            src={'/logoColourWhite.svg'}
            alt="tree"
            width={68}
            height={40}
          />
        </div>
        <div className="w-[30%] flex justify-end items-center">
          <div className="flex justify-center items-center gap-2.5 px-4 py-2 bg-[#f4c521] rounded-[100px]">
            <Image
              src={'/icons/exitIcon.svg'}
              alt="logo"
              width={24}
              height={24}
            />
            <p>Exit</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
