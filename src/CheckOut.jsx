import axios from "axios"
import { useParams } from "react-router-dom"

const CheckOut = ({books}) => {

const params = useParams()
const id = params.id*1


const checkBook = books.find((book) => {
  return book.id === id
})

const handleSubmit = async (event) => {
  event.preventDefault()
  const loggedInToken = window.localStorage.getItem('token')
      

      if(loggedInToken){
        const response = await axios.patch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${checkBook.id}`, {available: false}, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${loggedInToken}`
          }
        })
        console.log(response)
      }else{
        
        throw 'no token'
      }
}
    return(
      <div>
        <button onClick={handleSubmit}>
          Check it Out
        </button>
      </div>
    )


}


export default CheckOut