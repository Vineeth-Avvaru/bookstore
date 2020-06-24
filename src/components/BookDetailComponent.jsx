import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BookDetailComponent.css';

class BookDetail extends React.Component {
    render() {
        const longDescription = "longDescription";
        const shortDescription = "shortDescription";
        const categories = "categories";
        const pageCount = "pageCount";
        const publishedDate = "publishedDate";
        if(this.props.book.hasOwnProperty(publishedDate)) {
            var date = this.props.book.publishedDate.$date;
            var dateString = new Date(date).toLocaleDateString();
        }
        return (
            <div className="book-detail-container">
                <Link to="/home" className="back-link"> <FontAwesomeIcon icon={faArrowLeft} /><b> back</b></Link>
                <div className="book-content">
                    <div className="book-info">
                        <div>
                            <img src={this.props.book.thumbnailUrl} alt={this.props.book.title} />
                        </div>
                        <div className="book-data">
                            <div><b>Title: </b>{this.props.book.title}</div>
                            <div><b>Authors: </b>{this.props.book.authors.join(", ")}</div>
                            <div><b>Status: </b>{this.props.book.status}</div>
                            <div>{this.props.book.hasOwnProperty(publishedDate) ? <div> <b>Published Date: </b>{dateString}</div>: "" }</div>
                            <div>{this.props.book.hasOwnProperty(categories) ? <div> <b>Categories: </b>{this.props.book.categories.join(", ")}</div>: "" }</div>
                            <div>{this.props.book.hasOwnProperty(pageCount) ? <div> <b>PageCount: </b>{this.props.book.pageCount}</div>: "" }</div>
                        </div>
                    </div>
                    <div>{this.props.book.hasOwnProperty(shortDescription) ? <div> <b>Short Description: </b> {this.props.book.shortDescription} </div> : ""}</div>
                    <hr />
                    <div className="long-description">{this.props.book.hasOwnProperty(longDescription) ? this.props.book.longDescription : "Description Not Available"}</div>
                </div>
            </div>
        )
    }
}

export default BookDetail;