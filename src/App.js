// import logo from './logo.svg';
// import axios from 'axios';
import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

//Pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404";
import ForbiddenPage from "./pages/403";
import RegistrationPage from "./pages/registration";
import CredentialsPage from "./pages/credentials";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import EmailSentPage from "./components/registration/FormSuccess";
import Meme from "./pages/meme";
import LoadingPage from "./pages/loading";
import OtpPage from "./pages/otp";
import TokenValidation from "./pages/tokenValidation";

class App extends Component {
    render() {
        return <Router>
                <Routes>
                    <Route path = '/' element = {<MainPage/>}/>
                    <Route path = '/register' element = {<RegistrationPage/>}/>
                    <Route path = '/emailSent' element = {<EmailSentPage/>}/>
                    <Route path = '/credentialsValidated' element = {<CredentialsPage/>}/>
                    <Route path = '/credentials' element = {<TokenValidation/>}/>
                    <Route path = '/otp*' element = {<OtpPage/>}/>
                    <Route path = '/login' element = {<LoginPage/>}/>
                    <Route path = '/loading' element = {<LoadingPage/>}/>
                    <Route path = '/demo' element = {<HomePage/>}/>
                    <Route path = '/meme' element = {<Meme/>}/>
                    <Route path = '/home' element = {<HomePage/>}/>
                    <Route path = '/404' element = {<NotFoundPage/>}/>
                    <Route path = '/403' element = {<ForbiddenPage/>}/>
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
        </Router>
    }
}

export default App;
