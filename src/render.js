import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { updateNewPost, addPost } from './redux/state';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
    </React.StrictMode>
  );
};

export default rerenderEntireTree;
