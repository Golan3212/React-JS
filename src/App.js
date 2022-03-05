
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile';
import Layout from './constants/Layout';
import NoMatch from './pages/NoMatch';
import Chats from './pages/Chats';




function App() {


  return (
    <div className='mainDiv'>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats/:chatId/*" element={<Chats />} />
          <Route path="/chats/*" element={<Chats />} />
          <Route path="*" element={<NoMatch />} />
          <Route />
        </Routes>

        {/* <Chats /> */}
       
      </div>

    </div>
  );
}


export default App;