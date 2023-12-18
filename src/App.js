import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App(){
    const [books, setBooks] = useState([]);

    const deleteBookByID = (id) =>{
        const updatedBooks = books.filter((book)=>{
            return book.id !== id
        });
        setBooks(updatedBooks);
    }
    const createBook = (title) =>{
        const updatedBooks = [
            ...books,
            {id: uuidv4(),title} 
        ];
        setBooks(updatedBooks)
    };
    const editBookByID = (id, newTitle)=>{
        const updatedBooks = books.map((book)=>{
            if (book.id===id){
                book.title = newTitle
                return book;
            }else{
                return book
            }
        });
        setBooks(updatedBooks);
    }

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookByID} onEdit={editBookByID}/>
        <BookCreate onCreate = {createBook}/>
    </div>
}

export default App;