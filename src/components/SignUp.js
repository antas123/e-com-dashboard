import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // ==============this code ensures if user is already signed in he cant access signin page======================//

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
        navigate('/')
      }
    })

    // ==============API INTEGRATION IN FRONTEND============ this API collects users data fron signin page and stores in database ===============================//

    const collectData= async ()=>{
        console.log(name,email,password);
        let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body: JSON.stringify({name,email,password}),
          headers:{
            'Content-Type' : 'application/json'
          },
        })
        result = await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result)
        {
          navigate("/")
        }
    }

    // ==================================================================================================================================//

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='inputBox' type="text"
      value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' />

      <input className='inputBox' type="text"
      value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />

      <input className='inputBox' type="password"
      value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>

      <button onClick={collectData} className='appbutton'>Sign Up</button>
    </div>
  )
}

export default SignUp
