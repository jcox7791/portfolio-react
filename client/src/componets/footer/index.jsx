import TableFooter from '@mui/material/TableFooter';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Data
import FooterData from '../../data/itemFooterData';


const FooterBar = () => {
    // CSS
    const imageIconStyle = {
        marginRight: "25px",
        width: "100px"
    }
    const imageListItemIcons = {
        textAlign: "left",
        display: "inline",

    }
    const tableSytle = {
        backgroundColor: "#2929bc",
        marginTop: "-40px",
        marginRight: "3000px"
    }
    const tabelCellStyle = {
        color: "whitesmoke",
        fontSize: "25px",
        // textAlign: ""
    }
    const tabelCellStyle1 = {
        color: "whitesmoke",
        fontSize: "25px",        
        // textAlign: "center"
    }
    const tabelCellStyle2 = {
        color: "whitesmoke",
        fontSize: "25px",
        // marginRight:"360px",
        textAlign: "center"
    }
    const tableCellStyleCreator={
        color: "whitesmoke",
        fontSize: "25px",
    }
    const tableCellDesign = {
        color: "whitesmoke",
        fontSize: "25px",
        textAlign: "center"
    }

    return (
        <TableFooter>
            <Table style={tableSytle} >
                <TableHead>
                    <TableRow style={tabelCellStyle1}>
                        <TableCell style={tabelCellStyle}>Follow Me</TableCell>
                        <TableCell style={tabelCellStyle1}>Created By</TableCell>
                        <TableCell style={tabelCellStyle2} >Contant Info</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow >
                        <TableCell style={tableCellDesign}>
                            <ImageList>
                                {/* Mapping FooterData for images, alternitive-text and links */}
                                {FooterData.map((item) => (
                                    <ImageListItem key={item.icons.src} style={imageListItemIcons}>
                                        <a href={item.icons.getHub.href}>
                                            <img
                                                alt={item.icons.getHub.title}
                                                src={item.icons.getHub.src}
                                                srcSet={item.icons.getHub.src}
                                                style={imageIconStyle}
                                            />
                                        </a>
                                        <a href={item.icons.linkedIn.href}>
                                            <img
                                                alt={item.icons.linkedIn.title}
                                                src={item.icons.linkedIn.src}
                                                srcSet={item.icons.linkedIn.src}
                                                style={imageIconStyle}
                                            />
                                        </a>
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </TableCell>
                        {/* Mapping FooterData for created by */}
                        {FooterData.map((item) => (
                            <TableCell key={item.creator} style={tableCellStyleCreator}>
                                {item.creator.createdBy} &copy;{item.creator.copyWrights}
                                
                            </TableCell>
                        ))}
                       {/* Mapping FooterData for contact info */}
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
        </TableFooter>




        // <TableContainer style={tableContainerSytle}>

        // </TableContainer>
    );
}

export default FooterBar