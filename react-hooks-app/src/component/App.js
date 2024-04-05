import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
  //Returns array of two elements inside of it. Similar to destructuring
  const [resource, setResource] = useState('posts');
    return (
      <div>
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );
}

export default App