import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({books}) => {
    const [searchBook, setSearchBook] = useState('')

    const filteredBooks = books.filter((book) => {
        const lowercaseTitle= book.title.toLowerCase()
        const lowercaseSearchBar = searchBook.toLowerCase()
        return lowercaseTitle.indexOf(lowercaseSearchBar)!== -1
    })


    return (
        <div>
            <label>
            <span className="srchb">
            <input
                type="text"
                value={searchBook}
                onChange={(event) => {setSearchBook(event.target.value)}}
            />
            </span>
            </label>
            {
                searchBook.length > 0 ?
                    <div>
                    <h3>Viewing {filteredBooks.length} of {books.length}</h3>
                    <ul>
                        {
                            filteredBooks.map((book) => {
                                return <Link key={book.id} to={`/books/${book.id}`}>{book.title}</Link>
                              
                             
                              
                            })
                        }
                    </ul>
                    </div>

                    : null

            }
        </div>
    )
}

export default SearchBar