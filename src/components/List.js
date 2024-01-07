import { useDispatch, useSelector } from "react-redux";
import ListBook from "./ListBook";
import { form } from "../store/actions/book";

const List = () => {
    let arr=useSelector((state)=>{ return state.booksArr});
    let dispatch=useDispatch();
    return (  <>
    <h1>books list:</h1>
    <input type="button" value="add new book" onClick={() => {dispatch(form(true)) }} />

    <ul>
        {arr.map(item=><li key={item.code}><ListBook book={item}/></li>)}
    </ul>
    </>);
}
 
export default List;