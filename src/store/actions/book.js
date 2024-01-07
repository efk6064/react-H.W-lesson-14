
export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}
export const deleteBook=(bookCode) => {

    console.log("enter delete"+bookCode)
    return {
        type: "DELETE_BOOK",
        payload: bookCode

    }
}
export const selectedBook = (book) => {
    return {
        type: "SELECT_BOOK",
        payload: book
    }

}

export const form=(flag)=>{
    return{
        type:"FORM",
        payload:flag
    }
}