import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import marker from "../../../public/img/marker.svg";
import phone from "../../../public/img/phone.svg";
import mail from "../../../public/img/mail.svg";
import horloge from "../../../public/img/horloge.svg";
import facebook from "../../../public/img/facebook.svg";
import instagram from "../../../public/img/instagram.svg";
import map from "../../../public/img/map.png";

export default function Footer() {
  return (
    <div className="bg-brand-blue pt-10">
      <div className="container mx-auto px-5 lg:px-0 flex flex-col justify-center md:flex-row md:justify-between mb-10 ">
        {/* Adresses */}
        <div className=" space-y-5">
          <Logo color="#ffffff" text="#ffffff" className="mb-9" />
          <p className="flex items-center text-white">
            <span className="mr-2">
              <Image src={marker} />
            </span>
            Wangenstrasse 86A, 3018 Bern
          </p>
          <p className="flex items-center text-white">
            <span className="mr-2">
              <Image src={phone} />
            </span>
            Telepfon: 031 944 11 11
          </p>
          <p className="flex items-center text-white">
            <span className="mr-2">
              <Image src={mail} />
            </span>
            Email: info@finsura.ch
          </p>
          <p className="flex items-center text-white">
            <span className="mr-2">
              <Image src={horloge} />
            </span>
            Mon-Fri : 09:00 - 19:00
          </p>
          <div className="flex items-center space-x-3">
            <Link
              href="https://web.facebook.com/finsura.ch?_rdc=1&_rdr"
              target="_blank"
            >
              <Image src={facebook} />
            </Link>
            <Link href="https://www.instagram.com/finsura.ch/" target="_blank">
              <Image src={instagram} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-10 space-y-5">
          <h3 className="text-2xl font-bold uppercase text-white mb-7">
            unser Angebot
          </h3>
          <Link href="/" className="text-xl underline font-bold text-white">
            Privatpersonen
          </Link>
          <Link href="/" className="text-xl underline font-bold text-white">
            Unternehmen
          </Link>
          <Link href="/" className="text-xl underline font-bold text-white">
            Private vorsorge
          </Link>
          <Link href="/" className="text-xl underline font-bold text-white">
            Steuererklarung
          </Link>
        </div>

        {/* map */}
        <Link
          href="https://www.google.com/maps?ll=46.933979,7.386683&z=10&t=m&hl=fr&gl=US&mapclient=embed&q=Wangenstrasse+86A+3018+Bern+Suisse"
          target="_blank"
          className="mt-10 md:hidden lg:block"
        >
          <Image src={map} alt="picture of map" />
        </Link>
      </div>
      <div className="border-t border-slate-400 py-4">
        <p className="text-center text-slate-400">
          Copyright {new Date().getFullYear()} Finsura AG | Website by{" "}
          <a
            href="https://medjio.me"
            className="text-white font-medium"
            target="_blank"
          >
            www.medjio.me
          </a>
        </p>
      </div>
    </div>
  );
}
