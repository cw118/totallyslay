import { Footer } from "flowbite-react"

export default function Foooter() {
    return(
        <Footer container={true}>
            <div className="w-full text-center">
            <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
         <Footer.Brand
            href="/"
            src="mari-logo.png"
            alt="M.A.R.I. Logo"
            name="M.A.R.I."
        />
    </div>
    <Footer.Copyright
      href="#"
      by="Marianopolis Robotics"
      year={2023}
    />
  </div>
</Footer>
    )
}