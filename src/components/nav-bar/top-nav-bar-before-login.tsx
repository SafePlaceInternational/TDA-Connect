import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="max-w-lg">
      <div className="flex items-center justify-between w-[100%] bg-primary-500 h-16 p-4 py-2">
        <button className="flex justify-start">
          <Image
            src={'/logoColourWhite.svg'}
            alt="logo"
            width={68}
            height={40}
          />
        </button>
        <div className="flex justify-end items-center">
          <button className="flex justify-center items-center gap-2.5 px-4 py-2 bg-[#f4c521] rounded-[100px] text-[#13020f]">
            <p>Sign in</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
