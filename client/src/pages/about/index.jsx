import Container from '@mui/material/Container';
// Data
import AboutData from '../../data/itemAboutData'


const About = () => {
    // CSS
    const styleCon = {
        marginBottom: "50px"
    }
    const styleCon1 = {
        marginTop: "-100px"
    }   
    const styleAboutTitle = {
        color: "greenyellow",
        font: "150px uppercase Copperplate, Papyrus, fantasy",
        marginBottom: "50px"
    }
    const styleIntro = {
        font: "45px uppercase Copperplate, Papyrus, fantasy",
        marginTop: "-40px",
        textIndent: "55px"
    }
    const styleIntro1 = {
        color: "red",
        font: "50px uppercase Copperplate, Papyrus, fantasy",
        textIndent: "55px"
    } 
    const styleElementsH2={
        color: "greenyellow",
        font: "40px uppercase Copperplate, Papyrus, fantasy",
    }
    const styleElementText={
        font: "30px uppercase Copperplate, Papyrus, fantasy"
    }
    return (
        <Container style={styleCon}>
            {AboutData.map((item) => (
                <Container key={item.intro} style={styleCon1}>
                    <p style={styleAboutTitle}>{item.intro.title}</p>
                    <p style={styleIntro}>{item.intro.text1}</p>
                    <p style={styleIntro}>{item.intro.text2}</p>
                    <p style={styleIntro1}>{item.intro.text3}</p>
                </Container>
            ))}
            <Container>             
                {/* Experience Container */}
                {AboutData.map((item) => (
                    <Container key={item.experience} >
                        <h2 style={styleElementsH2}>{item.experience.title}</h2>
                        <p style={styleElementText}>{item.experience.text}</p>
                        <p style={styleElementText}>{item.experience.text1}</p>
                    </Container>
                ))}
                {/* Creativity Container */}
                {AboutData.map((item)=>(                
                   <Container key={item.creativity}>                   
                    <h2 style={styleElementsH2}>{item.creativity.title}</h2>
                </Container> 
                ))}            
            </Container>

        </Container>
    );
}

export default About;