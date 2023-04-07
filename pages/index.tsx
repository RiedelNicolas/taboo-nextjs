import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { getRandomIndex } from '@/utils/getRandomIndex'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    const randomIndex = getRandomIndex();
    router.push(`/game/${randomIndex}`)
  }

  return (
    <>
      <Head>
        <title>Taboo</title>
        <meta name="description" content="Use for practice with Next-JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Container className={styles.container}>
          <Row className='d-flex justify-content-center'>
              <Col md="6" xs="10">
                <Card>
                   <Card.Header>
                    <Card.Title>Taboo Game</Card.Title>
                   </Card.Header>
                  <Card.Body>
                    <Card.Text>
                    Hi there!
                    </Card.Text>
                    <Card.Text>
                    My name is <s></s>
                     <Card.Link href='https://github.com/RiedelNicolas' target='_blank'>Nicolas Riedel</Card.Link>
                    , and I built this website as a means of practicing with Next.js.
                    </Card.Text>
                    <Card.Text>
                      I hope you enjoy your experience on the site!
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className='d-flex justify-content-center'>
                    <Button onClick={handleClick}>
                       Start Game
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
