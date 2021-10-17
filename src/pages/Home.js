import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import HeroImage from '../images/ereader.jpg'



const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    hero: {
        height: '35rem'
    },
    headingContainer: {
        padding: '4rem',
    },
    heading: {
        marginBottom: '2rem',
        fontSize: '3rem'
    },
    button: {
        marginTop: '2rem'
    }
}

function Home() {
    return (
        <Container style={styles.container}>
            <div style={styles.headingContainer}>
                <h1 style={styles.heading}><strong>Keep track</strong> of all books in your library</h1>
                <p>We currently live in a sort of limbo where some of our books live on the shelf and some live in a device. Keep track of both digital and physical books by cataloguing them in home library.</p>
                <NavLink 
                style={styles.link}
                to='/SearchBooks'
                activeStyle={{
                  fontWeight: 'bold',
                  borderBottom: '1px solid #764a6d',
                  color: '#A68A64'
                }}>
                    <Button style={styles.button}>Start Adding Books</Button>
                </NavLink>  
                
            </div>
            <div style={styles.heroContainer}>
                <img style={styles.hero} src={HeroImage} alt="" />
            </div>
            
        </Container>
    )
}

export default Home