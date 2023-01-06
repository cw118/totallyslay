import Meta from './Meta';
import RegNav from './RegNav';
import SpyNav from './SpyNav';
import Foooter from './Footer';
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const spy = currentRoute.includes('/moohp') ? true : false;

  return (
    <>
      <Meta icon={spy ? '/favicon/moohp-icon.svg' : '/favicon/mari-icon.svg'} />
      {spy ? <SpyNav /> : <RegNav />}
      <div className={classNames('mainContent', { 'font-spy': spy })}>{children}</div>
      <Foooter />
    </>
  )
}

export default Layout;