import React, {useEffect, useState} from 'react';
import './toolbar.css';
import '../Form.css';
import {RiSettings3Fill as SettingsIcon} from 'react-icons/ri';
import {CgProfile as ProfileIcon} from 'react-icons/cg';
import {AiOutlineLeft as CloseIcon, AiOutlineLogout as LogOutIcon, AiOutlineRight as OpenIcon} from 'react-icons/ai';

function Toolbar(props) {

    let position;

    useEffect( () => {
        let box = document.querySelector('.navbar');
        if (box != null) {
            position = box.offsetWidth;
        }
    }, [])


    return (
        <div>
            <Navbar>
                <NavItem icon={[<CloseIcon/>, <OpenIcon/>]} id="side-nav-item">
                    <SideNavMenu role={props.role} name={props.name}/>
                </NavItem>
                <div><img src="img/logo.png" style={{width: '170px', marginLeft:'50%', cursor: 'pointer'}} onClick={() => goToHomepage()}/></div>
                <NavItem icon={<ProfileIcon/>} name='Ana-Maria Dinca' id="profile-menu">
                    <DropdownMenu/>
                </NavItem>
            </Navbar>
        </div>
    );
}

function goToHomepage() {
    window.location.href="http://localhost:3000/meme"
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
            let centerDivName = "schedule"
            if (document.getElementById(centerDivName) != null) {
                if (!open) {
                    document.getElementById(centerDivName).style.marginLeft = 'var(--sched-nav-open)';
                    document.getElementById("textcenterpiece").style.marginInlineStart = 'var(--text-nav-open)';
                    document.getElementById("buttoncenterpiece").style.marginInlineStart = 'var(--button-nav-open)';
                } else {
                    document.getElementById(centerDivName).style.marginLeft = 'var(--sched-nav-closed)';
                    document.getElementById("textcenterpiece").style.marginInlineStart = 'var(--text-nav-closed)';
                    document.getElementById("buttoncenterpiece").style.marginInlineStart = 'var(--button-nav-closed)';
                }
            }
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