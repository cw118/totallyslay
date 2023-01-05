import { Footer } from "flowbite-react";
import { useRouter } from 'next/router';

const Foooter = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const lang = currentRoute.includes('/fr') ? 'fr' : '';

    return (
      <Footer container={true}>
          <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href={lang ? '/fr' : '/'}
          src="mari-logo.png"
          alt="M.A.R.I. logo"
          name="M.A.R.I."
        />
        </div>
        <Footer.Copyright
          href="#"
          by={lang ? 'Robotique Marianopolis' : 'Marianopolis Robotics'}
          year={2023}
        />
      </div>
    </Footer>
  )
}

export default Foooter;