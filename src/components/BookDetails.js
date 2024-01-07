import { useSelector } from "react-redux";

const BookDetails = () => {
    const selected=useSelector(state=>state.selectedBook)
    return ( <div>
        <h1>detaila of selected book:</h1>
        <h2>{selected.author}</h2>
        <img src={selected.picture}/>
    </div> );
}
 
export default BookDetails;