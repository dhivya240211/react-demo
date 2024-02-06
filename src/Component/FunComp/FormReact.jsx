import React, { useState } from 'react'


function FormReact() {
const[name,setname]=useState("")
const[age,setage]=useState("")
const[mail,setmail]=useState("")
const[ishow,setishow]=useState(true)






  return (
  
<div>
{!ishow?
<form>

<label>Name:</label>
<input placeholder='Enter Your Name' onChange={(e)=>setname(e.target.name)}/>
<br/>
<br/>
<label>Age:</label>
<input placeholder='Enter Your Age' onChange={(e)=>setage(e.target.age)}/>
<br/><br/>
<label>E-mail Id:</label>
<input placeholder='Enter Your mail'onChange={(e)=>setmail(e.target.value)}/>
<br/><br/>
<button>Submit</button>
</form>

:
<h1>Your form has been saved</h1>
}
{ishow &&
<div>

<h3>Name:{name}</h3>
<h3>Age:{age}</h3>
<h3>Mail:{mail}</h3>
</div>

    }














</div>









  )
}
















export default FormReact