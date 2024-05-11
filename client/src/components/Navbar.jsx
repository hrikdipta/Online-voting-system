import React from 'react'
import { useLocation,Link, } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar,Button,Avatar} from "flowbite-react";
function Navbar_component() {
  const path = useLocation().pathname;
  const {user} = useSelector(state => state.user)
  return (
    <Navbar fluid rounded className=' border-b-2'>
      <Navbar.Brand href="#"as={'div'}>
        <Link to={'/'} className='flex'>
        <img src="https://www.shutterstock.com/shutterstock/photos/2184667969/display_1500/stock-vector-ballot-box-logo-simple-icon-vector-flat-design-ai-2184667969.jpg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ElectionHub</span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {
          user ?<Avatar placeholderInitials={user.username.toUpperCase()[0]} rounded />:
            <div className='hidden md:inline-flex'>
              <Link to='/voter/login'><Button outline gradientDuoTone="pinkToOrange" className='mr-2'>Voter Login</Button></Link>
              <Link to='/admin/login'><Button outline gradientDuoTone="redToYellow">Admin Login</Button></Link>
            </div>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active={path==='/'?true:false} as={'div'}>
          <Link to='/' >Home</Link>
        </Navbar.Link>
        <Navbar.Link href="#" active={path==='/about'?true:false} as={'div'}>
          <Link to='/about' >About</Link>
        </Navbar.Link>
        <Navbar.Link href="#" active={path==='/instructions'?true:false} as={'div'}>
          <Link to='/instructions' >Instructions</Link>
        </Navbar.Link>
        <Navbar.Link href="#" active={path==='/news'?true:false} as={'div'}>
          <Link to='/news' >News</Link>
        </Navbar.Link>
        <Navbar.Link href="#" active={path==='/contact'?true:false} as={'div'}>
          <Link to='/contact' >Contact</Link>
        </Navbar.Link>
        <div className='inline-flex md:hidden'>
          <Link to='/voter/login'><Button outline gradientDuoTone="pinkToOrange" className='mr-2'>Voter Login</Button></Link>
          <Link to='/admin/login'><Button outline gradientDuoTone="redToYellow">Admin Login</Button></Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navbar_component
