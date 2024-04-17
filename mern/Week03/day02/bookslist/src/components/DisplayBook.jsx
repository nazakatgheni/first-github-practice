import React from 'react'

const DisplayBook = (props) => {
    const { bookList, completeBook, deleteBook } = props
    return (
        <div>
            <h1>This is Display Component</h1>
            {
                bookList.map((book, idx) => {
                    return (
                        // this id is from BookForm
                        <div key={book.id}>
                            <h2 className={book.isComplete ? "completed" : ""}>{book.oneBook}</h2>
                            <input type="checkbox" onChange={() => completeBook(book)} />
                            <input type="submit" value="Delete" onClick={() => deleteBook(book.id)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayBook
