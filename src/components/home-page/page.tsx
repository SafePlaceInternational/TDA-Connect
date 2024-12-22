"use client";
import { useEffect, useState } from "react";
import ViewPost from "@/components/view-post/view-post";
import TryQuickExit from "../try-quick-exit/page";
import AddPost from "@/components/add-post/add-post";
import ViewGroup from "../view-group/view-group";
import SensitiveTopic from "../view-sensitive-topics/page";
import Footer from "../footer/page";
import WelcomeDialog from "../welcome/welcome-dialog";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Show welcome dialog on initial load
    setShowWelcome(true);
  }, []);

  return (
    <div className="w-full mt-4">
      <WelcomeDialog open={showWelcome} onOpenChange={setShowWelcome} />
      <AddPost/>
      <TryQuickExit/>
      <ViewPost />
      <ViewGroup/>
      <SensitiveTopic/>
      <Footer/>
    </div>
  );
}
