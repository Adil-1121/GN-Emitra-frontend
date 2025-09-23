import React from "react";
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import avatar from '../../../../assets/avatar.png';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Tooltip from "@mui/material/Tooltip";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Type here to search..." />
                    <SearchOutlinedIcon className="search-icon" />
                </div>

                <div className="items">
                    {/* Language */}
                    <Tooltip title="Language" arrow placement="bottom">
                        <div className="item">
                            <LanguageOutlinedIcon className="icon" />
                            English
                        </div>
                    </Tooltip>

                    {/* Dark Mode */}
                    <Tooltip title="Toggle Dark Mode" arrow placement="bottom">
                        <div className="item">
                            <DarkModeOutlinedIcon className="icon" />
                        </div>
                    </Tooltip>

                    {/* Fullscreen */}
                    <Tooltip title="Fullscreen" arrow placement="bottom">
                        <div className="item">
                            <FullscreenExitOutlinedIcon className="icon" />
                        </div>
                    </Tooltip>

                    {/* Notifications */}
                    <Tooltip title="Notifications" arrow placement="bottom">
                        <div className="item">
                            <NotificationsNoneOutlinedIcon className="icon" />
                            <div className="counter">1</div>
                        </div>
                    </Tooltip>

                    {/* Chat / Messages */}
                    <Tooltip title="Messages" arrow placement="bottom">
                        <div className="item">
                            <ChatBubbleOutlinedIcon className="icon" />
                            <div className="counter">2</div>
                        </div>
                    </Tooltip>

                    {/* AI Button */}
                    <Tooltip title="AI Assistant" arrow placement="bottom">
                        <div className="item">
                            <span className="text">AI</span>
                            <AutoAwesomeIcon className="icon ai-icon" />
                        </div>
                    </Tooltip>

                    {/* Add Button */}
                    <Tooltip title="Add New" arrow placement="bottom">
                        <div className="item">
                            <AddCircleOutlineOutlinedIcon className="icon" />
                        </div>
                    </Tooltip>

                    {/* List/Menu */}
                    <Tooltip title="Menu" arrow placement="bottom">
                        <div className="item">
                            <ListOutlinedIcon className="icon" />
                        </div>
                    </Tooltip>
                    {/* Settings (New item added last) */}
                    <Tooltip title="Settings" arrow placement="bottom">
                        <div className="item">
                            <SettingsOutlinedIcon className="icon" />
                        </div>
                    </Tooltip>
                    {/* Avatar (Always last) */}
                    <Tooltip title="Profile" arrow placement="bottom">
                        <div className="item">
                            <img src={avatar} className="avatar" alt="User Avatar" />
                        </div>
                    </Tooltip>

                </div>
            </div>
        </div>
    )
}
export default Navbar