import Container from '@mui/material/Container';
// Images
import Me1 from '../../images/me/me1.jpg';


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
        display: "inline-flex"
    }
    const styleImg = {
        boxShadow: '5px 15px 50px #2929bc',
        marginTop: "300px",
        marginLeft: "350px",
        padding: '1em',
        width: "980px",
    }


    return (
        <>           
            <Container style={styleCon}>
                <Container>
                    <p style={style} >Interactive</p>
                    <p style={style1}>Visionary</p>
                    <p style={style2}>My name is James Cox. Over the last 20 years, I have been in the design world as a tattoo artist and have interacted with clients to create artistic masterpieces. In where i bring that same skill set to the table. Along with a passion for creating Web Applications, using a veriety of coding languages and front-end libraries.</p>
                </Container>
                <Container>
                    <img src={Me1} style={styleImg} alt='James M. Cox Jr.' />
                </Container>               \
            </Container>

        </>
    )
};

export default Home