import BookShow from './BookShow';
function BookList({books, onDelete, onEdit}){
    const renderedElement = books.map((book)=>{
        return <BookShow title={book.title} key={book.id} onDelete={onDelete} id={book.id} onEdit={onEdit} />         
    });
    return <div className='book-list'>
        {
            renderedElement?renderedElement:''
        }
    </div>
}

export default BookList;