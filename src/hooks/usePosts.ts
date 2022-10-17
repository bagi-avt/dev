import {IPost} from "../components/PostForm";
import {useMemo} from "react";
import {getObjectValueByKey} from "../utils";

export const useSortedPosts = (posts: IPost[], sort: string) => {
    return useMemo(()=> {
        return sort ?
            [...posts].sort((a: IPost, b: IPost) => {
                return getObjectValueByKey(sort, a)?.localeCompare(getObjectValueByKey(sort, b));
            })
            :
            posts
    }, [sort, posts]);
}


export const usePosts = (posts: IPost[], sort: string, query: string) => {
    const sortedPost = useSortedPosts(posts, sort);
    return useMemo(()=>{
        return sortedPost.filter(post => post.title.toUpperCase().includes(query.toUpperCase()))
    },[query, sortedPost]);
}
