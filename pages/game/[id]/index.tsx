import { useRouter } from "next/router";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { getCard } from "@/utils/getCard";
import { getRandomIndex } from "@/utils/getRandomIndex";
import styles from '@/styles/Game.module.css'

export default function Game() {
    const router = useRouter()
    const { id } = router.query
    const card = getCard(id);

    const handleClick = () => {
        const randomIndex = getRandomIndex();
        router.push(`/game/${randomIndex}`)
    }

    if(!card) {
        return (
            <main className={styles.main}>
                <Container className={styles.container}>
                    <Row className='d-flex justify-content-center'>
                        <Col md="6" xs="10">
                            <Card>
                                <Card.Header>
                                    <Card.Title>An error has occurred</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        We weren&apos;t able to find the word
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }

    return (
        <main className={styles.main}>
            <Container className={styles.container}>
                <Row className='d-flex justify-content-center'>
                    <Col md="6" xs="10">
                        <Card>
                            <Card.Header>
                                <Card.Text className={styles.wordtoguess}>
                                    {card.title}
                                </Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text className={styles.forbidden}>
                                     You are not allowed to say:
                                </Card.Text>
                                {
                                    <ListGroup className={styles.wordsList}>
                                       {
                                         card.words.map((word, index) => (
                                            <ListGroup.Item key={word}>
                                                {word}
                                            </ListGroup.Item>                                                
                                        ))
                                       }
                                     </ListGroup>
                                }
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-center'>
                                <Button onClick={handleClick}>
                                    Change Word
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
