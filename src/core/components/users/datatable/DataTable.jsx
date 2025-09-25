import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import { userColumns, userRows } from '../../../../datatablesource';
import { Link } from "react-router-dom";


const DataTable = () => {
    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            console.log("render action cell, params:", params);
            return (
                <div className='cellAction'>
                    <Link to="/users/single" style={{ textDecoration: "none" }}>

                        <div className="viewButton">View</div></Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]
    return (
        <div className="datatable">
            <div className="dataTableTitle">
                Add New User
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSizeOptions={[5, 10]}

                pageSize={9}
                rowPerPageOption={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTable;
