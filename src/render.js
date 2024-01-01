import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPost } from './redux/state';


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      
          <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
      
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default rerenderEntireTree