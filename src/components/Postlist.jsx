import React from "react";
import PostItem from "./PostItem";




const Postlist = ({ posts, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post, index) => (
        <PostItem number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Postlist;
