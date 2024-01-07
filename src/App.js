import { useSelector } from 'react-redux';
import './App.css';
import List from './components/List';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';

function App() {
  let selected = useSelector(state => state.selectedBook)
  let addBook=useSelector(state=>state.selectedBookToAdd)
  return (
    <>
      <List />
      {selected && <BookDetails />}
      {addBook&&<AddBook/>}

    </>
  );
}

export default App;
