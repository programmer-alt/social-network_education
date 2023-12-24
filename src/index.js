import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Dimich' },
  { id: 2, name: 'Andrey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Victor' },
  { id: 6, name: 'Valera' }
]
let message = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Do you think visualization can change thinking?' },
  { id: 3, message: 'Yo yo' },
  { id: 4, message: 'Yo bro' },
  { id: 5, message: 'Yo' },
  ]


let posts = [
  { id: 1, message: 'hi,how are you?', likesCount: 0 },
  { id: 2, message: 'it is my first post', likesCount: 12 },
  {id: 3, message: 'blabla', likesCount: 11},
  {id:4, message: 'Dada', likesCount: 11}
]

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} message={message}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
