


const Fetch = ({data}) => {
  
  return <div>
   {data.map(({name, email, image}, index) => {
    return <div key={index}>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <img src={image} alt={name}/>
    </div>
   }) }
  </div>
}


export default Fetch









