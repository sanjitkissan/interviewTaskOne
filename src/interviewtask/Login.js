import axios from 'axios';
import React,{useState} from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [passward, setPassword] = useState('')

  const Login=(e)=>{
    e.preventDefault();
    axios.request("http://13.127.127.40/api/",{email:email,passward:passward})
    .then(res=>{
      let data = res.data;
      alert("you are logged in")
    }).catch(error=>{
      alert(error)
    })
  }
  return (
    <div>
         <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' /><br />
            <input type="password" name="passward" value={passward} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
            <button type='submit' onClick={Login}> Login </button>
    </div>
  )
}
