import Profile from "../view-post/profile";
import PostContent from "./post-content";


export default function SensitiveTopic(){
    return(
        <div className="flex flex-col bg-secondary-200 p-4 w-full h-auto rounded-xl mt-4">
            <Profile/>
            <PostContent/>
            <button className="flex justify-start px-4">Show topic</button>
        </div>
    )
}