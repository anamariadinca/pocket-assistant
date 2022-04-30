import React, {useState} from 'react';
import './toolbar.css';
import {RiSettings3Fill as SettingsIcon} from 'react-icons/ri';
import {CgProfile as ProfileIcon} from 'react-icons/cg';
import {AiOutlineLogout as LogOutIcon} from 'react-icons/ai';

class Toolbar extends React.Component {

    render() {
        return (
            <Navbar>
                <NavItem icon={<SettingsIcon/>}>
                    <DropdownMenu/>
                </NavItem>
            </Navbar>
        );
    }
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

    return (
        <li className="navbar">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
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

export default Toolbar;