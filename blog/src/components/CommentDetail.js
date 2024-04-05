import React from 'react';
const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.imageSource} />
      </a>
      <div className="content">
        <a href="/" className="author">
         {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.postTime}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  )
}

export default CommentDetail;
