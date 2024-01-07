const initalState = {
    booksArr: [
        {
            name: "shikupizky",
            code: 123,
            price: 30,
            picture: "https://upload.wikimedia.org/wikipedia/he/4/44/Shiku.jpg",
            author: "Shifra Glick"
        },
        {
            name: "Benzi",
            code: 444,
            price: 50,
            picture: "https://upload.wikimedia.org/wikipedia/he/6/69/%D7%A2%D7%98%D7%99%D7%A4%D7%94-%D7%91%D7%A0%D7%A6%D7%99.jpg",
            author: "David mk"
        }
    ],
    selectedBook: null,
    selectedBookToAdd: false
}
export const bookReducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                booksArr: [...state.booksArr, action.payload],
                selectedBook: state.selectedBook,
                selectedBookToAdd: false

            }
        case "DELETE_BOOK":
            console.log("hgfhkfk" + action.payload)
            return {
                booksArr: state.booksArr.filter(item => item.code !== action.payload),
                selectedBook: state.selectedBook,
                selectedBookToAdd: false

            }
        case "SELECT_BOOK":
            return {
                booksArr: state.booksArr,
                selectedBook: action.payload,
                selectedBookToAdd: false

            }

        case "FORM":
            return {
                selectedBook: state.selectedBook,
                booksArr: state.booksArr,
                selectedBookToAdd: action.payload

            }

        default: return state;
    }

}


