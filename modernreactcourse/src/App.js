import React from 'react';
// import ReactDOM from 'react-dom';
import { name, image, date, lorem } from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './App.css';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={name.firstName()}
          avatarImage={image.avatar()}
          postDate={date}
          content={lorem.paragraph()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
