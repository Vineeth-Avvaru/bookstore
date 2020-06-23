import React from 'react';

class BookDetail extends React.Component {
    render() {
        return(
        <div>
            {this.props.book.title}
        </div>
        )
    }
}

export default BookDetail;