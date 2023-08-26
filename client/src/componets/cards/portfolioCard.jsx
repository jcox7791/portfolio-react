import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// card.json


const PortfolioCard = (props) => {
    return (
        <>
        {/* Coding Projects */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                {/* sinner&saints */}
                <Card.Body>
                    <Card.Title>{props}</Card.Title>
                    <Card.Text>{props}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default PortfolioCard;