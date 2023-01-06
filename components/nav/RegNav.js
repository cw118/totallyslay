import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RegNav = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const frCounterparts = {
    '/': '/fr',
    '/journal': '/fr/journal',
    '/students': '/fr/etudiants',
  }

  return (
    <Navbar fluid={true} id='regNav' className='relative z-50 pl-0 sm:pl-0 md:pl-4'>
      <Navbar.Toggle className='text-gray-700' />
      <Navbar.Collapse className='z-40'>
        <Navbar.Link
          href={frCounterparts[`${currentRoute}`]}
        >Français</Navbar.Link>
        <Navbar.Link
          href='/'
        >Home
        </Navbar.Link>
      </Navbar.Collapse>
      <div className='block m-auto relative'>
        <Link href='/' id='regLogo' className='navLogo'>
          <img src='/logo/mari-logo.svg' alt='M.A.R.I Logo' />
        </Link>
        <Link href='/moohp' id='hiddenLogo' className='navLogo'>
          <img src='/logo/moohp-logo.svg' alt='MOOHP logo' />
        </Link>
      </div>
      <Navbar.Collapse className='navSecondCollapse'>
        <Navbar.Link href='/students'>
          Students
        </Navbar.Link>
        <Navbar.Link href='/journal'>
          Journal
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RegNav;