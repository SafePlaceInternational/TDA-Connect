import ViewPost from "@/components/view-post/view-post";
import TryQuickExit from "../try-quick-exit/page";
import AddPost from "@/components/add-post/add-post";
import ViewGroup from "../view-group/view-group"; 
import SensitiveTopic from "../view-sensitive-topics/page";

export default function Home() {
  return (
    <div className="w-full mt-4">
      <AddPost/>
      <TryQuickExit/>
      <ViewPost />
      <ViewGroup/>
      <SensitiveTopic/>
    </div>
  );
}
