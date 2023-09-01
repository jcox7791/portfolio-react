// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Unstable_Grid2';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// Componets
import NavBar from '../../componets/nav';
import './index.css';
// Images
import Me1 from '../../images/me/me1.jpg';


// Grid Layout
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
// console.log(Item, "Im the item function");

// Function
const Home = () => {
    // CSS
    const style = {
        font: "150px Copperplate, Papyrus, fantasy",
        marginBottom: "-150px ",
        marginLeft: "150px"
    }
    const style1 = {
        color: "greenyellow",
        font: "240px uppercase Copperplate, Papyrus, fantasy",
        marginLeft: "150px"

    }
    const style2 = {
        font: "60px Copperplate, Papyrus, fantasy",
        marginTop: "-200px",
        marginLeft: "150px",
        textIndent: "55px"
    }
    const styleCon = {
        display: "flex"
    }
    const styleImg = {
        boxShadow: '1px 2px 9px #F4AAB9',
        marginTop: "300px",
        marginLeft: "350px",
        padding: '1em',
        width: "980px",
    }
const styleNav={
    marginBottom:"1250px",
    marginLeft:"300px"
}

    return (
        <>


            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={8}>
                        <Item> */}
            <Container style={styleCon}>
                <Container>
                    <p style={style} >Interactive</p>
                    <p style={style1}>Visionary</p>
                    <p style={style2}>My name is James Cox. Over the last 20 years, I have been in the design world as a tattoo artist and have interacted with clients to create artistic masterpieces. In where i bring that same skill set to the table. Along with a passion for creating Web Applications, using a veriety of coding languages and front-end libraries.</p>
                </Container>
                {/* </Item>
                    </Grid>
                    <Grid xs={8}>
                        <Item> */}
                <Container>
                    <img src={Me1} style={styleImg} alt='James M. Cox Jr.' />
                </Container>
                <Container style={styleNav}>
                    {/* Nav Componet */}
                    <NavBar style={styleNav} />
                </Container>
            </Container>
            <Container style={styleNav}>
                    {/* Nav Componet */}
                    <NavBar style={styleNav} />
                </Container>
            {/* </Item>
                    </Grid>
                </Grid>
            </Box> */}


        </>
    )
};

export default Home