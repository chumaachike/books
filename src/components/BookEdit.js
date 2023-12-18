import { useState } from "react";

function BookEdit({currentTitle, onEdit, id, toggleEdit}){

    const [title, setTitle] = useState(currentTitle);
    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        onEdit(id, title);
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