import React from "react";
import './home.scss'
import Navbar from '../../core/components/common-components/navbar/navbar';
import Sidebar from '../../core/components/common-components/sidebar/sidebar';
import Breadcrumb from '../../core/components/common-components/breadcrumb/Breadcrumb';
import Widget from "../../core/components/dashboard/widget/widget";
import Featured from "../../core/components/dashboard/featured/Featured";
import Chart from "../../core/components/dashboard/chart/Chart";
import Table from "../../core/components/dashboard/table/Table";
import DateFilter from "../../core/components/dashboard/dateFilter/DateFilter";
import ChatBot from '../../core/components/common-components/ai-chatbot/Chatbot';
// If DateFilter is here

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <Breadcrumb items={['Dashboard', 'Admin Dashboard']} />
                <DateFilter onDateChange={(range) => console.log("Date Range Changed:", range)} />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />

                </div>
                <div className="charts">
                    <Featured />
                    <Chart />

                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <Table />
                </div>
            </div>
            <ChatBot />
        </div>
    )
}
export default Home