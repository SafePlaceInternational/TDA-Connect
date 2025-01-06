"use client"

import Profile from "../view-post/profile";
import PostContent from "./post-content";
import { useDialogContext } from "@/lib/dialog-provider";
import { useEffect, useRef } from "react";


export default function SensitiveTopic(){
    const { highlightedComponent } = useDialogContext();
    const sensitiveDivRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        console.log(highlightedComponent)
        if (sensitiveDivRef.current && highlightedComponent === "sensitiveTopic") {
            sensitiveDivRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
        }
      }, [highlightedComponent]);
    return(
        <div ref={sensitiveDivRef} className={`flex flex-col bg-secondary-200 p-4 w-full h-auto rounded-xl mt-4 ${highlightedComponent === "sensitiveTopic" && "relative scale-90 z-[1020]"}`}>
            <Profile/>
            <PostContent/>
            <button className="flex justify-start px-4">Show topic</button>
        </div>
    )
}