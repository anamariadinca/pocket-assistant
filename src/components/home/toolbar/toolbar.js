import React, {useEffect, useState} from 'react';
import './toolbar.css';
import {RiSettings3Fill as SettingsIcon} from 'react-icons/ri';
import {CgProfile as ProfileIcon} from 'react-icons/cg';
import {AiOutlineLogout as LogOutIcon, AiOutlineLeft as CloseIcon, AiOutlineRight as OpenIcon} from 'react-icons/ai';

function Toolbar(props) {
    return (
        <div>
            <Navbar>
                <NavItem icon={[<CloseIcon/>, <OpenIcon/>]} id="side-nav-item">
                    <SideNavMenu role={props.role} name={props.name}/>
                </NavItem>
                {/*<div><img src="img/logo.png" style={{width: '170px'}}/></div>*/}
                <NavItem icon={<SettingsIcon/>} name={props.name}>
                    <DropdownMenu/>
                </NavItem>
            </Navbar>
        </div>
    );
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
            let centerDivName = "centerpiece"
            if (document.getElementById(centerDivName) != null) {
                if (!open) {
                    document.getElementById(centerDivName).style.marginLeft = '55%';
                } else {
                    document.getElementById(centerDivName).style.marginLeft = '45%';
                }
            }
        }
    }

    useEffect(() => {
        // document.getElementById("ddddd").prepend('<p>{props.name}</p>')
    });


    let id = props.id === "side-nav-item" ? "side-nav" : "";

    return (
        <li className="navbar" id={props.id}>
            <div id="ddddd" style={{display: 'flex'}}>
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
            <a href="#" className="menu-item">
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
                {/*<span className="icon-right"> {props.rightIcon} </span>*/}
            </a>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem leftIcon={<ProfileIcon/>}>
                My profile
            </DropdownItem>
            <DropdownItem leftIcon={<LogOutIcon/>}>
                Logout
            </DropdownItem>
        </div>
    )
}

function SideNavMenu(formUser) {

    function SideNavItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
            </a>
        );
    }

    function OptionalSideNavItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button"> {formUser.role === "teacher" ? props.leftIcon : ""} </span>
                {props.children}
            </a>
        );
    }

    return (
        <div className="side-nav">
            <SideNavItem leftIcon={<ProfileIcon/>}>
                My profile
            </SideNavItem>
            <SideNavItem leftIcon={<LogOutIcon/>}>
                Logout
            </SideNavItem>
            {formUser.role === "teacher" ?
                <OptionalSideNavItem leftIcon={<LogOutIcon/>}>
                    {formUser.role === "teacher" ? 'Adauga student' : ''}
                </OptionalSideNavItem> : ""}

        </div>
    )
}

export default Toolbar;