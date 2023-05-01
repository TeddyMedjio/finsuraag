import Image from "next/image";
import innova from "../../../public/img/innova.png";
import allianz from "../../../public/img/allianz.png";
import Versicherung from "../../../public/img/Versicherung.png";
import atupri from "../../../public/img/atupri.png";
import Swica from "../../../public/img/Swica.png";
import aig from "../../../public/img/aig.png";
import axa from "../../../public/img/axa.png";
import visana from "../../../public/img/visana.png";

export default function Logos() {
  return (
    <div className="logos container mx-auto mt-[800px] lg:mt-[350px] ">
      <div className="logos-slide ">
        <Image src={allianz} height="auto" alt="logo2" className="image" />
        <Image src={innova} height="auto" alt="logo1" className="image" />
        <Image src={Versicherung} height="auto" alt="logo3" className="image" />
        <Image src={atupri} height="auto" alt="logo4" className="image" />
        <Image src={visana} height="auto" alt="logo5" className="image" />
        <Image src={Swica} height="auto" alt="logo6" className="image" />
        <Image src={aig} height="auto" alt="logo7" className="image" />
        <Image src={axa} height="auto" alt="logo8" className="image" />
      </div>
      <div className="logos-slide ">
        <Image src={allianz} height="auto" alt="logo2" className="image" />
        <Image src={innova} height="auto" alt="logo1" className="image" />
        <Image src={Versicherung} height="auto" alt="logo3" className="image" />
        <Image src={atupri} height="auto" alt="logo4" className="image" />
        <Image src={visana} height="auto" alt="logo5" className="image" />
        <Image src={Swica} height="auto" alt="logo6" className="image" />
        <Image src={aig} height="auto" alt="logo7" className="image" />
        <Image src={axa} height="auto" alt="logo8" className="image" />
      </div>
    </div>
  );
}
