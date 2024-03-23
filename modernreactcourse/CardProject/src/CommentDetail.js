import React from 'react';

const CommentDetail = ({ author, avatarImage, content, postDate }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatarImage} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today at {`${postDate.recent()}`} </span>
        </div>
        <div className="text">{content}</div>
      </div>
    </div>
  )
}

export default CommentDetail