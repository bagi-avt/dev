import React from 'react';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
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
            <TransitionGroup>
                {posts?.map((post: IPost) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem removePost={removePost} number={post.id} post={post}/>
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    );
};

export default PostList;
