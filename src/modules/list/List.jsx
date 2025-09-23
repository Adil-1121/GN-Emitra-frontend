import React from "react";
import './list.scss'
import Navbar from '../../core/components/common-components/navbar/navbar';
import Sidebar from '../../core/components/common-components/sidebar/sidebar';
import Breadcrumb from '../../core/components/common-components/breadcrumb/Breadcrumb';
import DataTable from "../../core/components/users/datatable/DataTable";

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Breadcrumb items={['Dashboard', 'Users List']} />

                <DataTable />
            </div>
        </div>
    )
}
export default List