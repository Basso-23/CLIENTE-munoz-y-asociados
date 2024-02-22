import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@/assets/icons/MenuIcon";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const Nav = ({ name, url }) => {
    return (
      <div className=" relative nav font-light">
        <Link
          className={
            pathname === url
              ? " "
              : " text-[#616161] hover:text-black transition-all"
          }
          href={url}
        >
          {name}
        </Link>
        <div
          className={
            pathname === url
              ? " absolute bottom w-[75%] h-[1px] bg-[#e1c088] fixedCenterX"
              : " absolute bottom w-[75%] h-[1px] bg-[#e1c088] fixedCenterX linea "
          }
        ></div>
      </div>
    );
  };
  return (
    <main className="flex items-center bg-white h-[80px] fixed z-50 w-full">
      <section className="flex max-w-[1250px] w-full mx-auto sm:px-10 px-5 py-2 justify-between ">
        {/* Nombre y logo--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className=" flex  my-auto gap-2 uppercase">
          {/* Logo */}
          <div className="logo w-20 h-16"></div>
          {/* Nombre */}
          <div className=" my-auto pt-2 leading-[18px]">
            <div className=" font-bold tracking-wide">Muñoz y Asociados </div>
            <div className=" font-light text-[12px] tracking-wider">
              Firma Legal
            </div>
          </div>
        </div>
        {/* Lista--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className=" xl:flex hidden gap-8 my-auto tracking-wide uppercase text-[14px]">
          <Nav name="Inicio" url="/" />
          <Nav name="Nosotros" url="/Nosotros" />
          <Nav name="Servicios" url="/Servicios" />
          <Nav name="Logros" url="/Logros" />
          <Nav name="Contacto" url="/Contacto" />
        </div>
        {/* Menu--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className=" my-auto xl:hidden flex border-2 rounded-[3px] h-[40px] w-[40px]  justify-center items-center border-black"
        >
          <MenuIcon />
        </div>

        {isOpen ? (
          <div className="w-[400px] h-screen bg-black absolute right-0">
            ingles
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default Navbar;
