import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Data
import FooterData from '../../data/itemFooterData';
// Images
// import GetHub from '../../images/icons/github-mark-white.png';









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
                    <TableRow >
                        <TableCell style={tableCellDesign}>
                            <ImageList>
                                {FooterData.map((item) => (
                                    <ImageListItem key={item.iconImgs.src}>
                                        <img
                                            src={item.iconImgs.src}
                                            srcSet={item.iconImgs.src}
                                            alt={item.iconImgs.title}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </TableCell>
                        <TableCell style={tableCellDesign}></TableCell>
                        {FooterData.map((item) => (
                            <TableCell key={item.contact} style={tableCellDesign}>
                                <a href="mailto: jcox.jc77@gmail.com ">
                                    {item.contact.email}
                                </a>
                            </TableCell>
                        ))}
                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FooterBar