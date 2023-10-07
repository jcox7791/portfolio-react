import Container from '@mui/material/Container';
// CSS
import styles from '../../styles/css/home.module.css';
console.log(styles, "im the home CSS");
// Images
import Me1 from '../../images/me/me1.jpg';


const Home = () => {
    return (
        <>            
            <Container className={styles.con}>
                <Container className={styles.con1}>
                    <p className={styles.intro}>Interactive</p>
                    <p className={styles.intro1}>Visionary</p>
                    <p className={styles.intro2}>My name is James Cox. Over the last 20 years, I have been in the design world as a tattoo artist and have interacted with clients to create artistic masterpieces. In where i bring that same skill set to the table an now design a interactive experiences for web sites apps. My passion lies at the crossraods of <span className={styles.span}> UI Design & Development</span> HTML/CSS, Node.js, Exspess.js, React.js and JavaScript. Also, compiled with the knowledge of a verity front-end libraries.</p>
                </Container>
                <Container className={styles.con2}>
                    <img className={styles.img} src={Me1} alt='image of James M. Cox Jr.' />
                </Container>
            </Container>
        </>
    );
}

export default Home