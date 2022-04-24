import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function Register() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [passward, setPassword] = useState('')

    const Register=(event)=>{
      event.preventDefault();

      // let firstnameOb = event.target.firstname.value; 
      // let lastnameOb = event.target.lastname.value; 
      // let emailOb = event.target.email.value; 
      // let passwordOb = event.target.password.value; 
      
      axios.post("http://13.127.127.40/api/user/",{first_name:firstname,last_name:lastname,email:email,password:passward}).then(res=>{
        let data = res.data;
        console.log(data);
      })
    }

  return (
    <div>
        <form onSubmit={Register} >
            <input type="text" name="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder='firstname' /><br />
            <input type="text" name="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder='lastname' /><br />
            <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' /><br />
            <input type="password" name="passward" value={passward} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' />
            <button>Submit</button>
        </form> 
    </div>
  )
}
