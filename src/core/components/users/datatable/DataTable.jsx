import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import { userColumns, userRows } from '../../../../datatablesource';


const DataTable = () => {
    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            console.log("render action cell, params:", params);
            return (
                <div className='cellAction'>
                    <div className="viewButton">View</div>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
    }]
    return (
        <div className="datatable">
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
