import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from 'react-router-dom';
function VoterRegistration() {
  return (
    <div className=' max-w-96 mx-auto p-2 my-20'>
        <h1 className='text-3xl md:text-4xl text-center font-semibold mb-6'>Register as a voter</h1>
          <form className="flex max-w-md flex-col gap-4">
              <div>
                  <div className="mb-2 block">
                      <Label htmlFor="name" value="Your name" />
                  </div>
                  <TextInput id="name" type="text" placeholder="John Doe" required />
              </div>
              <div>
                  <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput id="email" type="email" placeholder="name@example.com" required />
              </div>
              <div>
                  <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput id="password" type="password" required />
              </div>
              <Button type="submit">Register</Button>
          </form>
          <div className='my-2'>
            Already registered? <Link href="/voter/login" className='text-blue-500 hover:underline '>Login here</Link>
          </div>
    </div>
  )
}

export default VoterRegistration
