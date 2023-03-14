// return (
//   <div className='GetData'>
//     {GetData}
//   </div>
// )
// export const response = await axios.get('https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js');
// console.log(response);

// export function Fetch() {

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js')
//     .then((resp) => resp.json())
//     .then((apiData) => {
//       console.log(apiData);
//       setData(apiData);
//     });
//   }, []);

//   return (
//     <div className='Fetch'>
//       Fetch
//     </div>
//   )
// }



// export const FetchData = () => {

//   return fetch ('https://rickandmortyapi.com/api/character')
//   .then((response) => { return response.json()})
//   .then((characterData) => {
//   console.log(characterData.results);
// })
// }


//   return axios.get("https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js")
//         .then((response) => setUser(response));
// }

// useEffect(() => {
//   FetchData();
// },[])



const GetData = () => {
  fetch('https://gist.githubusercontent.com/nenadbugaric/385c0200f1886180f6143cad72fadeac/raw/0bc527c2977debe86e18829b42c3abab235de4ce/RandomUsers.js').then((res) => res.json()).then((data) => {
    let rawData = data.results
    let p = rawData.slice(0, 9)
    let b = p.map((el) => {
     return {name: el.name.first, email: el.email, img: el.picture.thumbnail}
    })
   
  })
  
}