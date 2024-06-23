import React, { useState, useEffect, useRef } from "react";
import MenuIcon from "@/assets/icons/MenuIcon";
import { motion as m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import X from "@/assets/icons/X";
import Arrow2 from "@/assets/icons/Arrow2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const Nav = ({ name, url }) => {
    return (
      <div className=" relative nav poppins-light">
        <Link
          onClick={() => {
            setIsOpen(false);
          }}
          className={pathname === url ? " " : " text-[#616161] transition-all"}
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

  const Nav_Mobile = ({ name, url }) => {
    return (
      <Link
        href={url}
        onClick={() => {
          setIsOpen(false);
        }}
        className="  poppins-bold border-b border-[#4c4c4c] w-[80%] mx-auto py-6 text-[#8e8e8e] justify-between flex tracking-wide"
      >
        <div>{name}</div>
        <Arrow2 />
      </Link>
    );
  };
  return (
    <main className="flex items-center bg-white h-[80px] fixed z-50 w-full shadow-md">
      <section className="flex max-w-[1250px] w-full mx-auto sm:px-10 px-5 py-2 justify-between ">
        {/* Nombre y logo--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <Link href={"/"} className=" flex  my-auto gap-0 uppercase">
          {/* Logo */}
          <div className="logo w-20 h-12"></div>
          {/* Nombre */}
          <div className=" my-auto pt-0 leading-[15px]">
            <div className=" poppins-bold tracking-wide text-[14px]">
              Muñoz y Asociados{" "}
            </div>
            <div className="hidden poppins-light text-[11px] tracking-wider">
              Firma Legal
            </div>
          </div>
        </Link>
        {/* Navbar--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className=" xl:flex hidden gap-8 my-auto tracking-wide uppercase text-[14px]">
          <Nav name="Inicio" url="/" />
          <Nav name="Nosotros" url="/Nosotros" />
          <Nav name="Servicios" url="/Servicios" />
          <Nav name="Contacto" url="/Contacto" />
        </div>
        {/* Menu container--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className=" my-auto xl:hidden flex border-2 rounded-[3px] h-[35px] w-[35px]  justify-center items-center border-black cursor-pointer"
        >
          {/* Icono */}
          <MenuIcon />
        </div>
        {/* Barra lateral */}
        <AnimatePresence>
          {isOpen ? (
            <div className=" w-screen h-screen absolute bg-[#000000b6] top-0 left-0 z-50 xl:hidden">
              <m.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0,
                }}
                exit={{ x: 300 }}
                className="w-[300px] h-screen bg-[#1F1F1F] absolute right-0 top-0 text-white z-40 flex flex-col "
              >
                <div
                  className=" cursor-pointer absolute top-8 left-5 text-2xl poppins-bold text-white"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <X />
                </div>
                <div className=" mx-auto mt-32 text-[14px] flex flex-col w-full uppercase">
                  <Nav_Mobile name="Inicio" url="/" />
                  <Nav_Mobile name="Nosotros" url="/Nosotros" />
                  <Nav_Mobile name="Servicios" url="/Servicios" />
                  <Nav_Mobile name="Logros" url="/Logros" />
                  <Nav_Mobile name="Contacto" url="/Contacto" />
                </div>
              </m.div>
            </div>
          ) : null}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Navbar;
