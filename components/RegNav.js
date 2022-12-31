import { Navbar } from 'flowbite-react';
import Link from 'next/link';

const RegNav = () => {
  return (
    <Navbar fluid={true} id='regNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4'>
      <Navbar.Toggle className='text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link
          href='/fr'
        >
          Français
        </Navbar.Link>
        <Navbar.Link
          href='/'
        >
          Home
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href='/' id='regLogo'>
          <img
            src='/mari-logo.png'
            alt='M.A.R.I Logo'
          />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href='/graduates'>
          Graduates
        </Navbar.Link>
        <Navbar.Link href='/journal'>
          Journal
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default RegNav;