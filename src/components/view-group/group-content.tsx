import Image from "next/image";
export default function GroupContent(){
    return(
        <div className="mt-4 px-3">
            <p className="text-base font-[400] pb-4">
                Hello TDA Connect Community! Come and join the new public group that I’ve created.
            </p>
            <div className="flex flex-row">
                <div>
                    <Image
                        src="/view-group/group-icon.svg"
                        alt=""
                        width={86}
                        height={86}
                    />
                </div>
                <div className="px-4">
                    <div className="pb-2"><span>Lesotho LGBTQ</span></div>
                    <div className="rounded-[8px] bg-[#D2D4F0] flex justify-center item-center p-2"><p className="text-xs">Social</p></div>
                </div>
            </div>
            
            <div className="w-[100%] mt-4">
                <div className="flex justify-center items-center gap-2.5 px-4 py-2 bg-[#f4c521] rounded-[100px] text-[#13020f]">
                    <p>Join</p>
                </div>
            </div>
            
            <hr className="border-accent-purple border-[1px] my-3 px-3"/>
        </div>
    )
}