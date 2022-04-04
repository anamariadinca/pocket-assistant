// import logo from './logo.svg';
// import axios from 'axios';
import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch, Link, Navigate} from "react-router-dom";

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import ForbiddenPage from "./pages/403";
import RegistrationPage from "./pages/registration";
import CredentialsPage from "./pages/credentials";
import LoginPage from "./pages/login";
import EmailSentPage from "./components/registration/FormSuccess";
import Meme from "./pages/meme";
import Home from "./pages/home";
import OtpPage from "./pages/otp";

class App extends Component {
    render() {
        return <Router>
                <Routes>
                    <Route path = '/' element = {<MainPage/>}/>
                    <Route path = '/register' element = {<RegistrationPage/>}/>
                    <Route path = '/emailSent' element = {<EmailSentPage/>}/>
                    <Route path = '/credentials' element = {<CredentialsPage/>}/>
                    <Route path = '/otp*' element = {<OtpPage/>}/>
                    <Route path = '/login' element = {<LoginPage/>}/>
                    <Route path = '/meme' element = {<Meme/>}/>
                    <Route path = '/home' element = {<Home/>}/>
                    <Route path = '/404' element = {<NotFoundPage/>}/>
                    <Route path = '/403' element = {<ForbiddenPage/>}/>
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
        </Router>
    }
}

export default App;
