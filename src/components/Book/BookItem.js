import React from 'react'
import './BookItem.css'
import Image from 'react-bootstrap/Image'
import { Card, Container, Button } from 'react-bootstrap'



const styles = {
    coverImage: {
        height: '100%',
        display: 'block',
        margin: 'auto'
    },
    itemInfo: {
        margin: '1rem 0',
        
    },
    author: {
        fontWeight: '300',
        fontSize: '1.2rem',
        margin: '0'
    },
}



// savedBooks is passed all the way down from the main page to all book items so that when 'add' is clicked on a book, the current state of savedBooks can be updated
function BookItem({book, setNewBook, savedBooks }) {
    const coverSrc = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    
    const onClick = () => {
        setNewBook([...savedBooks, book])
    }
    
    return (
        <Card style={{ width: '20rem', height: '32rem' }} bg='light'>
            <Container>
                {book.cover_i &&
                    <Image src={coverSrc} alt='book cover' style={styles.coverImage} fluid />
                }
            </Container>
            <Card.Body>
                {book.subtitle 
                    ? <h2 className="title">{book.title}: {book.subtitle}</h2>
                    : <h2 className="title">{book.title}</h2>
                }        
                {book.author_name &&
                    <h4 style={styles.author}>by {book.author_name[0]}</h4>
                }
                <p>Publish Year: {book.first_publish_year} </p>
                <Button onClick={book => onClick(book)}>Add</Button>    
            </Card.Body>
        </Card>
    )
}

export default BookItem

// {book.isbn && 
// <p>ISBN: {book.isbn[0]}</p>
// }
// <p>Version: {book._version_}</p>