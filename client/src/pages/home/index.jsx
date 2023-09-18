import Container from '@mui/material/Container';
// Images
import Me1 from '../../images/me/me1.jpg';


const Home = () => {
    // CSS
    const style = {
        font: "100px Copperplate, Papyrus, fantasy",
        marginBottom: "",
        marginLeft: "150px"
    }
    const style1 = {
        color: "greenyellow",
        font: "200px uppercase Copperplate, Papyrus, fantasy",
        marginLeft: "150px",
        marginTop: "-100px"
    }
    const style2 = {
        font: "50px Copperplate, Papyrus, fantasy",
        marginTop: "-150px",
        marginRight:"-350px",
        marginLeft: "150px",
        textIndent: "55px"
    }
    const styleCon = {
        display: "inline-flex"        
    }
    const styleCon1={
        marginTop:"60px"
    }
    const styleSpan={
        color:"greenyellow",
        fontWeight: "bold"
    }
    const styleImg = {
        boxShadow: '5px 15px 150px #2929bc',
        marginTop: "100px",
        marginBottom:"200px",
        marginLeft: "850px",
        padding: '2em',
        width: "1000px"
    }


    return (
        <>           
            <Container style={styleCon}>
                <Container style={styleCon1}>
                    <p style={style} >Interactive</p>
                    <p style={style1}>Visionary</p>
                    <p style={style2}>My name is James Cox. Over the last 20 years, I have been in the design world as a tattoo artist and have interacted with clients to create artistic masterpieces. In where i bring that same skill set to the table an now design a interactive experiences for web sites apps. My passion lies at the crossraods of <span style={styleSpan}>UI Design & Development</span> (HTML/CSS, Node.js, Exspess.js, React.js and JavaScript). Also, compiled with the knowledge of a verity front-end libraries.</p>
                </Container>
                <Container>
                    <img src={Me1} style={styleImg} alt='James M. Cox Jr.' />
                </Container>               \
            </Container>

        </>
    )
};

export default Home