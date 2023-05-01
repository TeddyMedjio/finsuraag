import Image from "next/image";
import Link from "next/link";
import Sante from "../../../public/img/icon_sante.svg";
import People from "../../../public/img/icon_people.svg";
import Arrow from "../../../public/img/arrow.svg";
import Line from "../../../public/img/line.svg";

export default function Blocs() {
  return (
    <div className="relative container mx-auto px-5 z-50">
      <div className="absolute left-0 right-0 -top-16 flex flex-col md:flex-row items-center justify-center md:space-x-7">
        {/* left block */}
        <div className="bg-[#00CB39] px-5 py-10 max-w-[518px] rounded-md">
          <div className="space-y-5">
            <Image src={Sante} height="64" alt="icon bouclier" />
            <h4 className="text-white text-3xl font-bold">Vorsorge </h4>
            <p className=" text-white text-lg">
              Wir wissen nicht, was Morgen passieren wird. Durch Invalidität,
              Krankheit oder sogar einem verfrühten Todesfall, kann das Leben
              komplett aus den Fugen geraten. Daher ist es umso wichtiger, sich
              bereits frühzeitig der persönlichen Vorsorge zu widmen ...
            </p>
            <Link href="/" className="flex items-center group">
              <p className=" text-white text-xl font-bold mr-1">
                Mehr erfahren
              </p>
              <Image
                src={Line}
                height="auto"
                alt="line"
                className=" transition-all ease-in-out duration-300 group-hover:block group-hover:translate-x-1  w-5 "
              />
            </Link>
          </div>
        </div>

        {/* right block */}
        <div className="bg-[#FF9900] px-5 py-10 max-w-[518px] rounded-md">
          <div className="space-y-5">
            <Image src={People} height="64" alt="icon bouclier" />
            <h4 className=" text-white text-3xl font-bold">Privatpersonen </h4>
            <p className=" text-white text-lg">
              Für dich als Privatperson gibt es unzählige Versicherungen, welche
              in gewissen Situation sehr hilfreich, wenn nicht sogar
              obligatorisch sein können. In einer Beratung zeigen dir unsere
              Experten gerne die optimale Versicherungslösung für deinen Bedarf
              auf.
            </p>
            <Link href="/" className="flex items-center group">
              <p className=" text-white text-xl font-bold mr-1">
                Mehr erfahren
              </p>
              <Image
                src={Line}
                height="auto"
                alt="line"
                className=" transition-all ease-in-out duration-300 group-hover:block group-hover:translate-x-1  w-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
