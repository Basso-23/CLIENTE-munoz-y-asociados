import Arrow3 from "@/assets/icons/Arrow3";
import React, { useState, useEffect, useRef } from "react";
import { Link as LinkDiv, animateScroll as scroll } from "react-scroll";
import { servicios } from "@/assets/json/servicios";
import Mail from "@/assets/icons/Mail";
import Phone from "@/assets/icons/Phone";
import Contact from "@/assets/icons/Contact";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

const Servicios = () => {
  const [isActive, setIsActive] = useState("Asesorías");
  const [filtered, setFiltered] = useState(servicios);

  useEffect(() => {
    var filtered = servicios.filter(function (atribute) {
      return atribute.title == "Asesorías";
    });
    setFiltered(filtered);
  }, []);

  const filterProject = (item) => {
    var filtered = servicios.filter(function (atribute) {
      return atribute.title == item;
    });
    setFiltered(filtered);
  };

  const Opcion = ({ name, isActive, setIsActive }) => {
    return (
      <LinkDiv
        to="info"
        smooth={true}
        duration={700}
        offset={-100}
        onClick={() => {
          setIsActive(name);
          filterProject(name);
        }}
        className={
          isActive === name
            ? "ptext-[16px] poppins-semibold tracking-wide w-full pointer-events-none"
            : "text-[16px] poppins-semibold tracking-wide w-full"
        }
      >
        <div
          className={
            isActive === name
              ? "py-1 border-l-4 border-[#B1976B]  text-[#B1976B] flex gap-2 items-center transition-all pointer-events-none"
              : "py-1 border-l-4 border-[#DDDDDD] pl-5  text-[#555555] transition-all cursor-pointer hover:text-[#B1976B] hover:border-[#B1976B]"
          }
        >
          {isActive === name ? (
            <div className=" pl-3 animate-fade-right animate-duration-[500ms]">
              <Arrow3 />
            </div>
          ) : null}
          <div> {name} </div>
        </div>
        <div className=" w-full h-[0.5px] bg-[#d0d0d0] mt-4"> </div>
      </LinkDiv>
    );
  };
  return (
    <main className=" text-black mb-20">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full sm:h-[375px] h-[140px]  text-center columnas text-white">
        <div className="  w-full h-full bg-[#0000009d] flex flex-col justify-center tracking-wider uppercase poppins-bold  ">
          <h1 className=" md:text-[85px] text-[40px] uppercase poppins-bold tracking-[1px] leading-tight  ">
            Servicios
          </h1>
          <h1 className=" sm:text-[15px]  text-[12px] text-[#d0d0d0]  tracking-[2px] poppins-light  animate-delay-150">
            soluciones jurídicas y contables
          </h1>
        </div>
      </section>

      {/* Content--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="xl:flex gap-16  max-w-[1400px] mx-auto sm:px-10 px-5 sm:mt-16 mt-12 ">
        {/* Left--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className=" xl:w-[340px] w-full xl:flex xl:flex-col grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-start justify-center gap-5">
          <Opcion
            name={"Asesorías"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Auditorías"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Impuestos"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Servicios Contables"}
            isActive={isActive}
            setIsActive={setIsActive}
          />

          <Opcion
            name={"Servicios de Planilla"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Prevención de Lavado de Activos"}
            isActive={isActive}
            setIsActive={setIsActive}
          />

          <Opcion
            name={"Servicios Legales"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Intermediacion Financiera"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Otros Servicios"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <div className=" columnas4 relative h-[500px] xl:flex hidden">
            <div className=" absolute w-full h-full bg-[#000000b7] flex flex-col gap-6 justify-center items-center text-white text-center px-10">
              {" "}
              <h1 className=" poppins-bold tracking-wide text-[#B1976B] text-[22px]">
                Let us help you!
              </h1>
              <div className="text-[#bababa]">
                If you need any helps, please feel free to contact us. We will
                get back to you with 1 business day. Or if in hurry, just call
                us now.
              </div>
              <div className="text-[22px] poppins-semibold ">
                Lun – Vie 09:00-17:00
              </div>
              <div className=" flex gap-3 items-center">
                <div className=" -mb-1 text-[#B1976B]">
                  <Mail />
                </div>
                <div className="text-[#bababa]">
                  contacto@munozyasociados.net
                </div>
              </div>
              <div className=" flex gap-3 items-center text-[#B1976B]">
                <Phone />
                <div className="text-[#bababa]">278-1579 / 278-1580</div>
              </div>
            </div>
          </div>
          <Link
            href={"/Contacto"}
            className=" bg-[#B1976B] px-8 py-4 xl:flex hidden text-white poppins-semibold gap-2 items-center tracking-wide"
          >
            <Contact />
            Contáctanos
          </Link>
        </div>

        {/* Right--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div name="info" className=" xl:w-[905px]  w-full xl:mt-0 mt-12">
          {filtered.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 sm:pb-20 ">
              {/* Image */}
              <div className={` w-full aspect-[16/6.5] ${item.image}`}></div>
              {/* Subtitulo */}
              <div className="text-[#B1976B] poppins-bold text-[25px] sm:mt-5">
                {item.subtitle}
              </div>
              {/* Tipo y descripcion */}
              <div className="grid lg:grid-cols-2 grid-cols-1 poppins-semibold gap-x-8">
                {item.contenido.map((item, index) => (
                  <div key={index} className=" w-full mb-10 text-[18px]">
                    <span>{index + 1}.</span>
                    <span className="ml-1">{item.tipo}</span>
                    <div className="poppins-light mt-2 text-[16px]">
                      {item.descripcion}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Servicios;
