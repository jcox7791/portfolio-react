import * as React from 'react';
// Componets
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
// Icons
import ShareIcon from '@mui/icons-material/Share';


const PortfolioCard = (props) => {
    // console.log(props + "I am the card");

    // CSS
    const cardHeader = {
        color: "#2929bc",
        font: "80px Copperplate, Papyrus, fantasy",
    }
    const cardStyle = {
        margin: "20px"
    }
    const shareIconStyle={
        fontSize:"50px"
    }
    const typographyStyle = {       
        fontSize: "25px"               
    }
    // Card Componets
    const card = (
        <React.Fragment>
            <CardContent>
                {/* Header Content */}
                <Typography style={cardHeader}>
                    {props.title}
                </Typography>
                {/* Image Coontent */}
                <CardMedia
                    component="img"
                    height="194"
                    src={props.image}
                    alt={props.alt}
                />
                {/* Text Content */}
                <Typography style={typographyStyle} >
                    {props.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={props.href}>
                    <ShareIcon style={shareIconStyle}></ShareIcon>
                </Button>
            </CardActions>
        </React.Fragment>
    );

    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card style={cardStyle} >{card}</Card>
            </Box>
        </>
    );
}

export default PortfolioCard;