import Container from '@mui/material/Container';
// Components
import PortfolioCard from '../../componets/cards/portfolioCard';
// Data
import itemCardData from '../../data/itemPortfolioCardData';

const Portfolio = () => {
    return (
        <>
            <Container>
                {/* Mapping my portfolio card */}
                {itemCardData.map((item) => (
                    <PortfolioCard key={item}
                        title={item.title}
                        image={item.src}
                        alt={item.alt}
                        text={item.text}
                        href={item.href}
                    />
                ))}
            </Container>
        </>
    );
}

export default Portfolio;