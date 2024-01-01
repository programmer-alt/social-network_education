import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { updateAddPost, addPost} from './redux/state';


const rerenderEntireTree = (state) => {
 ReactDOM.render(
   <React.StrictMode>
     <App state={state} addPost={addPost} updateAddPost={updateAddPost}/>
   </React.StrictMode>,
   document.getElementById('root')
 )
}
export default rerenderEntireTree