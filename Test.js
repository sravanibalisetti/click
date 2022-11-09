import React, {useState} from 'react';
const Tesk=()=>{
    const [gmail,setGmail]=useState('')
    const handiler=(e)=>{
        setGmail(e.target.value)
    }
    return(
        <div>
            <form>
                <input type="text" onChange={handiler}/><br/>
              
            </form>
            <button onClick={()=>(setGmail("submit"))} >submit</button>
        </div>
        
    )

}
export default Tesk;