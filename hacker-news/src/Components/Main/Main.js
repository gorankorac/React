import './Main.css'
import { useState, useEffect } from 'react'
import { Post } from './Posts';

export const Getdata = () => {
  const [users, setUsers] = useState(null);
  

  const getInitialData= async () => {
    const res = await  fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
   const data = await res.json();
   const newData =  [... await Promise.all(data.map(el => getId(el)))]
   
   setUsers(() => [...newData])
    }

    const getId = async (id) => {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      const data = await res.json();
     
      return data;
    }

    useEffect(() => {
      getInitialData();
    }, [])

   console.log(users);

   if(!users) return <div>Loading...</div>;

  //  score, title, id,by
  return (
    <div>
      {users.map(story => {
        return <figure key={story.id}>
        
          <Post title={story.title} by={story.by} score={story.score}/>
            {/* <h2>{story.title}</h2>
          <h4>{story.by}</h4>
          <h4>{story.score}</h4> */}
        </figure>
      })}
    </div>
  )
 
}











//   useEffect(() => {
//     // fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
//     // .then((response) => response.json())
//     // .then((data) => {
//     //   console.log(data);
//     //   setUsers(data)
//     // })
//    /////
//    /////
//     getInitialData();
//   }, []);

// // ovo ti traba ako renderujes pojedinacne stvari

// //     useEffect(() => {
 


// //     //  const  getId = (id) =>  {
// //     //   return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
// //     //   .then((response) => response.json())
// //     //   .then((data2) => {

            
// //     //         //  console.log(data2);
             
// //     //           // setUsers(data2)
// //     //            return data2
// //     //         })
// //     //       }
          
// //     //       // if (!users) return
          
// //     //       // setUsers2(() => users.map((el) => getId(el).then(data => data)))

      
         
// //   }, [users])