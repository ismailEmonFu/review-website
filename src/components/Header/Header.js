import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo192.png';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className="bar-container">
                <div className="container">
                    <div className="row headerMenu">
                        <h1 className="page-title">Tecno Drawing Club</h1>
                        <div className="col-md-2">
                            <div className="logo-img">
                                <img className="w-75 rounded img-color" src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="menu-container ">
                                <ul className="d-flex align-items-end justify-content-end">
                                    <Link to="/home" className="items">
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/services" className="items">
                                        <li>Drawing</li>
                                    </Link>
                                    <Link to="/about" className="items">
                                        <li>About us</li>
                                    </Link>
                                    <Link to="/contact" className="items">
                                        <li>Contact</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;