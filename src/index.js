import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:10PM" comment="c1" imgSrc={faker.image.avatar()} />
      <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comment="c2" imgSrc={faker.image.avatar()} />
      <CommentDetail author="Jane" timeAgo="Yesterday at 5:55PM" comment="c3" imgSrc={faker.image.avatar()} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
