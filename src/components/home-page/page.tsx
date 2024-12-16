import ViewPost from "@/components/view-post/view-post";

import AddPost from "@/components/add-post/add-post";
export default function Home() {
  return (
    <div className="w-full">
      <AddPost></AddPost>
      <ViewPost />
    </div>
  );
}
