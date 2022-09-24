import React, {useState} from 'react';
import './styles/styles.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Javascript - язык программирования'},
        {id: 2, title: 'Javascript 2', body: 'Javascript - язык программирования'},
        {id: 3, title: 'Javascript 3', body: 'Javascript - язык программирования'}
    ]);
  return (
    <div className="App">
        <form action="">
            <input type="text" placeholder='Название поста'/>
            <input type="text" placeholder='Описание поста'/>
            <button>Моздать пост</button>
        </form>


        <PostList posts={posts}  title='Список постов'/>

    </div>
  );
}

export default App;
