import { useEffect, useState } from 'react';
import './Todos.css';

export const Todos = () => {
  const[users, setUsers] = useState([])
    useEffect(() => {
    fetch('https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js')
      .then((response) => response.json())
      .then(({results}) => {
        console.log(results);

       setUsers(results);
      });
  }, []);

  return (
    <div className='users'>{users.map((user, index) => <div className='frame' key={index}><img className='photo' src={user.picture.thumbnail}/><div className='head'><h4>Name: {user.name.first}</h4><h4>Email: {user.email}</h4></div></div>)}</div>
  )
}