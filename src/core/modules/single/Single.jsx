import React from "react";
import './single.scss'
import Navbar from "../../components/common-components/navbar/navbar";
import Sidebar from "../../components/common-components/sidebar/sidebar";
import Breadcrumb from "../../components/common-components/breadcrumb/Breadcrumb";
const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <Breadcrumb items={['Dashboard', 'Users List', 'View User']} />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        {/* <div className="item">
                            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" className="itemImg" />
                        </div> */}
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}
export default Single
