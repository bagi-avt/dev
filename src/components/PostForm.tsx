import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

export interface IPost {
    id: number,
    title: string,
    body: string
}

interface IProps {
    create: (newPost:IPost)=> void,
}

const PostForm:FC<IProps> = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    function onButtonClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        create({...post, id: Date.now() })
        setPost({title: '', body: ''})
    }

    function onInputChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setPost({...post, title: event.target.value})
    }
    function onInputChangeBody(event: ChangeEvent<HTMLInputElement>) {
        setPost({...post, body: event.target.value})
    }
    return (
        <form action="">
            <Input value={post.title} type="text" name='title' placeholder='Название поста' onChange={onInputChangeTitle}/>
            <Input value={post.body} type="text" name='body' placeholder='Описание поста' onChange={onInputChangeBody}/>
            <Button disabled={post.title === '' || post.body === ''} onClick={onButtonClick}>Создать пост</Button>
        </form>
    );
};

export default PostForm;
