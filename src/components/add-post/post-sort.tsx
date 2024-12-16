import Image from "next/image";
export default function PostSort(){
    
    return(
        <div className="flex w-full px-4 justify-center items-center">
            <div className="flex w-[40%] py-4 flex-col justify-center items-start gap-2 shrink-0 self-stretch">
                <hr className="border-black border-[1px] my-3 px-3 w-full"/>
            </div>
            <div className="w-[60%]">
            <select
                    className="block w-full pl-3 pr-8 py-2 bg-[url('/add-post/up-down-arrow.svg')] bg-no-repeat bg-right
                    text-base bg-black text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-500
                    focus:border-green-500 sm:text-sm rounded-full shadow-sm 
                    appearance-none"
                >
                    <option>Sort by: Most recent</option>
                    <option>Most relevant</option>
                </select>
            </div>
        </div>
    )
}