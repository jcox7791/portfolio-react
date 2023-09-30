import Container from '@mui/material/Container'
// Data
import AboutData from '../../data/itemAboutData'
// Images
import Me1 from '../../images/me/me1.jpg'

const About = () => {
    // CSS 
    const styles = {
        conIntro: {
            display: "flex"
        },
        con1: {
            marginTop: "-100px",
            marginLeft: "-650px"

        },
        conBackground: {
            display: "flex"
        },
        conSkills: {

        },
        conExperience: {

        },
        conSLangFrontEnd: {
            display: "flex",
            // padding: "100px"
        },
        aboutTitle: {
            color: "greenyellow",
            font: "150px uppercase Copperplate, Papyrus, fantasy",
            marginBottom: "50px"

        },
        intro: {
            font: "45px uppercase Copperplate, Papyrus, fantasy",
            marginTop: "-40px",
            textIndent: "55px"
        },
        intro1: {
            color: "red",
            font: "50px uppercase Copperplate, Papyrus, fantasy",
            textIndent: "55px"
        },
        elementsH2: {
            color: "greenyellow",
            font: "40px uppercase Copperplate, Papyrus, fantasy",
        },
        elementsH3: {
            color: "greenyellow",
            font: "30px uppercase Copperplate, Papyrus, fantasy",
        },
        elementText: {
            font: "30px uppercase Copperplate, Papyrus, fantasy"
        },
        img: {
            boxShadow: '5px 15px 150px #2929bc',
            marginTop: "100px",
            marginBottom: "200px",
            marginLeft: "850px",
            padding: '2em',
            width: "1000px"
        }
    }
    return (
        <>
            {/* Intro Container */}
            <Container style={styles.conIntro}>
                {AboutData.map((item) => (
                    <Container key={item.intro} style={styles.con1}>
                        <p style={styles.aboutTitle}>{item.intro.title}</p>
                        <p style={styles.intro}>{item.intro.text1}</p>
                        <p style={styles.intro}>{item.intro.text2}</p>
                        <p style={styles.intro1}>{item.intro.text3}</p>
                    </Container>
                ))}
                <Container>
                    <img src={Me1} style={styles.img} alt='image of James M. Cox Jr.' />
                </Container>
            </Container>
            {/* Background Container */}
            <Container style={styles.conBackground}>
                {/* Experience Container */}
                {AboutData.map((item) => (
                    <Container key={item.experience} style={styles.conExperience}                    >
                        <h2 style={styles.elementsH2}>{item.experience.title}</h2>
                        <p style={styles.elementText}>{item.experience.text}</p>
                        <p style={styles.elementText}>{item.experience.text1}</p>
                        <p style={styles.elementText}>{item.experience.text2}</p>
                    </Container>
                ))}
                {/* Creativity Container */}
                {AboutData.map((item) => (
                    <Container key={item.creativity}>
                        <h2 style={styles.elementsH2}>{item.creativity.title}</h2>
                    </Container>
                ))}
                {/* Skills Container */}
                {AboutData.map((item) => (
                    <Container key={item.skills} style={styles.conSkills}>
                        <h2 style={styles.elementsH2}>{item.skills.title}</h2>
                        <p style={styles.elementText}>{item.skills.text}</p>
                        {/* Language & Front-End Libraries Container */}
                        <Container style={styles.conSLangFrontEnd}>
                            {/* Language Container */}
                            {AboutData.map((item) => (
                                <Container key={item.skills.mySkills}>
                                    <h3 style={styles.elementsH3}>{item.skills.mySkills.languages.title}</h3>
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
                                    <h3 style={styles.elementsH3}>{item.skills.mySkills.frontEndLibraries.title}</h3>
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