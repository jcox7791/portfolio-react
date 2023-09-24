import Container from '@mui/material/Container';
// Data
import AboutData from '../../data/itemAboutData'
// Images
import Me1 from '../../images/me/me1.jpg';

const About = () => {
    // CSS   
    const styleCon1 = {
        marginTop: "-100px"
    }
    const styleConBackground = {
        display: "flex"
    }
    const styleConSkills = {

    }
    const styleConExperience = {

    }
    const styleConSLangFrontEnd = {
        display: "flex",
        // padding: "100px"
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
    const styleElementsH2 = {
        color: "greenyellow",
        font: "40px uppercase Copperplate, Papyrus, fantasy",
    }
    const styleElementsH3 = {
        color: "greenyellow",
        font: "30px uppercase Copperplate, Papyrus, fantasy",
    }
    const styleElementText = {
        font: "30px uppercase Copperplate, Papyrus, fantasy"
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
            <Container>
                {AboutData.map((item) => (
                    <Container key={item.intro} style={styleCon1}>
                        <p style={styleAboutTitle}>{item.intro.title}</p>
                        <p style={styleIntro}>{item.intro.text1}</p>
                        <p style={styleIntro}>{item.intro.text2}</p>
                        <p style={styleIntro1}>{item.intro.text3}</p>
                    </Container>

                ))}
                <Container>
                    <img src={Me1} style={styleImg} alt='image of James M. Cox Jr.' />
                </Container>
            </Container>
            {/* Background Container */}
            <Container style={styleConBackground}>
                {/* Experience Container */}
                {AboutData.map((item) => (
                    <Container key={item.experience} style={styleConExperience}>
                        <h2 style={styleElementsH2}>{item.experience.title}</h2>
                        <p style={styleElementText}>{item.experience.text}</p>
                        <p style={styleElementText}>{item.experience.text1}</p>
                        <p style={styleElementText}>{item.experience.text2}</p>
                    </Container>
                ))}
                {/* Creativity Container */}
                {AboutData.map((item) => (
                    <Container key={item.creativity}>
                        <h2 style={styleElementsH2}>{item.creativity.title}</h2>
                    </Container>
                ))}
                {/* Skills Container */}
                {AboutData.map((item) => (
                    <Container key={item.skills} style={styleConSkills}>
                        <h2 style={styleElementsH2}>{item.skills.title}</h2>
                        <p style={styleElementText}>{item.skills.text}</p>
                        {/* Language & Front-End Libraries Container */}
                        <Container style={styleConSLangFrontEnd}>
                            {/* Language Container */}
                            {AboutData.map((item) => (
                                <Container key={item.skills.mySkills}>
                                    <h3 style={styleElementsH3}>{item.skills.mySkills.languages.title}</h3>
                                    <ul>
                                        <li>{item.skills.mySkills.languages.html}</li>
                                        <li>{item.skills.mySkills.languages.css}</li>
                                        <li>{item.skills.mySkills.languages.javaScript}</li>
                                        <li>{item.skills.mySkills.languages.react}</li>
                                        <li>{item.skills.mySkills.languages.redux}</li>
                                        <li>{item.skills.mySkills.languages.express}</li>
                                        <li>{item.skills.mySkills.languages.node}</li>
                                        <li>{item.skills.mySkills.languages.mongoDB}</li>
                                    </ul>
                                </Container>
                            ))}
                            {/* Front-End Libraries Container */}
                            {AboutData.map((item) => (
                                <Container key={item.skills.mySkills}>
                                    <h3 style={styleElementsH3}>{item.skills.mySkills.frontEndLibraries.title}</h3>
                                    <ul>
                                        <li>{item.skills.mySkills.frontEndLibraries.bootstrap}</li>
                                        <li>{item.skills.mySkills.frontEndLibraries.material}</li>
                                    </ul>
                                </Container>
                            ))}
                        </Container>
                    </Container>
                ))}
            </Container>

        </>
    );
}

export default About;