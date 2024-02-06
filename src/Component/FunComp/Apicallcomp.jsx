import React, { useEffect, useState } from 'react';
import CardComp from '../Common/CardComp';

function Apicallcomp() {
  const [resdata, setresdata] = useState([])

  const handleapi = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setresdata(data)
    console.log(data);
  }


useEffect(()=>{
  handleapi()
},[])


  return (
    <div>
      <div className="container">
        <div className="row">
          {resdata.filter((tod)=>tod.price>10).map((todo, i) => (
            <div className="col-4">
              <CardComp title={todo.title} price={todo.price} image={todo.image} />
            </div>
          ))}





        </div>

      </div>
    </div>














  )









}
export default Apicallcomp