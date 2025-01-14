"use client";

import GroupProfile from "../view-post/profile";
import GroupContent from "./group-content";
import GroupReaction from "../view-post/post-reaction";
import { useDialogContext } from "@/lib/dialog-provider";
import { useEffect, useRef } from "react";

export default function ViewGroup() {
  const { highlightedComponent } = useDialogContext();
  const joinButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-scroll to the "join button"
    if (joinButtonRef.current && highlightedComponent === "groups") {
      joinButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedComponent]);

  return (
    <>
    <div
      ref={joinButtonRef}
      className={`flex flex-col bg-secondary-200 p-4 mt-4 w-full h-auto rounded-xl 
        ${highlightedComponent === "groups" && "relative scale-90 z-[1020]"}`}
    >
      <GroupProfile />
      <GroupContent />
      </div>
      <GroupReaction />
   
    </>
  );
}
