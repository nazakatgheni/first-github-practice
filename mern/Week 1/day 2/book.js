const book = {
    title: 'The Great Gatsby',
    author: {
        firstName: 'F. Scott',
        lastName: 'Fitzgerald',
        nationality: 'American'
    },
    publication: {
        year: 1925,
        publisher: {
            name: 'Charles Scribner\'s Sons',
            location: 'New York'
        }
    },
    genres: ['Novel', 'Fiction', 'Literature'],
    awards: [
        {
            name: 'Pulitzer Prize',
            year: null
        }
    ]
};
// Task 1: Extract the book title, author's full name, and publication year.
// Task 2: Extract the publisher's name and location.
// Task 3: Extract the first genre.
// Bonus: Extract the name of the first award if it exists.

// const { title, author: { firstName, lastName },
// } = book
// const { bookTitle, authorName, publication, genres, awards } = book;

// const { firstName, lastName } = author

// console.log(bookTitle)
// console.log(firstName)
// console.log('Title:', title);
// console.log('Author:', firstName + ' ' + lastName);
// console.log('Publication Year:', year);

// const { publication: { publisher } } = book;

// console.log('publication', name, location)