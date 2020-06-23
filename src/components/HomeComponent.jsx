import React from 'react';
// import imgNotAvailable from '../assets/images/image_not_available.png';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button, Spinner
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './HomeComponent.css'
import Pagination from "./PaginationComponent";
import { connect } from "react-redux";
import { changePage } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        booksPerPage: state.booksPerPage,
    }
}

const mapDispatchToProps = (dispatch) => ({
    paginate: (number) => { dispatch(changePage(number)) },
})

class Home extends React.Component {

    render() {

        // Get current books
        const indexOfLastBook = this.props.currentPage * this.props.booksPerPage;
        const indexOfFirstBook = indexOfLastBook - this.props.booksPerPage;
        const currentBooks = this.props.books.slice(indexOfFirstBook, indexOfLastBook);

        const myLibrary = currentBooks.map((book, index) => {
            return (
                <Card key={index} className="card-container">
                    <CardImg src={book.thumbnailUrl} alt={book.title} />
                    <CardBody>
                        <CardTitle><b>Title:</b> {book.title}</CardTitle>
                        <CardSubtitle> <b>Author(s):</b> {book.authors.join(",")}</CardSubtitle>
                    </CardBody>
                    <Link to={`/home/${book.isbn}`} className="know-more"> <Button outline color="secondary">know more</Button> </Link>
                </Card>
            )
        })

        return (
            <div>
                {this.props.isLoading ?
                    <Spinner color="dark" />
                    :
                    <div>
                        <h3>Total Books: {this.props.books.length}</h3>
                        <h3>Page Results: {currentBooks.length}</h3>
                        <div className="cards-list-container">
                            {myLibrary}
                        </div>
                         <div className="pagination-container">
                         <Pagination
                            className="pagination"
                            booksPerPage={this.props.booksPerPage}
                            totalBooks={this.props.books.length}
                            paginate={this.props.paginate}
                        />
                        </div>   
                    </div>
                }
            </div>
        )
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Home));