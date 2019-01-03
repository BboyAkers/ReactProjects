import React, { Component } from 'react';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="ui container comments">
          <CommentDetail
            imageSource={faker.image.avatar()}
            author="DeWitt Akers" 
            postTime="Today at 12:00pm"
            post="Bacon ipsum dolor amet prosciutto sausage short loin" 
          />
          <CommentDetail
            imageSource={faker.image.avatar()}
            author="DeWitt Akers" 
            postTime="Today at 12:03pm"
            post="bresaola frankfurter ham hock filet mignon" 
          />
          <CommentDetail
            imageSource={faker.image.avatar()}
            author="Alex Akers" 
            postTime="Today at 12:18pm"
            post="Bacon venison tri-tip drumstick alcatra ball tip shoulder sausage biltong" 
          />
          <ApprovalCard />
        </div>
    );
  }
}

export default App;
