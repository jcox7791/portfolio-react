import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function createData(social, design, contact) {
    return { social, design, contact }
    // return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Indeed', 'Creative Cyber Designs',
    'jcox.jc77@gmail.com'),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

const FooterBar = () => {
    // CSS
    const tableContainerSytle = {
        backgroundColor: "#2929bc"
    }
    const tabelCellStyle = {
        color: "whitesmoke",
        fontSize: "25px"
    }
    return (
        <TableContainer style={tableContainerSytle}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell style={tabelCellStyle}>Social</TableCell>
                        <TableCell style={tabelCellStyle} align="right">Designed By:</TableCell>
                        <TableCell style={tabelCellStyle} align="right">Contant Info:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.social}
                            </TableCell>
                            <TableCell align="right">{row.design}</TableCell>
                            
                            <TableCell align="right"><a href="mailto:/">{row.contact}</a></TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FooterBar