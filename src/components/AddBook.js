import { useDispatch } from "react-redux";
import { addBook, form } from "../store/actions/book";
import { useState } from "react";

const AddBook = () => {
    let dispatch = useDispatch();
    const [details, setDetails] = useState({
        name: "",
        code: 0,
        price: 0,
        picture: "",
        author: ""

    });
    const UpdateDetails = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setDetails({ ...details, [name]: value })
    }
    const save = (e) => {
        e.preventDefault();
        dispatch(addBook(details))
        dispatch(form(false))
    }

    return (
        <form onSubmit={save}>
            <label>name:</label>
            <input type="text" name="name" value={details.name} onChange={UpdateDetails} />
            <label>code:</label>
            <input type="number" name="code" value={details.code} onChange={UpdateDetails} />
            <label>price:</label>
            <input type="number" name="price" value={details.price} onChange={UpdateDetails} />
            <label>picture:</label>
            <input type="text" name="picture" value={details.picture} onChange={UpdateDetails} />
            <label>author:</label>
            <input type="text" name="author" value={details.author} onChange={UpdateDetails} />
            <button type="submit">submit</button>
        </form>
    );
}

export default AddBook;