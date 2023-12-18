import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({currentTitle, id, toggleEdit}){
    const [title, setTitle] = useState(currentTitle);
    const {editBookById} = useBooksContext();

    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        editBookById(id, title);
        toggleEdit(false);

    }
    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}/>
        <button className="button is-primary">
           Save 
        </button>
    </form>
}

export default BookEdit;