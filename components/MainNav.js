import { Navbar } from 'flowbite-react';

const MainNav = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='/' className='block md:hidden mainNavLogo'>
        <img
          src='/mari-logo.png'
          className='h-8 sm:h-10'
          alt='M.A.R.I Logo'
        />
      </Navbar.Brand>
      <Navbar.Collapse className='hidden md:block'>
        <Navbar.Link
          href='/fr'
        >
          Français
        </Navbar.Link>
        <Navbar.Link
          href='/'
          active={true}
        >
          Home
        </Navbar.Link>
      </Navbar.Collapse>
      <Navbar.Brand href='/' className='hidden md:flex mainNavLogo'>
        <img
          src='/mari-logo.png'
          className='h-8 sm:h-10'
          alt='M.A.R.I Logo'
        />
        {/* <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          M.A.R.I
        </span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          href='/fr'
          className='md:hidden'
        >
          Français
        </Navbar.Link>
        <Navbar.Link
          href='/'
          active={true}
          className='md:hidden'
        >
          Home
        </Navbar.Link>
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

export default MainNav;