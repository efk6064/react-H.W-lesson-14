import { useDispatch } from "react-redux"
import { deleteBook, selectedBook } from "../store/actions/book.js";

const ListBook = ({ book }) => {
    let dispatch = useDispatch();
    return (
        <div>
            <h2>{book.name}</h2>
            {/* <h2>{book.price}</h2>
            <h2>{book.author}</h2>
            <img src={book.picture}/> */}
            <input type="button" value="delete" onClick={() => { dispatch(deleteBook(book.code)) }} />
            {/* <input type="button" value="edit" onClick={() => { }} /> */}
            <input type="button" value="present" onClick={() => {dispatch(selectedBook(book)) }} />
        </div>);
}

export default ListBook;