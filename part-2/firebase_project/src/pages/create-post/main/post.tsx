import {Post as IPost} from "./main";
interface Props {
    post: IPost;
}

export const Post = (props: Props) => {

    const {post} = props;
    return (

        <div>
            <div>
                <h1>
                    {post.title}
                </h1>
                <p>
                    {post.description}
                </p>
                <p>
                @{post.username}
                </p>
                <button> &#128077; </button>
            </div>
        </div>
    )
}