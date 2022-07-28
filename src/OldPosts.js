import React, { useState } from 'react';
import like from "./images/like.jpg";
import dislike from "./images/dislike.jpg";
import edit from "./images/edit.jpg";
import del from "./images/delete.png";



const OldPosts = ({posts, handleDelete, handleEdit, handleLike}) => {
    
    const [style, setStyle] = useState("noEdit");
    
    const handleStyle = () => {
        setStyle("Edit");   
    }
    
    const [body, setBody] = useState('');

    const handleSave = (id) => {
        setStyle("noEdit");
        handleEdit(id, body);
    }

    return (  
        <div className="OldPosts">
            {posts.slice(0).reverse().map((post) => (
                <div className="posts" key={post.id}>
                    <img src={edit} onClick={() => handleStyle()} className="edit"/>
                    <img src={del} onClick={() => handleDelete(post.id)}  className="delete"/>
                    <h3>{ post.title }</h3>
                    <div className={style}>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea><button onClick={() => handleSave(post.id)}>Edit</button>
                    </div>
                    {post.body}
                    <p>UserName : { post.user }</p>
                    <img src={like} onClick={() => handleLike(post.id, post.likes + 1)}/>{'\u00A0'} {post.likes} {'\u00A0'}
                    <img src={dislike} onClick={() => handleLike(post.id, post.likes - 1)}/>{'\u00A0'} 
                    
                </div>
            ))}
        </div>
    );
}
 
export default OldPosts;