import Container from '@mui/material/Container';
// Componets
import NavBar from '../../componets/nav';

const Home = () => {
    // CSS
    const style = {
        font: "60px Copperplate, Papyrus, fantasy"
    }
    const style1 = {
        color: "greenyellow",
        font: "100px uppercase Copperplate, Papyrus, fantasy"

    }
    const style2 = {
        font: "30px Copperplate, Papyrus, fantasy",
    }

    return (
        <>
            <Container >
                <p style={style} >Interactive</p>
                <p style={style1}>Visionary</p>
                <p style={style2}>My name is James Cox. Over the last 20 years, I have been in the design world as a tattoo artist and have interacted with clients to create artistic masterpieces. In where i bring that same skill set to the table. Along with a passion for creating Web Applications, using a veriety of coding languages and front-end libraries.</p>
            </Container>
            <Container></Container>
            {/* Nav Componet */}
            <NavBar />
        </>
    )
};

export default Home