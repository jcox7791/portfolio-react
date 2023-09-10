import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Images
import GetHub from '../../images/icons/github.png';
import Indeed from '../../images/icons/indeed-logo.webp'


function createData(social, design, contact) {
    return { social, design, contact }
}
// Images
const iconImages = [Indeed, GetHub]
// console.log(iconIndeed, "I am social indeed icons")

const rows = [
    createData(iconImages, 'Creative Cyber Designs',
        'jcox.jc77@gmail.com')
];
console.log(rows)

const FooterBar = () => {
    // CSS
    const tableContainerSytle = {
        backgroundColor: "#2929bc",
        marginRight: "1130px",
        marginBottom: "-100px",
        position: "fixed-bottom"
    }
    const tabelCellStyle = {
        color: "whitesmoke",
        fontSize: "25px",
        textAlign: "center"
    }
    const tableCellDesign = {
        color: "",
        fontSize: "25px",
        textAlign: "center"
    }
    return (
        <TableContainer style={tableContainerSytle}>
            {/* <img src={socialIcons} alt="" /> */}
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell style={tabelCellStyle}>Follow Me</TableCell>
                        <TableCell style={tabelCellStyle} align="right">Designed By</TableCell>
                        <TableCell style={tabelCellStyle} align="right">Contant Info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell style={tableCellDesign}>
                                {row.social}
                            </TableCell>
                            <TableCell style={tableCellDesign}>{row.design}</TableCell>
                            <TableCell style={tableCellDesign}><a href="mailto:/">{row.contact}</a></TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FooterBar