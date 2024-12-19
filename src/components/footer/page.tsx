import Link from 'next/link';
export default function Footer() {
  return (
    <div  className="flex items-center justify-between w-[100%] bg-primary-500 px-6 mt-4 text-white">
        <div  className="flex-row w-full justify-center item-center px-6 my-3">
        <div>
            <div className="flex justify-center item-center">
                <p className="text-lg">TDA Connect</p>
            </div>
            <div className="flex justify-center item-center">
                <p className="text-xd">A Safe Place for Community, Resources, and Growth</p>
            </div>
        </div>
        <div className='flex justify-center item-center w-full'>
            <div className="flex justify-center item-center w-[60%]">
                <div className="p-3 w-[35%]">
                    <Link href="#" className='underline'>About us</Link>
                </div>
                <div className="p-3 w-[30%]">
                    <Link href="#" className='underline'>FAQs</Link>
                </div>
                <div className="p-3 w-[35%]">
                    <Link href="#" className='underline'>Contact us</Link>
                </div>
            </div>
        </div>
          
          <div className="w-full">
            <hr className="border-accent-purple border-[1px]"/>
          </div>
          <div>
            <div className="flex justify-center item-center mt-4">
                <p className="text-md">2024 by Safe Place International</p>
            </div>
            <div className="flex justify-center item-center">
                <p className="text-md">EIN 82-3250577</p>
            </div>
        </div>
      </div>
    </div>
  );
}