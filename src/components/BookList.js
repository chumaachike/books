import BookShow from './BookShow';
import useBooksContext from '../hooks/useBooksContext';

function BookList() {
    const {books} = useBooksContext();
    const renderedElement = books.map((book) => {
        return <BookShow title={book.title} key={book.id} id={book.id} />
    });
    return <div className='book-list'>
        {renderedElement}
    </div>
}

export default BookList;