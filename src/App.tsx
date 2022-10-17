import React, { useMemo, useState} from 'react';
import './styles/styles.css'
import PostList from "./components/PostList";
import PostForm, {IPost} from "./components/PostForm";
import {getObjectValueByKey} from "./utils";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Javascript - язык программирования'},
        {id: 2, title: 'CCJavascript 2', body: 'Javascript - язык программирования'},
        {id: 3, title: 'BBJavascript 3', body: 'AAJavascript - язык программирования'},
        {id: 4, title: 'AAJavascript 3', body: 'Javascript - язык программирования'}
    ]);
    const [filter, setFilter] = useState({sort: '', query:''});
    const [visibleModal, setVisibleModal] = useState(false);
    const createPost = (newPost: IPost): void => {
        setPosts([...posts, newPost])
        setVisibleModal(false)
    }
    const removePost = (id: number) => {
        setPosts(posts.filter((post: IPost) => post.id !== id))
    }

    const sortedPost: IPost[] = useMemo(()=> {
        return filter.sort ?
            [...posts].sort((a: IPost, b: IPost) => {
                return getObjectValueByKey(filter.sort, a)?.localeCompare(getObjectValueByKey(filter.sort, b));
            })
            :
            posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPost.filter(post => post.title.toUpperCase().includes(filter.query.toUpperCase()))
    },[filter.query, sortedPost])



    return (
        <div className="App">
            <Button style={{marginTop: "30px"}} onClick={()=> setVisibleModal(true)}>Создать пользователя</Button>
            <Modal visible={visibleModal} setVisible={setVisibleModal}>
                <PostForm create={createPost}/>
            </Modal>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
        </div>
    );
}

export default App;
