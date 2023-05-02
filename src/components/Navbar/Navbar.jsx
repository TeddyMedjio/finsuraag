import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import "animate.css";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 left-0 right-0 z-[10000]">
      <div className="container mx-auto px-5 lg:px-0 py-5 flex items-center justify-between ">
        <Link href="/" className="hidden lg:block">
          <svg
            width="86"
            height="83"
            viewBox="0 0 86 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86 0.263672C84.1724 3.64989 81.9723 6.45721 79.4728 8.79664V8.8006C74.4238 13.5231 68.1769 16.3344 61.4194 18.1504C60.2253 18.4755 59.0197 18.761 57.7987 19.0187C57.7987 19.0187 57.7949 19.0187 57.7949 19.0227C31.5326 24.677 -0.32009 18.2376 0.00242945 49.5066C0.0293061 52.0404 0.263517 54.8199 0.731938 57.877C1.28483 53.5471 2.50196 50.153 4.2643 47.4963V47.4924C5.12819 46.1799 6.12262 45.0498 7.22841 44.0665C26.0229 27.3653 77.6913 54.1895 86 0.263672Z"
              fill="#185687"
            />
            <path
              d="M32.6921 52.8572C31.3329 52.7819 30.0351 52.7184 28.8065 52.7145C23.9264 52.6946 11.7782 54.3481 10.6264 65.5892C10.2117 69.6733 11.1754 73.1349 14.1933 76.1563C16.4816 78.4482 19.9525 80.4862 24.8978 82.3419C22.6632 81.2951 17.2035 75.2443 19.5072 70.843C19.5916 70.6805 19.6799 70.5258 19.7759 70.3752C19.8796 70.2086 19.9794 70.046 20.0908 69.8954C20.1829 69.7606 20.2789 69.6376 20.3864 69.5187C20.3941 69.5028 20.4056 69.4909 20.4133 69.483C20.5093 69.364 20.6091 69.2491 20.7166 69.142C20.8318 69.0191 20.9547 68.9001 21.0775 68.7891C21.1812 68.6939 21.2925 68.5988 21.4 68.5155C21.5421 68.4005 21.6919 68.2895 21.8493 68.1824C21.9798 68.0912 22.118 68.004 22.2524 67.9247C22.2524 67.9168 22.2601 67.9128 22.2716 67.9168C22.406 67.8335 22.5481 67.7542 22.6901 67.6868C22.8053 67.6273 22.9205 67.5678 23.0395 67.5203C23.101 67.4885 23.1662 67.4647 23.2315 67.433C23.3505 67.3854 23.4695 67.3379 23.5886 67.2903C23.7422 67.2308 23.9034 67.1793 24.0647 67.1317C24.2259 67.0801 24.3834 67.0365 24.5485 66.9969C24.702 66.9532 24.8518 66.9176 25.013 66.8819C25.1935 66.8502 25.3778 66.8145 25.5621 66.7867C25.7349 66.755 25.9076 66.7312 26.0881 66.7114C26.2839 66.6876 26.4797 66.6717 26.6717 66.6559C27.0672 66.6202 27.4703 66.6043 27.8773 66.6043C27.8888 66.6043 27.8927 66.6003 27.9042 66.6043C28.0962 66.6043 28.2958 66.6043 28.4916 66.6083C28.699 66.6162 28.9101 66.6241 29.1175 66.636C29.152 66.636 29.1904 66.636 29.225 66.64C29.5897 66.6598 29.9583 66.6876 30.3269 66.7272C30.5611 66.751 30.803 66.7748 31.0372 66.8026C32.4348 66.9651 33.8593 67.2268 35.2722 67.5282C35.9173 67.663 36.5585 67.7978 37.2035 67.9287C44.9939 69.479 53.2258 69.9985 62.7978 59.4552L62.8054 59.4512C65.2051 56.8104 67.6931 53.4678 70.2733 49.2767C70.2733 49.2767 70.2733 49.2727 70.281 49.2727C72.2929 46.0094 74.3624 42.2188 76.5048 37.8452C62.5712 56.1403 45.086 53.5868 32.6921 52.8572Z"
              fill="#185687"
            />
          </svg>
        </Link>

        <Link href="/" className="lg:hidden">
          <Logo className="w-60" />
        </Link>

        <section className="MOBILE-MENU flex lg:hidden mt-5 ">
          <div
            className="HAMBURGER-ICON space-y-2  cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 rounded animate-pulse bg-brand-blue"></span>
            <span className="block h-0.5 w-6 rounded animate-pulse bg-brand-blue"></span>
            <span className="block h-0.5 w-4 rounded animate-pulse bg-brand-blue"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 p-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between text-center min-h-[250px] w-full">
              <Logo className="h-21 my-8" color="#ffffff" text="#ffffff" />
              <li className="text-white text-3xl border-y uppercase w-full py-8">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white text-3xl border-b uppercase w-full py-8">
                <Link href="/">Unser</Link>
              </li>
              <li className="text-white text-3xl border-b uppercase w-full py-8">
                <Link href="/">Angebot</Link>
              </li>
              <li className="text-white text-3xl border-b uppercase w-full py-8">
                <Link href="/">Über uns</Link>
              </li>
              <li className="text-white text-3xl border-b uppercase w-full py-8">
                <Link href="/">Kontakt</Link>
              </li>
            </ul>
          </div>
        </section>

        {/* menu */}
        <div className=" items-center justify-center space-x-5 hidden lg:flex">
          <Link
            href="/"
            className="uppercase text-brand-blue text-lg font-semibold"
          >
            Home
          </Link>

          <Link
            href="/"
            className="uppercase text-brand-gray text-lg font-semibold hover:text-brand-blue transition-all duration-300 ease-in-out"
          >
            Unser
          </Link>

          <Link
            href="/"
            className="uppercase text-brand-gray text-lg font-semibold hover:text-brand-blue transition-all duration-300 ease-in-out"
          >
            Angebot
          </Link>

          <Link
            href="/"
            className="uppercase text-brand-gray text-lg font-semibold hover:text-brand-blue transition-all duration-300 ease-in-out"
          >
            Über uns
          </Link>

          <Link
            href="/"
            className="uppercase text-brand-gray text-lg font-semibold hover:text-brand-blue transition-all duration-300 ease-in-out"
          >
            Kontakt
          </Link>
        </div>
        <Link
          href="/"
          className="uppercase text-white bg-brand-blue px-5 py-2 rounded-full text-lg font-semibold hidden lg:block hover:bg-brand-gray hover:px-10 transition-all duration-300 ease-in-out"
        >
          kostenlose beratung
        </Link>
      </div>
    </div>
  );
}
