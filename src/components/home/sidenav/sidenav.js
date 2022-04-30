import React, {useState} from "react"
import "./sidenav.css"
import {element} from "prop-types";

class SideNav extends React.Component {
    state = {
        showNav: false,
        // role: "student"
    }

    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            if (this.state) {
                this.closeNav()
            }
        }
    }

    openNavClick = e => {
        e.preventDefault()
        this.openNav()
    }

    closeNavClick = e => {
        e.preventDefault()
        this.closeNav()
    }

    openNav = () => {
        this.setState({
            showNav: true
        })

    }
    closeNav = () => {
        this.setState({
            showNav: false
        })
    }

    render() {

        const {showNav} = this.state
        let navCoverStyle = {width: showNav ? "100%" : "0"}
        let sideNavStyle = {width: showNav ? "250px" : "0"}
        let centerDivName = "centerpiece"
        if (document.getElementById(centerDivName) != null) {
            if (showNav) {
                document.getElementById(centerDivName).style.marginLeft = '55%';
            } else {
                document.getElementById(centerDivName).style.marginLeft = '45%';
            }
        }

        let element;
        if (this.props.formUserRole === "teacher") element = <a href="http://localhost:3000/home">Înregistrează un student</a>;
        return (
            <React.Fragment>
        <span onClick={this.openNavClick} className="open-nav">
          &#9776; open
        </span>
                <div
                    className="nav-cover"
                    style={navCoverStyle}
                />
                <div id="side-nav" name="side-nav" className="side-nav" style={sideNavStyle} ref={this.wrapperRef}>
                    <a href="#" onClick={this.closeNavClick} className="close-nav">
                        &times;
                    </a>
                    <a href="http://localhost:3000/404">Rezervă sala</a>
                    <a href="http://localhost:3000/403">Orarul săptămânii</a>
                    {element}
                    <a href="http://localhost:3000/meme">Contact</a>
                </div>
            </React.Fragment>
        )
    }
}

export default SideNav
