import './Cards.css'
export const Cards = () => {
  return (
    <div className="card" >
    <h5 className="card-title pt-1">Card title</h5>
   <img className="card-img-top p-4" src="https://upload.wikimedia.org/wikipedia/en/a/ad/Marvel_Heroes_Key_Art.jpg" alt="Card image cap"/> 
  <div className="card-body d-flex  ">
     <button className='btn btn-primary '>Info</button>
     <button className='btn btn-primary'>Add</button>
  </div>
</div>
  )
}