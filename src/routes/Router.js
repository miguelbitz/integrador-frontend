import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.js/Header'
import PostDetails from '../pages/PostDetails/PostDetails'
import Feed from '../pages/Feed/Feed'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export default function Router() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/post/:id" element={<PostDetails />} />
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
