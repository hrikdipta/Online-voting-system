import React, { useState } from 'react'
import { Button, Alert, Label, TextInput } from "flowbite-react";
import { Link,useNavigate } from 'react-router-dom';
import { userLoginRequest,userLoginSuccess,userLoginFail } from '../redux/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';
function VoterRegistration() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[formData,setFormData] = useState({})
    const[error,setError] = useState(null);
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(formData.password.length<6){
            setError('Password must be at least 6 characters long')
            return;
        }
        try {
            setError(null)
            dispatch(userLoginRequest());
            const res= await fetch('/api/auth/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            const data=await res.json();
            if(!res.ok){
                dispatch(userLoginFail('Invalid credentials'))
                setError(data.message)
                return;
            }
            dispatch(userLoginSuccess(data));
            navigate('/login');
        } catch (error) {
            dispatch(userLoginFail('Something went wrong'))
            setError('Something went wrong')
        }
    }
  return (
    <div className=' max-w-96 mx-auto p-2 my-20'>
        <h1 className='text-3xl md:text-4xl text-center font-semibold mb-6'>Register as a voter</h1>
          <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                  <div className="mb-2 block">
                      <Label htmlFor="name" value="Your name" />
                  </div>
                  <TextInput id="name" type="text" name='username' placeholder="John Doe" required onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}/>
              </div>
              <div>
                  <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput id="email" type="email" name='email' placeholder="name@example.com" required onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}/>
              </div>
              <div>
                  <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" name='password' type="password" required onChange={(e)=>{setFormData({...formData,[e.target.name]:e.target.value})}}/>
              </div>
              <Button type="submit">Register</Button>
          </form>
          <div className='my-2'>
            Already registered? <Link to="/voter/login" className='text-blue-500 hover:underline '>Login here</Link>
          </div>
        {error &&<Alert color="failure" onDismiss={() => setError(null)}>
            {error}
        </Alert>
        }
        
    </div>
  )
}

export default VoterRegistration
