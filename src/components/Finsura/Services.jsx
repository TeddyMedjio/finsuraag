import Link from "next/link";

export default function Services() {
  return (
    <div className=" bg-[#F1F9FF] py-20 pb-64">
      <div className="container mx-auto px-5 ">
        <div className="flex flex-col items-center justify-center text-center mb-20 ">
          <h2 className=" text-brand-blue uppercase font-bold text-4xl mb-5 ">
            Finsura AG
          </h2>
          <p className=" text-xl text-brand-gray max-w-[855px] ">
            Finsura ist der kompetente Partner für deine Versicherungen. Unsere
            Prämisse ist es, mithilfe unseres Know-Hows dir das maximale
            Sparpotenzial aufzuzeigen und dadurch einen unbeschwerten Alltag zu
            ermöglichen{" "}
            <span className=" text-brand-blue font-medium">
              Kontaktiere uns jetzt.
            </span>
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-normal flex-wrap ">
          <div className="hands flex-1 group min-w-[309px] max-w-[409px] ">
            <div className=" mt-72 transition-all duration-300 group-hover:mt-64 p-10 bg-white rounded-2xl shadow-sm ">
              <h2 className=" text-4xl font-bold text-brand-blue mb-5">
                Engagiert
              </h2>
              <p className=" text-lg text-brand-gray mb-5">
                Engagement ist einer der Hauptpfeiler der Finsura AG. Wir
                möchten unser Engagement auf fachlicher Ebene, beim Streben nach
                der ...
              </p>
              <Link
                href="/"
                className="bg-brand-blue hover:bg-brand-gray text-white px-9 py-2 group-hover:px-16 transition-all duration-300 rounded-xl font-medium"
              >
                Mehr
              </Link>
            </div>
          </div>

          <div className="people flex-1 group min-w-[309px] max-w-[409px] md:ml-5 mt-64 md:mt-0">
            <div className="  mt-72 transition-all duration-300 group-hover:mt-64 p-10 bg-white rounded-2xl shadow-sm ">
              <h2 className=" text-4xl font-bold text-brand-blue mb-5">
                Innovativ
              </h2>
              <p className=" text-lg text-brand-gray mb-5">
                Innovation zu betreiben ist eine hohe Kunst in einer
                festgefahrenen und standardisierten Branche. Um dennoch auch in
                Zukunft im ...
              </p>
              <Link
                href="/"
                className="bg-brand-blue hover:bg-brand-gray text-white px-9 py-2 group-hover:px-16 transition-all duration-300 rounded-xl font-medium"
              >
                Mehr
              </Link>
            </div>
          </div>

          <div className="man flex-1 group min-w-[309px] max-w-[409px] mt-64 lg:ml-5 lg:mt-0   ">
            <div className="  mt-72 transition-all duration-300 group-hover:mt-64 p-10 bg-white rounded-2xl shadow-sm  ">
              <h2 className=" text-4xl font-bold text-brand-blue mb-5">
                kundennah
              </h2>
              <p className=" text-lg text-brand-gray mb-5">
                Die Versicherungs- und Finanzwelten sind sehr kompliziert und
                meist unüberschaubar. Um dies zu erfüllen, tritt die Finsura
                immer ...
              </p>
              <Link
                href="/"
                className="bg-brand-blue hover:bg-brand-gray text-white px-9 py-2 group-hover:px-16 transition-all duration-300 rounded-xl font-medium"
              >
                Mehr
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
