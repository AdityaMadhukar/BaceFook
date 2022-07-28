import React, { useState } from 'react';
import OldPosts from './OldPosts';

const DashBoard = () => {
    const [posts, setPosts] = useState([
        {
          title: "My 1st Post",
          body: "Sasukeeeeeeeeeeeeee",
          user: "Naruto",
          likes: 90,
          id: 1
        },
        {
          title: "My 1st Post",
          body: "Narutooooooooooooo",
          user: "Sasuke",
          likes: 50,
          id: 2
        },
        {
          title: "DatteBayo",
          body: "Sasukeeeeeeeeeeeeeeeee",
          user: "Naruto",
          likes: 72,
          id: 3
        }
      ]);
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');

    const handleDelete = (id) => {
        const newposts = posts.filter(post => post.id != id);
        setPosts(newposts);
        alert("Deleted");
    }

    const handleEdit = (id, body) => {
        const newposts = posts.map(post => {
            if(post.id == id) {
                return {...post, body: body};
            }
            return post;
        })
        setPosts(newposts);
        alert("Edited");
    }
    const handleLike = (id, likes) => {
        const newposts = posts.map(post => {
            if(post.id == id) {
                return {...post, likes: likes};
            }
            return post;
        })
        setPosts(newposts);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const post= { title, body , user};
        setPosts([...posts, post]);
        alert("Posted");
    }

    return (  
        <div className="DashBoard">
            
            <form onSubmit={handleSubmit}>
                <h2>New Post</h2>
                <label>UserName : </label><input type="text" required value={user} onChange={(e) => setUser(e.target.value)}/><br /><br />
                <label>Title : </label><input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/><br /><br />
                <label>Post : </label><textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button type='submit'>Share</button>
            </form>
            {posts && <OldPosts posts={posts} handleDelete={handleDelete} handleEdit={handleEdit} handleLike={handleLike}/>}
        </div>
    );
}
 
export default DashBoard;