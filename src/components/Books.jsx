import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Books = ({books, book}) => {
   
    return(
        <div>
            <br></br>
             Search: <SearchBar books={books}/>

            <h1>Books</h1>
            <ul>
                {
                    books.map((book) =>{
                        return (
                            <li key={(book.id)}>
                                <Link className="bklk" to={`/books/${book.id}`}>
                                {book.title} 
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        
        </div>
    )
}

export default Books