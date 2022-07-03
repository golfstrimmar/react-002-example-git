import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}
          <br></br>
          {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>
      <div className="post__btns">
        <button>delite</button>
      </div>
    </div>
  );
};




export default PostItem;
