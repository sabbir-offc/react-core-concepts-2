import Friend from './friend';
import { useEffect, useState } from 'react';
import './Friends.css';
export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    } , [])
    return(
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 * state to hold data.
 * use effect with dependency arrays.
 * use fetch to load data from API.
 * set the loaded data to the state.
 */