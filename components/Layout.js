import { useRouter } from 'next/router';
import classNames from 'classnames';
import Meta from './Meta';
import RegNav from './nav/RegNav';
import SpyNav from './nav/SpyNav';
import Foooter from './Footer';
import JerryPopUp from './JerryPopUp';

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const fr = currentRoute.includes('/fr') ? true : false;
  const spy = currentRoute.includes('/moohp') ? true : false;

  return (
    <>
      <Meta icon={spy ? '/favicon/moohp-icon.svg' : '/favicon/mari-icon.svg'} />
      {spy ? <SpyNav /> : <RegNav />}
      <div className={classNames('mainContent', { 'font-spy bg-dark-purple': spy, 'flowerBg': !spy })}>{children}</div>
      {spy ? null : <JerryPopUp fr={fr} />}
      <Foooter />
    </>
  );
}

export default Layout;