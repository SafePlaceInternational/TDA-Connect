import ViewPost from "@/components/view-post/view-post";
import BottomNavBar from "@/components/bottom-nav-bar/bottom-nav-bar";

export default function Home(){
    return(
        <div className="w-full">
            <ViewPost/>
            <BottomNavBar />
        </div>   
    )
}