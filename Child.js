import React from "react";
const Child=(props)=>{
  const data=500;
  return(
    <div>
      {/* <h1>{props.Cont}</h1>
      <h1>{props.X}</h1> */}
      {/* <button onClick={()=>props.Name(data)}>clicksum</button> */}
      {/* <h1>{props.Name(data)}</h1> */}
   <h1>{props.item}</h1>
    </div>
  )
}
export default Child;