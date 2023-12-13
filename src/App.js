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



function App() {
  return (
    <div className='app-wrapper' >
      <Header />
      <Router>
        <Navbar />
        {/* <Profile/> */}
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            {/* <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} /> */}
          </Routes>
        </div>
      </Router>




    </div>
  );
}

export default App;
