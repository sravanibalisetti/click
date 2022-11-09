import React from 'react'
import Child from './Child';
const App=()=>{
  //DATA TRANSFER THE PARENT TO CHILD
  // const count=10000;
  // const x=100;
  //FUNCTION TRANSFER THE PARENT TO CHILD
  const sum=(data)=>{
    alert(data);
  }
 
  return(
    <div className="App">
      <h1>hello</h1>
      {/* <Child Cont={count} X={x}/> */}
      {
        ["sravani","swetha","vandhana","veerababu","shekar"].map((item)=>
         item=="swetha" && <Child item={item}/>
        )
      }
      
    
    </div>
  )
      }

export default App;