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
import { changePage, handleSearch } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        currentPage: state.currentPage,
        booksPerPage: state.booksPerPage,
        searchTitle: state.searchTitle
    }
}

const mapDispatchToProps = (dispatch) => ({
    paginate: (number) => { dispatch(changePage(number)) },
    handleSearch: (title) => { dispatch(handleSearch(title)) }
})

class Home extends React.Component {

    render() {

        const filteredBooks = this.props.books.filter((book) => book.title.indexOf(this.props.searchTitle) !== -1);
        // Get current books
        const indexOfLastBook = this.props.currentPage * this.props.booksPerPage;
        const indexOfFirstBook = indexOfLastBook - this.props.booksPerPage;
        const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

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
                        <div className="home-header">
                            <span className="header-item">Total Books: {this.props.books.length}</span>
                            <span className="header-item">Page Results: {currentBooks.length}</span>
                            <input
                                type="text"
                                className="search-title"
                                placeholder="&#xf002; Search book titles"
                                value={this.props.searchTitle}
                                onChange={(e) => this.props.handleSearch(e.target.value)}
                            />
                        </div>

                        <div className="cards-list-container">
                            {myLibrary}
                        </div>
                        <div className="pagination-container">
                            <Pagination
                                className="pagination"
                                currentPage={this.props.currentPage}
                                booksPerPage={this.props.booksPerPage}
                                totalBooks={filteredBooks.length}
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