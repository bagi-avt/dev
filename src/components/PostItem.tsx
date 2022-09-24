import React from 'react';

interface IProps {
    post: {
        id: number,
        title: string,
        body: string
    },

}
const PostItem:React.FC<IProps> = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{id}. {title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__bts">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;