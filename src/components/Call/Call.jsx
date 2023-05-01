import Link from "next/link";
import Image from "next/image";
import call from "../../../public/img/call.svg";

export default function Call() {
  return (
    <div className="bg-brand-gray py-10">
      <div className="container mx-auto flex items-center justify-between flex-row">
        <div>
          <h3 className=" text-2xl font-bold text-white mb-2">
            Hast du Fragen zu unseren Dienstleistungen? Rufe uns ganz einfach an
          </h3>
          <p className=" text-lg text-white">
            Wir sind <span className="font-bold">Mo-Fri</span> von{" "}
            <span className="font-bold">09:00 bis 19:00</span> rund um die Uhr
            für dich da!
          </p>
        </div>
        <Link
          href="tel:8665562570"
          className="bg-white rounded-md px-8 py-3 flex items-center"
        >
          <Image src={call} height="auto" alt="icon call" />
          <span className="text-brand-blue font-bold text-lg ml-3">
            031 944 11 11
          </span>
        </Link>
      </div>
    </div>
  );
}
