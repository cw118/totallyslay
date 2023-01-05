import { Navbar } from 'flowbite-react';
import Link from 'next/link';

const SpyNav = () => {
  return (
    <Navbar fluid={true} id='spyNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4'>
      <Navbar.Toggle className='text-gray-700 focus:ring-black' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link
          href='/fr/moohp'
        >
          Français
        </Navbar.Link>
        <Navbar.Link
          href='/moohp'
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href='/moohp/avia'
        >
          Avia
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href='/moohp' id='spyLogo' className='navLogo'>
          <img src='/moohp-logo.png' alt='MOOHP logo' />
        </Link>
        <Link href='/' id='hiddenRegLogo' className='navLogo'>
          <img src='/mari-logo.png' alt='M.A.R.I logo' />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href='/moohp/agents'>
          Agents
        </Navbar.Link>
        <Navbar.Link href='/moohp/journal'>
          Journal
        </Navbar.Link>
        <Navbar.Link href='/moohp/robot'>
          Robot
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default SpyNav;