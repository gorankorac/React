import {useEffect, useState} from 'react'

export const GetData = () => {
  const[users, setUsers] = useState([])
    useEffect(() => {
    fetch('http://gateway.marvel.com/v1/public/characters?apikey=daec1136bf04641bac66e85b60a27635')
      .then((response) => response.json())
      .then((characters) => {
        console.log(characters.data.results);

       
      });
  }, []);
}