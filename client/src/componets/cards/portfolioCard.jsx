// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// Page
// import Portfolio from '../../pages/portfolio';

export default function PortfolioCard(props) {
    const {title} = props.title;
    console.log(title)
    return (
        <>
        <h2>{title}</h2>
            {/* <Card>
                <CardActionArea>
                    <CardHeader>
                        
                    </CardHeader>
                    <CardMedia>
                        <img src="" alt="" />
                    </CardMedia>
                    <CardContent>
                        <Typography></Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <CardActionArea>

            </CardActionArea> */}
        </>
    );
}