
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const Account = ({user, setUser, setToken }) => {
    const navigate = useNavigate()
    const [reserv, setReserv] = useState([])
    
    useEffect (() => { 
        const fetchUBooks = async() => {
        const loggedInToken = window.localStorage.getItem('token')
        
  
        if(loggedInToken){
          const {data} = await axios.get('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${loggedInToken}`
            }
          })
          setReserv(data.reservation)
        }else{
          
          throw 'no token'
        }
      }
       fetchUBooks()
    },[])
  
    const deleteReserv = async(reservId) => {
        const loggedInToken = window.localStorage.getItem('token')
       
        if(loggedInToken){
            const response = await axios.delete(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${reservId}`, {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loggedInToken}`
              }
            })
            console.log(response)
            setReserv(reserv.filter((checkedBooks) => {return checkedBooks.id !== reservId}))
          }else{            
            throw 'no token'
          }        
    }

    
    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null)
        setUser({})
        navigate('/')
    }
    if(!user.books){
        return null
    }
    
    return(
        <div>
            <h1>Account</h1>
            <button onClick={() => {logout()}}>Logout</button>
            <hr/>
            <h2>Email: {user.email}</h2>
            <h2>Your Reads:</h2>
            <ul>
                {
                    reserv.map((reservd)=> {
                        return(
                            <li key={reservd.id}>
                                <h2>{reservd.title}</h2>
                                <button onClick={()=> {deleteReserv(reserv.id)}}>Check In {reservd.title}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Account