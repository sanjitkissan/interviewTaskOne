import React,{useState} from 'react'
import "./style.css"

export default function Form() {
    const [data, setData] = useState([])
    const submit = (e)=>{
        e.preventDefault()

        let details = {
            name:e.target.name.value,
            phone : e.target.phone.value,
            email : e.target.email.value,
            password : e.target.password.value
        }
 
        let newData= [...data,details]
        setData(newData);
        console.log(newData)
    }
  
  return (
    <div>
        <form onSubmit={submit}>
            Name : <input type="text" name="name" id='name' required />  <br />
            Phone No : <input type="phone" name="phone" id="phone" required /><br />
            Email : <input type="email" name="email" id="emaaii" required /><br />
            Password : <input type="password" name="password" id="password" required/><br />
            <button  class="btn btn-primary active">Submit</button>
        </form>
        <table id='tabOne' className='table table-bordered border-primary'>
            <tr>
                <th>Name</th>
                <th>PhoneNo</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            {data.map(function(val){
                return <tr>
                    <td>{val.name}</td>
                    <td>{val.phone}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                </tr>
            })}
        </table>
    </div>
  )
}
