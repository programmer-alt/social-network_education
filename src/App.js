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
            <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
           
          </Routes>
        </div>
      </Router>




    </div>
  );
}

export default App;
