import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Ahmed Khan",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2235235,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/619BkvKW35L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Fatima Ali",
            date: "2 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Mohammed Yusuf",
            date: "5 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://m.media-amazon.com/images/I/81aV5iU4G2L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Ayesha Siddiqui",
            date: "10 March",
            amount: 920,
            method: "Online Payment",
            status: "Approved",
        },
        {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Omar Farooq",
            date: "15 March",
            amount: 2000,
            method: "Online Payment",
            status: "Pending",
        },
    ];

    return (
        <div className="table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableCell">Track Id</TableCell>
                            <TableCell className="tableCell">Product</TableCell>
                            <TableCell className="tableCell">Customer</TableCell>
                            <TableCell className="tableCell">Date</TableCell>
                            <TableCell className="tableCell">Amount</TableCell>
                            <TableCell className="tableCell">Payment Method</TableCell>
                            <TableCell className="tableCell">Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell className="tableCell">{row.id}</TableCell>

                                <TableCell>
                                    <div className="cellWrapper">
                                        <img src={row.img} alt={row.product} className="image" />
                                        {row.product}
                                    </div>
                                </TableCell>
                                <TableCell className="tableCell">{row.customer}</TableCell>
                                <TableCell className="tableCell" align="right">{row.date}</TableCell>
                                <TableCell className="tableCell" align="right">{row.amount}</TableCell>
                                <TableCell className="tableCell" align="right">{row.method}</TableCell>
                                <TableCell className="tableCell" align="right"><span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></div>
    );
};

export default List;
