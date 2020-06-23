import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import BookDetail from './BookDetailComponent';

const fetchBooksURL = "https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch(fetchBooksURL)
            .then(response => response.json())
            .then(data => this.setState({ books: data }))
    }

    render() {

        const BookWithIndex = ({ match }) => {
            let booksList = this.state.books;
            return (
                <BookDetail book={booksList.filter((books, index) => index === parseInt(match.params.bookIndex, 10))[0]} />
            )
        }
        return (
            <div>
                <Switch>
                    <Route exact path="/home" component={() => <Home books={this.state.books} />} />
                    <Route path="/home/:bookIndex" component={BookWithIndex} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        )
    }
}

export default Main;