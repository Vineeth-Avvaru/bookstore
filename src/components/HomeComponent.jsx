import React from 'react';
import imgNotAvailable from '../assets/images/image_not_available.png';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './HomeComponent.css'

class Home extends React.Component {

    render() {
        const myLibrary = this.props.books.map((book, index) => {
            return (
                <Card key={index} className="card-container">
                    <CardImg src={book.thumbnailUrl} alt={book.title} />
                    <CardBody>
                        <CardTitle><b>Title:</b> {book.title}</CardTitle>
                        <CardSubtitle> <b>Author(s):</b> {book.authors.join(",")}</CardSubtitle>
                    </CardBody>
                    <Link to={`/home/${index}`} className="know-more"> <Button outline color="secondary">know more</Button> </Link>
                </Card>
            )
        })
        return (
            <div>
                {this.props.isLoading ?
                     <Spinner color="dark" />
                    :
                    <div>
                        <h2>Results: {this.props.books.length}</h2>
                        <div className="cards-list-container">
                            {myLibrary}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Home;