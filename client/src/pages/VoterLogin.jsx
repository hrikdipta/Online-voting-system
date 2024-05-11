import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
function VoterLogin() {
  return (
    <div className=' max-w-96 mx-auto p-2 my-20'>
      <h1 className='text-3xl md:text-4xl font-semibold mb-10 text-center '>Login To Vote !!</h1>
      <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Button type="submit">Submit</Button>
      </form>
      <div className='my-2'>
        Not registered yet? <Link to="/voter/register" className='text-blue-500 hover:underline '>Register here</Link>
      </div>
    </div>
  )
}

export default VoterLogin
