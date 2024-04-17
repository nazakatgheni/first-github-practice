import React, { useState } from 'react'

const BookForm = ({ newBook }) => {
    //  const { newBook } = props

    const [singleBook, setSingleBook] = useState("");
    const [errors, setErrors] = useState("")

    const bookValidation = () => {
        let isValid = true;

        if (singleBook.length < 3) {
            isValid = false;
        }
        return isValid;
    }

    const submitHandler = e => {
        e.preventDefault();

        if (bookValidation()) {
            newBook({
                oneBook: singleBook,
                isComplete: false,
                id: Math.floor(Math.random() * 10000).toString()
            })
            setSingleBook("")
            setErrors("")
        } else {
            setErrors("The Book Name Should be at least 3 Characters")
            setSingleBook("")
        }



        newBook({
            oneBook: singleBook,
            isComplete: false,
            id: Math.floor(Math.random() * 10000).toString()
        })
        // how newBook created?
        //  once submit a form, this will invoke submitHandler, then is newBook will create
        setSingleBook("")

    }



    const changeHandler = e => {
        setSingleBook(e.target.value)
    }

    return (
        <div>
            {errors ? <h3 style={{ color: "red" }}>{errors}</h3> : null}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="book">Add a Book</label>
                    <input type="text" name="" onChange={changeHandler} value={singleBook} />
                </div>
                <input type="submit" value="Add" style={{
                    marginTop: "25px",
                    marginLeft: "35px"
                }} />
            </form>
        </div>
    )
}

export default BookForm
