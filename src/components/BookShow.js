import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

function BookShow({title, id}){
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById} = useBooksContext();

    const DeleteBook = ()=>{
        deleteBookById(id);
    }
    const handleEditCLick = () =>{
        setShowEdit(!showEdit);
    }

    let content = <h3>{title}</h3>
    if (showEdit){
        content = <BookEdit currentTitle={title} id={id} toggleEdit={setShowEdit}/>
    }

    return <div className="book-show">
        <img
            alt="books"
            src={`https://picsum.photos/seed/${id}/300/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditCLick}>Edit</button>
            <button className="delete" onClick={DeleteBook}>Delete</button>
        </div>
    </div>
}

export default BookShow;