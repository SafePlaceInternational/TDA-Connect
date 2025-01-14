import Profile from "./profile"
import PostContent from "./post-content"
import PostReaction from "./post-reaction"

export default function ViewPost(){
    return(
        <div className="flex flex-col bg-secondary-200 p-4 w-full h-auto rounded-xl">
             <Profile/>
             <PostContent/>
             <PostReaction/>
        </div>
    )

}