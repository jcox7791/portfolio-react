import Container from '@mui/material/Container';
// CSS
import styles from '../../styles/css/about.module.css';
// console.log(styles, "Im CSS File!");
// Data
import AboutData from '../../data/itemAboutData';
// Images
import Me1 from '../../images/me/me1.jpg';

const About = () => {
    return (
        <>
            {/* Intro Container */}
            <Container style={{ display: 'flex', marginTop: '100px', marginLeft: '450px' }}>
                {AboutData.map((item) => (
                    <Container className={styles.introCon} key={item.intro} >
                        <p className={styles.title}>{item.intro.title}</p>
                        <p className={styles.text}>{item.intro.text1}</p>
                        <p className={styles.text}>{item.intro.text2}</p>
                        <p className={styles.text1}>{item.intro.text3}</p>
                    </Container>
                ))}
                <Container>
                    <img className={styles.img} src={Me1} alt='image of James M. Cox Jr.' />
                </Container>
            </Container>
            {/* Background Container */}
            <Container style={{ display: 'flex', marginLeft: '-5px' }}>
                {/* Experience Container */}
                {AboutData.map((item) => (
                    <Container key={item.experience} className={styles.experienceCon}>
                        <h2 className={styles.elementsH2}>{item.experience.title}</h2>
                        <p className={styles.text}>{item.experience.text}</p>
                        <p className={styles.text}>{item.experience.text1}</p>
                        <p className={styles.text}>{item.experience.text2}</p>
                    </Container>
                ))}
                {/* Creativity Container */}
                {AboutData.map((item) => (
                    <Container key={item.creativity} className={styles.creativityCon}>
                        <h2 className={styles.elementsH2}>{item.creativity.title}</h2>
                    </Container>
                ))}
                {/* Skills Container */}
                {AboutData.map((item) => (
                    <Container key={item.skills} className={styles.skillsCon}>
                        <h2 className={styles.elementsH2}>{item.skills.title}</h2>
                        <p className={styles.text}>{item.skills.text}</p>
                        {/* Language & Front-End Libraries Container */}
                        <Container style={{ display: 'flex'}}>
                            {/* Language Container */}
                            {AboutData.map((item) => (
                                <Container className={styles.mySkillsCon} key={item.skills.mySkills}>
                                    <h3 className={styles.elementsH3}>{item.skills.mySkills.languages.title}</h3>
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
                                <Container className={styles.mySkillsCon} key={item.skills.mySkills}>
                                    <h3 className={styles.elementsH3}>{item.skills.mySkills.frontEndLibraries.title}</h3>
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