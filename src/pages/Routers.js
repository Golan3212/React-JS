import '../App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Profile from '../pages/Profile';
import Layout from '../constants/Layout';
import NoMatch from '../pages/NoMatch';
import Chats from '../pages/Chats';
import Gists from '../pages/Gists';
import Registration from './Registration';
import Login from './Login';
import RequireAuth from '../hocs/RequireAuth';


const Routers = () => {
    return (
        <div className='mainDiv'>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route element={<RequireAuth />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/chats/:chatId/*" element={<Chats />} />
                        <Route path="/chats/*" element={<Chats />} />
                        <Route path="/gists" element={<Gists />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                    <Route />
                </Routes>

            </div>

        </div>
    )
}

export default Routers;