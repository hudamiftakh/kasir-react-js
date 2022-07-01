import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import {useEffect,useState} from 'react';
import logo from '../logo-light.png';
import url from '../Koneksi';
function Header(argument) {
    const [link,userUrl] = useState("");
    useEffect(()=>{
        userUrl(url);
    });
	return(
		<div>
		<header id="topnav">
            <div className="navbar-custom">
                <div className="container-fluid">
                    <ul className="list-unstyled topnav-menu float-right mb-0">
                        <li className="dropdown notification-list">
                            <a className="navbar-toggle nav-link">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="logo-box">
                        <Link to="./" className="logo text-center">
                            <span className="logo-lg">
                               <h1 style={{color: "white"}}><img src={logo} alt="" height="20" /></h1>
                            </span>
                            <span className="logo-sm">
                               <h1 style={{color: "white"}}><img src={logo} alt="" height="20" /></h1>
                                
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="topbar-menu">
                <div className="container-fluid">
                    <div id="navigation">
                        <ul className="navigation-menu">
                            <li className="has-submenu">
                                <Link to="./"><i className="fe-home"></i> Home</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="./transaksi"><i className="fe-shopping-cart"></i> Transaksi</Link>
                            </li>
                              <li className="has-submenu">
                                <Link to="./laporan"><i className="fe-list"></i> Laporan</Link>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>

        </header>
		</div>
	)
}

export default Header;