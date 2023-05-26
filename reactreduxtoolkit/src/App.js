import './App.css';

import Counter  from './features/counter/Counter';
import PostList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App">
    
        <div className='container'>
          <Counter />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <PostList/>
            </div>
            
            <div className='col'>
              <AddPostForm/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
