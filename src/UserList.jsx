import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    })

    return (
        <div style={{
                width: "80vw"
            }}>
            <h4 style={{
                    margin: '25px'
                }}>Users List</h4>
            <div
                className='row'
                style={{
                    marginTop: '15px',
                    border: '1px solid black',
                    backgroundColor: 'lightgray'
                }}>
                <h6 className='col-3'>Name</h6>
                <h6 className='col-3'>Username</h6>
                <h6 className='col-3'>email</h6>
                <h6 className='col-3'>Adress</h6>
            </div>
            <div>
                {
                    users.map(
                        (user) => <div
                            className='row'
                            key={user.id}
                            style={user.id % 2
                                ? {
                                    backgroundColor: '#B9D1DA',
                                    border: '1px solid black'
                                }
                                : {
                                    border: '1px solid black'
                                }}>
                            <div className='col-3'>{user.name}</div>
                            <div className='col-3'>{user.username}</div>
                            <div className='col-3'>
                                {user.email}</div>
                            <div className='col-3'>
                                {user.address.city}</div>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default UserList
