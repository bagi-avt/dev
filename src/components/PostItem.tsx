import React from 'react';
import {IPost} from "./PostForm";
import Button from "./UI/button/Button";
import {useHistory} from "react-router-dom";
interface IProps {
    post: IPost,
    number: number,
    removePost: (id: number) =>void

}
const PostItem:React.FC<IProps> = ({post,number, removePost}) => {
    const {title, body} = post;
    const history = useHistory();
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{number}. {title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__bts">
                    <Button onClick={()=> history.push(`/posts/${post.id}`)}>Открыть</Button>
                    <Button onClick={()=> removePost(post.id)}>Удалить</Button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;