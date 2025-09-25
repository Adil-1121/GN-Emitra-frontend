import React, { useState } from "react";
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import BuildIcon from '@mui/icons-material/Build';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import logo from '../../../../assets/logo.png';
import avatar from '../../../../assets/avatar.png';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
const Sidebar = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(false);

    const togglePortfolio = () => {
        setPortfolioOpen(!portfolioOpen);
    };

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">
                        <img src={logo} className="avatar" alt="Logo" />
                        ADMIN PANEL
                    </span></Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li className="active">
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">LISTS</p>

                    <li
                        className={`portfolio ${portfolioOpen ? "active" : ""}`}
                        onClick={togglePortfolio}
                        style={{ cursor: "pointer", userSelect: "none" }}
                    >
                        <PersonIcon className="icon" />
                        <span>Portfolio</span>
                        <KeyboardArrowRightIcon
                            className={`arrowIcon ${portfolioOpen ? "rotate" : ""}`}
                        />
                    </li>

                    {portfolioOpen && (
                        <>                <Link to="/users" style={{ textDecoration: "none" }}>

                            <li className="submenu">
                                <span>About</span>
                            </li></Link>
                            <li className="submenu">
                                <span>Services</span>
                            </li>
                            <li className="submenu">
                                <span>Testimonials</span>
                            </li>
                            <li className="submenu">
                                <span>Faqs</span>
                            </li>
                        </>
                    )}
                    <Link to="/users" style={{ textDecoration: "none" }}>

                        <li>
                            <GroupIcon className="icon" />
                            <span>Users</span>
                            <KeyboardArrowRightIcon className="arrowIcon" />
                        </li></Link>
                    <li>
                        <BuildIcon className="icon" />
                        <span>Services</span>
                        <KeyboardArrowRightIcon className="arrowIcon" />
                    </li>


                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                        <KeyboardArrowRightIcon className="arrowIcon" />
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notification</span>
                        <KeyboardArrowRightIcon className="arrowIcon" />
                    </li>


                    <p className="title">SERVICE</p>
                    <li>
                        <ContactMailIcon className="icon" />
                        <span>Contact Messages</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="profile">
                    <img src={avatar} className="profileImg" alt="User Avatar" />
                    <div className="profileInfo">
                        <div className="nameRow">
                            <span className="name">Sadiq Hussain</span>
                            <VerifiedUserIcon className="verifiedIcon" />
                        </div>
                        <span className="role">Admin</span>
                    </div>
                    <LogoutIcon className="logoutIcon" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
