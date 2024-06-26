import React,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';

const Signup = (props) => {

  const [credentials, setCredentials] = useState({name:"",email:"",password:""});
  let navigate= useNavigate();
      const onChange = (e) => {
          setCredentials({...credentials,[e.target.name]:e.target.value})
        };
      const handleSubmit= async(e)=>{
          e.preventDefault();
       const   {name,email,password}=credentials;

          const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({name,email,password}) // body data type must match "Content-Type" header
            });
            const json = await response.json();
            console.log(json);
            if(json.success)
            {
              //save the auth token and redirect
              localStorage.setItem('token',json.authtoken)
              navigate('/');
              props.showAlert("Account created successfully","success");

            }
            else{
              // alert("Invalid Credentials");
              props.showAlert("Invalid Credentials","danger");
            }
  

          }
  return (
    <div>
      <h2>Create an account to use on Inotebook</h2>

      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name'  aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email'  aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password'  onChange={onChange} required minLength={5}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword'  onChange={onChange} required minLength={5}/>
  </div>
 
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup