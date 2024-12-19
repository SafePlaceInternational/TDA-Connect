import GroupProfile from "../view-post/profile"
import GroupContent from "./group-content"
import GroupReaction from "../view-post/post-reaction"

export default function ViewGroup(){
    return(
        <div className="flex flex-col bg-secondary-200 p-4 mt-4 w-full h-auto rounded-xl">
             <GroupProfile/>
             <GroupContent/>
             <GroupReaction/>
        </div>
    )

}