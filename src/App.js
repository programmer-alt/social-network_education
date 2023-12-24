import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import News from './components/News';
// import Music from './components/Music';
// import Setting from './components/Setting';



function App(props) {
  
 
  return (
    <div className='app-wrapper' >
      <Header />
      <Router>
        <Navbar />
        {/* <Profile/> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.posts} />} />
            <Route path='/dialogs' element={<Dialogs message={props.message} dialogs={props.dialogs}/>} />
           
          </Routes>
        </div>
      </Router>




    </div>
  );
}

export default App;
