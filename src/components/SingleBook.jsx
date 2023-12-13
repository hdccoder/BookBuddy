import { useParams, Link } from "react-router-dom";

const SingleBook = ({books}) => {

    const params = useParams()
    const id = params.id*1

    const book = books.find((book) => {
        return book.id === id
    })

    if (!book) {
        return null
    } else {

        const bookShelf = book.available ? "IT'S AVAILABLE!!!" : "SORRY...Try again another day."
   

    return (

        <div> 
            <h1>{book.title}</h1>
           <img className="bkcvr" src={book.coverimage}/>
           <h2>By: {book.author}</h2>
           <p>{book.description}</p>
           <h3>Availability: {bookShelf}</h3>
           <Link to='/books'>
             Back to Books
           </Link>
        </div>
    )

 }
}

export default SingleBook