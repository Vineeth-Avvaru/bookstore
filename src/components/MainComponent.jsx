import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import BookDetail from './BookDetailComponent';
import './MainComponent.css'

const fetchBooksURL = "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            books: [],
        }
    }

    componentDidMount() {
        fetch(fetchBooksURL)
            .then(response => response.json())
            .then(data => this.setState({ books: data, isLoading: false }))
    }

    render() {

        const BookWithIndex = ({ match }) => {
            let booksList = this.state.books;
            return (
                <BookDetail book={booksList.filter((book, index) => book.isbn === match.params.bookIndex)[0]} />
            )
        }
        return (
            <div className="main-container">
                <Switch>
                    <Route exact path="/home" component={() => <Home books={this.state.books} isLoading={this.state.isLoading} />} />
                    <Route path="/home/:bookIndex" component={BookWithIndex} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Main;