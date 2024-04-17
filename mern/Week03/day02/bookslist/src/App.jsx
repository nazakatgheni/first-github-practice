import { useState } from 'react'
import './App.css'
import BookForm from './components/BookForm'
import DisplayBook from './components/DisplayBook'

function App() {

  const [bookList, setBookList] = useState([])
  // const bookList = ["book1", "book2", "book3"]
  const newBook = (newBook) => {
    //  this is a function 
    //           go read spread
    //here is the copy of array and we added new element in the array
    // we're passing a function throw props, but newBook is  not props
    setBookList([...bookList, newBook])

    // we pass callback function here
    // this way is more fancy way to set the user, and lost of developers will use this way
    // ? this one
    // setBookList{(prevBook)}=>(
    //   [...prevBook, newBook]
    // )
  }

  // A function completeBook is defined to mark a book item as complete or incomplete


  const completeBook = (submittedBook) => {
    //                      passing idx is optional here
    //                           is book is in the array
    let updatedBook = bookList.map((book, idx) => {
      if (book === submittedBook) {
        let newBook = { ...book }
        newBook.isComplete = !newBook.isComplete;
        return newBook;
      } else {
        return book;
      }
    })

    setBookList(updatedBook)
  }

  const deleteBook = (book_id) => {
    //           this bookList is always a current book
    const filteredBook = bookList.filter((book) => {
      return book.id !== book_id
    })
    setBookList(filteredBook);
  }


  return (
    <>
      {/*          this new book is key of props */}
      <BookForm newBook={newBook} />
      <DisplayBook bookList={bookList} completeBook={completeBook} deleteBook={deleteBook} />
    </>
  )
}

export default App