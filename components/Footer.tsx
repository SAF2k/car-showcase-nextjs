import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            alt="logo"
            src="/logo.svg"
            width={118}
            height={118}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub <br />© 2023, All rights reserved.
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div className="footer__link" key={item.title}>
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    href={link.title}
                    key={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>&copy; 2023 CarHub. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link className="text-gray-500" href="/">
            Privacy & Policy
          </Link>
          <Link className="text-gray-500" href="/">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer