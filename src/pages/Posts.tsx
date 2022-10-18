import React, {useEffect, useState} from 'react';
import '../styles/styles.css'
import PostList from "../components/PostList";
import PostForm, {IPost} from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import {usePosts} from "../hooks/usePosts";
import PostService from "../api/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [visibleModal, setVisibleModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit: number, page: number) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = Number(response?.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount, limit))
    })

    const createPost = (newPost: IPost): void => {
        setPosts([...posts, newPost])
        setVisibleModal(false)
    }
    const removePost = (id: number) => {
        setPosts(posts.filter((post: IPost) => post.id !== id))
    }

    useEffect(() => {
        // @ts-ignore
        fetchPosts(limit, page);
    }, [])

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const changePage = (page: number) => {
        setPage(page);
        // @ts-ignore
        fetchPosts(limit, page);
    }

    return (
        <div className="Posts">
            <Button style={{marginTop: "30px"}} onClick={() => setVisibleModal(true)}>Создать пользователя</Button>
            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <PostForm create={createPost}/>
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter}/>

            {postsError && <h1>{String(postsError)}</h1>}
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Loader/>
                </div>
                : <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
            }
            <Pagination page={page} totalPages={totalPages} changePage={changePage}/>
        </div>
    );
}

export default Posts;
