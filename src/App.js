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
import LoadingRegistrationPage from "./pages/loading-registration";
import OtpPage from "./pages/otp";
import TokenValidation from "./pages/tokenValidation";
import ReserveRoomPage from "./pages/reserveRoom";
import ContactPage from "./pages/contact";
import SettingsPage from "./pages/settings";
import RegisterStudentPage from "./pages/register-student";
import RoomReservedSuccess from "./components/reserve-room/FormSuccess";
import StudentRegisteredPage from "./components/add-student/FormSuccess";
import SettingsSuccessfulPage from "./components/settings/FormSuccess";
import LogoutPage from "./components/toolbar/logout";

class App extends Component {
    render() {
        return <Router>
                <Routes>
                    <Route path = '/' element = {<MainPage/>}/>
                    <Route path = '/register' element = {<RegistrationPage/>}/>
                    <Route path = '/emailSent' element = {<EmailSentPage/>}/>
                    <Route path = '/roomReserved' element = {<RoomReservedSuccess/>}/>
                    <Route path = '/studentRegistered' element = {<StudentRegisteredPage/>}/>
                    <Route path = '/credentialsValidated' element = {<CredentialsPage/>}/>
                    <Route path = '/credentials' element = {<TokenValidation/>}/>
                    <Route path = '/otp*' element = {<OtpPage/>}/>
                    <Route path = '/login' element = {<LoginPage/>}/>
                    <Route path = '/loading' element = {<LoadingPage/>}/>
                    <Route path = '/loadingRegistration' element = {<LoadingRegistrationPage/>}/>
                    <Route path = '/logout' element = {<LogoutPage/>}/>
                    <Route path = '/reserveRoom' element = {<ReserveRoomPage/>}/>
                    <Route path = '/contact' element = {<ContactPage/>}/>
                    <Route path = '/registerStudent' element = {<RegisterStudentPage/>}/>
                    <Route path = '/settings' element = {<SettingsPage/>}/>
                    <Route path = '/settingsUpdated' element = {<SettingsSuccessfulPage/>}/>
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
