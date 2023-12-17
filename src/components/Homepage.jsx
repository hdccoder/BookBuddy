

const Homepage = ({user}) => {

    if (user.email) {
        return <h1> Welcome to our library, {user.firstname}!</h1>
    } else {
        return <h1>Welcome to our library!</h1>
    }
}

export default Homepage