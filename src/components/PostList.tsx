import React, {useMemo, useState} from 'react';
import PostItem from "./PostItem";

interface IPost {
    id: number,
    title: string,
    body: string
}

interface IProps {
    posts: IPost[],
    title: string
}

const PostList:React.FC<IProps> = ({posts, title}) => {

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts?.map((post: IPost) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;