import Container from '@mui/material/Container'
// CSS
import './index.css'
// Data
import AboutData from '../../data/itemAboutData'
// Images
import Me1 from '../../images/me/me1.jpg'

const About = () => {
    // CSS 
    const styleConIntro={
        display: "flex"
    }  
    const styleCon1 = {
        marginTop: "-100px",
        marginLeft:"-650px"
        
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
            <Container className='styleConIntro'
            style={styleConIntro}
            >
        
                {AboutData.map((item) => (
                    <Container key={item.intro} className='styleCon1'
                     style={styleCon1}
                     >
                        <p className="styleAboutTitle" 
                        style={styleAboutTitle}
                        >{item.intro.title}</p>
                        <p className='styleIntro'
                         style={styleIntro}
                         >{item.intro.text1}</p>
                        <p className='styleIntro' 
                        style={styleIntro}
                        >{item.intro.text2}</p>
                        <p className='styleIntro1'
                         style={styleIntro1}
                         >{item.intro.text3}</p>
                    </Container>

                ))}
                <Container>
                    <img src={Me1} className='styleImg'
                     style={styleImg}
                      alt='image of James M. Cox Jr.' />
                </Container>
            </Container>
            {/* Background Container */}
            <Container className='styleConBackground'
             style={styleConBackground}
             >
                {/* Experience Container */}
                {AboutData.map((item) => (
                    <Container key={item.experience} className='styleConExperience' 
                    style={styleConExperience}
                    >
                        <h2 className='styleElementsH2'
                         style={styleElementsH2}
                         >{item.experience.title}</h2>
                        <p className='styleElementText'
                         style={styleElementText}
                         >{item.experience.text}</p>
                        <p className='styleElementText'
                         style={styleElementText}
                         >{item.experience.text1}</p>
                        <p className='styleElementText' 
                        style={styleElementText}
                        >{item.experience.text2}</p>
                    </Container>
                ))}
                {/* Creativity Container */}
                {AboutData.map((item) => (
                    <Container key={item.creativity}>
                        <h2 className='styleElementsH2'
                         style={styleElementsH2}
                         >{item.creativity.title}</h2>
                    </Container>
                ))}
                {/* Skills Container */}
                {AboutData.map((item) => (
                    <Container key={item.skills} className='styleConSkills'
                     style={styleConSkills}
                    >
                        <h2 className='styleElementsH2'
                         style={styleElementsH2}
                         >{item.skills.title}</h2>
                        <p className='styleElementText' 
                        style={styleElementText}
                        >{item.skills.text}</p>
                        {/* Language & Front-End Libraries Container */}
                        <Container className='styleConSLangFrontEnd'
                         style={styleConSLangFrontEnd}
                         >
                            {/* Language Container */}
                            {AboutData.map((item) => (
                                <Container key={item.skills.mySkills}>
                                    <h3 className='styleElementsH3'
                                     style={styleElementsH3}
                                     >{item.skills.mySkills.languages.title}</h3>
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
                                    <h3 className='styleElementsH3'
                                     style={styleElementsH3}
                                     >{item.skills.mySkills.frontEndLibraries.title}</h3>
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