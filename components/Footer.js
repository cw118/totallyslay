import { Footer } from "flowbite-react";
import { useRouter } from 'next/router';
import classNames from 'classnames';

const Foooter = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? 'fr' : '';
  const spy = currentRoute.includes('/moohp') ? true : false;

    return (
      <Footer container={true} className={classNames('fixed bottom-0 footer', { 'font-spy': spy })}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href={lang ? '/fr' : '/'}
              src={spy ? '/logo/moohp-logo.svg' : '/logo/mari-logo.svg'}
              alt={spy ? "MOOHP logo" : "M.A.R.I. logo"}
              name={spy ? "MOOHP" : "M.A.R.I."}
              className={classNames("flex justify-center md:block footerBrand", { 'invertedLogo': spy })}
            />
            <Footer.Copyright
            className='footerCopyright'
            href="#"
            by={lang ? 'Robotique Marianopolis' : 'Marianopolis Robotics'}
            year={2023}
          />
          </div>
          
      </div>
    </Footer>
  )
}

export default Foooter;