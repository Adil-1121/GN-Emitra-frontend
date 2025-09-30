import React from "react";
import "./widget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faShoppingCart,
    faWallet,
    faMoneyBillWave,
    faArrowUp,
    faArrowDown
} from "@fortawesome/free-solid-svg-icons";

const Widget = ({ type }) => {
    let data;
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <FontAwesomeIcon icon={faUser} className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <FontAwesomeIcon icon={faShoppingCart} className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} />
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <FontAwesomeIcon icon={faMoneyBillWave} className="icon" style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} />
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <FontAwesomeIcon icon={faWallet} className="icon" style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${diff >= 0 ? "positive" : "negative"}`}>
                    <FontAwesomeIcon icon={diff >= 0 ? faArrowUp : faArrowDown} />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
