import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { userLoginRequest,userLoginSuccess,userLoginFail } from '../redux/user/userSlice';
function VoterLogin() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState(null);
  console.log(error)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      dispatch(userLoginRequest());
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      if (!res.ok) {
        dispatch(userLoginFail('Invalid credentials'))
        setError(data.message);
        return;
      }
      dispatch(userLoginSuccess(data));
      // navigate('/dashboard');
    } catch (error) {
      dispatch(userLoginFail('Something went wrong'))
      setError('Something went wrong');
    }
  }
  return (
    <div className=' max-w-96 mx-auto p-2 my-20'>
      <h1 className='text-3xl md:text-4xl font-semibold mb-10 text-center '>Login To Vote !!</h1>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput id="email1" type="email" name='email' placeholder="name@example.com" required onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" name='password' type="password" required onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }} />
        </div>
        <Button type="submit">Login</Button>
      </form>
      <div className='my-2'>
        Not registered yet? <Link to="/voter/register" className='text-blue-500 hover:underline '>Register here</Link>
      </div>
    </div>
  )
}

export default VoterLogin
