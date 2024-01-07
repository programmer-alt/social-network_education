import state from './redux/state';
import React from 'react';
import './index.css';
import App from './App';
import { addPost, updateNewPost } from './redux/state';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode)

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      
          <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
      
    </React.StrictMode>
    
  );
};

export default rerenderEntireTree

rerenderEntireTree(state);
