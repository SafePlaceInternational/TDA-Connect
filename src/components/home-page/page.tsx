import ViewPost from "@/components/view-post/view-post";
import TryQuickExit from "../try-quick-exit/page";

export default function Home() {
  return (
    <div className="w-full">
      <TryQuickExit/>
      <ViewPost />
    </div>
  );
}
