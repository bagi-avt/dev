import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../api/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import {IPost} from "../components/PostForm";

const PostIdPage = () => {
    const {id} = useParams<{ id: string }>();
    const [post, setPost] = useState<IPost>();
    const [comments, setComments] = useState<any>([]);
    const [fetchPostById, isLoading, error] = useFetching(async (postId: string) => {
        const response = await PostService.getPostById(postId);
        setPost(response.data)
    })
    const [fetchCommentById, isLoadingComment, errorComment] = useFetching(async (postId: string) => {
        const response = await PostService.getCommentPostById(postId);
        setComments(response.data)
    })
    useEffect(()=>{
        // @ts-ignore
        fetchPostById(id);
        // @ts-ignore
        fetchCommentById(id);
    },[])
    return (
        <div>
            <h2>Пост ID = {id}</h2>
            {isLoading
                ? <Loader/>
                :   <div>
                        <h3>{post?.id}. {post?.title}</h3>
                        <p>{post?.body}</p>
                    </div>
            }
            <h2>
                Комментарии
            </h2>
            {isLoadingComment
                ? <Loader/>
                : <div>
                    {comments.map((comm: any) =>
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <p>{comm.body}</p>
                        </div>
                    )}
                </div>
            }
        </div>
    )
};

export default PostIdPage;