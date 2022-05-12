import React, {useEffect, useState} from 'react';
import './toolbar.css';
import '../../home/Form.css';
import {RiContactsFill as ContactIcon} from 'react-icons/ri';
import {MdOutlineEditCalendar as ReservationIcon} from 'react-icons/md';
import {CgProfile as ProfileIcon} from 'react-icons/cg';
import {AiOutlineLeft as CloseIcon, AiOutlineLogout as LogOutIcon, AiOutlineRight as OpenIcon} from 'react-icons/ai';
import {VscMenu as OpenIcon2} from 'react-icons/vsc';
import {moveScheduleForm} from "./toolbar-utils";

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
    window.location.href="http://localhost:3000/home"
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
            if (document.getElementById("schedule") != null) {
                let width = document.getElementById("schedule").offsetWidth;
                if (!open) {
                    document.getElementById("schedule").style.marginLeft = 'calc((100% - ' + width + 'px + 170px)/2)';
                    document.getElementById("imageid").style.left = 'calc(50%)';
                    document.getElementById("textcenterpiece").style.marginRight = '-170px';
                    document.getElementById("buttoncenterpiece").style.marginLeft = 'calc(40% + 85px)';
                } else {
                    document.getElementById("schedule").style.marginLeft = 'calc((100% - ' + width + 'px)/2)';
                    document.getElementById("imageid").style.left = 'calc((100% - 170px) / 2)';
                    document.getElementById("textcenterpiece").style.marginRight = '0px';
                    document.getElementById("buttoncenterpiece").style.marginLeft = '40%';
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
            <DropdownItem leftIcon={<ProfileIcon/>}>
                Setări
            </DropdownItem>
            <DropdownItem leftIcon={<LogOutIcon/>} redirectLink="http://localhost:3000/login">
                Ieși din cont
            </DropdownItem>
        </div>
    )
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
                <span className="icon-button"> {formUser.role === "teacher" ? props.leftIcon : ""} </span>
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
            {formUser.role === "teacher" ?
                <OptionalSideNavItem leftIcon={<LogOutIcon/>} redirectLink="#">
                    {formUser.role === "teacher" ? 'Adauga student' : ''}
                </OptionalSideNavItem> : ""}

        </div>
    )
}

export default Toolbar;