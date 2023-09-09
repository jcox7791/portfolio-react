import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

const PortfolioCard = (props) => {
    // const { title } = props.title;
    console.log(props + "I am the card")
    const styleH2 = {
        color: "pink"
    }
    return (
        <>

            <Card>
                <header>
                    <h2 style={styleH2}>{props.title}</h2>
                </header>
               
                    <img src="" alt="" />
               
             
            </Card>
         
        </>
    );
}

export default PortfolioCard;