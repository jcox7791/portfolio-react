import Container from '@mui/material/Container';
// Components
import PortfolioCard from '../../componets/cards/portfolioCard';
// CSS
import styles from '../../styles/css/portfolio.module.css';

const Portfolio = () => {
    return (
        <>
            <Container className={styles.cardCon}>
                <PortfolioCard />
            </Container>
        </>
    );
}

export default Portfolio;