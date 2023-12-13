import { useState } from "react";

const SearchBar = ({books}) => {
    const [searchBook, setSearchBook] = useState('')

    const filteredBooks = books.filter((book) => {
        return book.title.indexOf(searchBook) !== -1
    })

    return (
        <div>
            <label>
            <input
                type="text"
                value={searchBook}
                onChange={(event) => {setSearchBook(event.target.value)}}
            />
            </label>
            {
                searchBook.length > 0 ?
                    <div>
                    <h3>Viewing {filteredBooks.length} of {books.length}</h3>
                    <ul>
                        {
                            filteredBooks.map((book) => {
                                return <li key={book.id}>{book.title}</li>
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