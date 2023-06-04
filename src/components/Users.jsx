import { useEffect, useState } from "react"
import { fetchUsers } from "../utils/utils"

function Users({user, setUser}) {
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchUsers().then(({users}) => {
            setUsers(users)
            setIsLoading(false)
        })
    },[])

    if (isLoading) {
        return <p>Users Loading...</p>
    }

    return (
        <>
        <main>
            <h2 className="users-title">USERS</h2><br></br>
            <ol className="users-container">
                {users.map((user) => {
                    return <li key={user.username}>
                    <img className='users-avatar' src={user.avatar_url}/>
                   <h3>{user.name}</h3>
                   <button onClick={()=> {setUser(user)}}>Set User</button>
                    </li>
                })}
            </ol>
        </main>
        </>
    )

}

export default Users