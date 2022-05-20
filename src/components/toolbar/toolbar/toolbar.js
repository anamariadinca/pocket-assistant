import React, {useEffect, useState} from 'react';
import './toolbar.css';
import '../../home/Form.css';
import {RiContactsFill as ContactIcon, RiSettings4Fill as SettingsIcon} from 'react-icons/ri';
import {MdOutlineEditCalendar as ReservationIcon} from 'react-icons/md';
import {CgProfile as ProfileIcon} from 'react-icons/cg';
import {AiOutlineLeft as CloseIcon, AiOutlineLogout as LogOutIcon} from 'react-icons/ai';
import {VscMenu as OpenIcon2} from 'react-icons/vsc';
import {moveScheduleForm} from "./toolbar-utils";
import we from "react-datepicker";
import {fetchCall} from "../../utils/utils";

function Toolbar(props) {

    return (
        <div>
            <Navbar>
                <NavItem icon={[<CloseIcon/>, <OpenIcon2/>]} id="side-nav-item">
                    <SideNavMenu role={props.role} name={props.name}/>
                </NavItem>
                <div id="imagediv"><img id='imageid' src="img/img.png" onClick={() => goToHomepage()}/></div>
                <NavItem icon={<ProfileIcon/>} name={props.name} id="profile-menu">
                    <DropdownMenu/>
                </NavItem>
            </Navbar>
        </div>
    );
}

function goToHomepage() {
    window.location.href = "http://localhost:3000/home"
}

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul className="navbar-nav"> {props.children} </ul>
        </nav>
    )
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    function chooseAction(id) {
        setOpen(!open)
        if (id === "side-nav") {
            document.getElementById('side-nav').style.marginLeft = !open ? "170px" : ""
            if (document.getElementById("schedule-today") != null) {
                let widthToday = document.getElementById("schedule-today").offsetWidth;
                if (!open) {
                    document.getElementById("schedule-today").style.marginLeft = 'calc((100% - ' + widthToday + 'px + 170px)/2)';
                    document.getElementById("schedule-tomorrow").style.marginRight = 'calc((100% - 400px)/2 - 400px)';
                    document.getElementById("schedule-yesterday").style.marginLeft = 'calc((100% - 400px)/2 - 230px)';

                    document.getElementById("arrowRight").style.marginRight = 'calc((100% - 400px)/2 - 508px)';
                    document.getElementById("arrowLeft").style.marginLeft = 'calc((100% - 400px)/2 - 218px)';

                    document.getElementById("imageid").style.left = 'calc(50%)';
                    document.getElementById("textcenterpiece").style.marginRight = '-170px';
                    document.getElementById("reservationbutton").style.marginLeft = 'calc(40% + 85px)';
                } else {
                    document.getElementById("schedule-today").style.marginLeft = 'calc((100% - ' + widthToday + 'px)/2)';
                    document.getElementById("schedule-tomorrow").style.marginRight = 'calc((100% - 400px)/2 - 310px)';
                    document.getElementById("schedule-yesterday").style.marginLeft = 'calc((100% - 400px)/2 - 310px)';

                    document.getElementById("arrowRight").style.marginRight = '';
                    document.getElementById("arrowLeft").style.marginLeft = '';

                    document.getElementById("imageid").style.left = 'calc((100% - 170px) / 2)';
                    document.getElementById("textcenterpiece").style.marginRight = '0px';
                    document.getElementById("reservationbutton").style.marginLeft = '40%';
                }
            }
            moveScheduleForm(open);

        }
    }

    let id = props.id === "side-nav-item" ? "side-nav" : "";

    return (
        <li className="navbar" id={props.id}>
            <div style={{display: 'flex', height: 'var(--nav-size)'}}>
                <p>{props.name}</p>
                <a href="#" className="icon-button" id={id} onClick={() => chooseAction(id)}>
                    {props.icon.length === 2 ? (open ? props.icon[0] : props.icon[1]) : props.icon}
                </a>
                {open && props.children}
            </div>
        </li>
    )


}

function DropdownMenu() {

    function DropdownItem(props) {
        return (
            <a href={props.redirectLink} className="menu-item">
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
                {/*<span className="icon-right"> {props.rightIcon} </span>*/}
            </a>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem leftIcon={<SettingsIcon/>}>
                Setări
            </DropdownItem>
            <DropdownItem leftIcon={<LogOutIcon/>} func={logout()}>
                Ieși din cont
            </DropdownItem>
        </div>
    )
}

function logout() {
    // fetchCall("http://localhost:8081/logout", "", "http://localhost:3000/login")
    fetch("http://localhost:8081/invalidateJWT?token=" + window.document.cookie, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + window.document.cookie
        }
    }).then(response => {
        const status = response.status
        if (status === 200) {
            console.log("SUCCESSS")
            window.location.href = "http://localhost:3000/login";
        } else if (status === 400) {
            document.getElementById("submitButton").disabled = false
            console.log("SOMETHING WENT WRONG")
            response.json().then(json => {
                alert(json.message)
                console.log(json);
            })
                .catch(error => {
                    console.log(error)
                    // handle error
                });
        } else if (status === 500) {
            document.getElementById("submitButton").disabled = false
            console.log("SOMETHING WENT WRONG")
            response.json().then(json => {
                alert(json.message)
                console.log(json);
            })
                .catch(error => {
                    console.log(error)
                    // handle error
                });
        }
    })
}

function SideNavMenu(formUser) {

    function SideNavItem(props) {
        return (
            <a href={props.redirectLink} className="menu-item">
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
            </a>
        );
    }

    function OptionalSideNavItem(props) {
        return (
            <a href={props.redirectLink} className="menu-item">
                <span className="icon-button"> {formUser.role === "teacher" || formUser.role === "admin" ? props.leftIcon : ""} </span>
                {props.children}
            </a>
        );
    }

    return (
        <div className="side-nav">
            <SideNavItem leftIcon={<ReservationIcon/>} redirectLink="http://localhost:3000/reserveRoom">
                Rezervă o sală
            </SideNavItem>
            <SideNavItem leftIcon={<ContactIcon/>} redirectLink="#">
                Contact
            </SideNavItem>
            {formUser.role === "teacher" || formUser.role === "admin" ?
                <OptionalSideNavItem leftIcon={<LogOutIcon/>} redirectLink="#">
                    {formUser.role === "teacher" || formUser.role === "admin" ? 'Adauga student' : ''}
                </OptionalSideNavItem> : ""}

        </div>
    )
}

export default Toolbar;