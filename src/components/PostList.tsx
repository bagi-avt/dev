import React from 'react';
import PostItem from "./PostItem";
import {IPost} from "./PostForm";


interface IProps {
    posts: IPost[],
    title: string,
    removePost: (id: number) =>void
}

const PostList:React.FC<IProps> = ({posts, title,removePost}) => {
    if(!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts?.map((post: IPost, index) =>
                <PostItem removePost={removePost} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;