
// Import React
import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaMeetup } from "react-icons/fa";
import { Link } from '@reach/router';


class Navigation extends Component {
    render() {

        const { user, logOutUser } = this.props;

        return (
            <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"> < FaUsers className="mr-1" />Meeting Log </Link>
                    <div className="navbar-nav ml-auto">
                        {user && (
                            <Link className="nav-item nav-link" to="/meetings">
                                < FaMeetup className="mr-1" />  meetings</Link>
                            )}
                        {!user && (
                            <Link className="nav-item nav-link" to="/login">
                                <FiLogIn className="mr-1" /> login</Link>
                            )}
                        {!user && (
                            <Link className="nav-item nav-link" to="/register">
                                <MdAccountCircle className="mr-1" />   register</Link>
                            )}
                        {user && (
                            <Link className="nav-item nav-link" to="/login" onClick={e => logOutUser(e) }>
                                <FiLogOut className="mr-1" /> logout</Link> 
                            )}
                       
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navigation;