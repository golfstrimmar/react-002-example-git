import React from "react";
import { useState } from "react";
// import Counter from "./components/Сount";
// import PostItem from "./components/PostItem";

import Postlist from "./components/Postlist";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";

function App() {
  const title = "posts list"

  const [posts, setPosts] = useState([
    { id: 1, title: "javascript1", body: "description1" },
    { id: 2, title: "javascript2", body: "description2" },
    { id: 3, title: "javascript3", body: "description3" }
  ]);

 

  // const [titlePost, setTitle] = useState("");
  // const [bodyPost, setBody] = useState("");

const [post, setPost] = useState({ titlePost: '',bodyPost: '' });




  const addNewPost = (e) => {
    e.preventDefault();
   const newPost = {
     id: Date.now(),
     title: post.titlePost,
     body: post.bodyPost,
   };
   setPosts([...posts, newPost]);
   setPost({ titlePost: "", bodyPost: "" });
   
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={post.titlePost}
          onChange={(e) => setPost({ ...post, titlePost: e.target.value })}
          type="text"
          placeholder="post title"
        />

        <MyInput
          value={post.bodyPost}
          onChange={(e) => setPost({ ...post, bodyPost: e.target.value })}
          type="text"
          placeholder="post description"
        />

        <MyButton onClick={addNewPost}>MyButton</MyButton>
      </form>
      <Postlist posts={posts} title={title} />
    </div>
  );
}

export default App;
