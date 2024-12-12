import Image from "next/image"

export default function PostReaction(){
    return(
        <div className="flex flex-row w-full h-14 justify-evenly items-center">
            <div className="flex flex-row gap-1">
                <button><Image src="view-post/like-emoji.svg" alt="like button" width={24} height={24}/></button>
                <p>2 Likes</p>
            </div>
            <div className="flex flex-row gap-1">
                <button><Image src="view-post/comments-icon.svg" alt="comments button" width={24} height={24}/></button>
                <p>2 comments</p>
            </div>
            <div className="flex flex-row gap-1">
                <button><Image src="view-post/save-icon.svg" alt="save button" width={24} height={24}/></button>
                <p>Save</p>
            </div>
        </div>
    )
}