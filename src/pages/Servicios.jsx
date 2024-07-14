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
  const [isActive, setIsActive] = useState("Auditoría");
  const [filtered, setFiltered] = useState(servicios);

  useEffect(() => {
    var filtered = servicios.filter(function (atribute) {
      return atribute.title == "Auditoría";
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
      <div
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
      </div>
    );
  };
  return (
    <main className=" text-black mb-20">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section
        style={{
          backgroundImage: "url(https://i.imgur.com/yAybqda.jpeg)",
        }}
        className=" w-full sm:h-[375px] h-[140px]  text-center text-white bg-bottom bg-no-repeat bg-cover"
      >
        <div className="  w-full h-full bg-[#000000b6] flex flex-col justify-center tracking-wider uppercase poppins-bold  ">
          <h1 className=" md:text-[85px] text-[40px] uppercase poppins-bold tracking-[1px] leading-tight  ">
            Servicios
          </h1>
          <h1 className=" sm:text-[15px]  text-[12px] text-[#d0d0d0]  tracking-[2px] poppins-light  animate-delay-150">
            Auditoria, contable y juridicos
          </h1>
        </div>
      </section>

      {/* Content--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="xl:flex gap-16  max-w-[1400px] mx-auto sm:px-10 px-5 sm:mt-16 mt-12 ">
        {/* Left--------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className=" xl:w-[340px] w-full xl:flex xl:flex-col grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-start justify-center gap-5">
          <Opcion
            name={"Auditoría"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Impuesto"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Servicios Contables"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Asesoría"}
            isActive={isActive}
            setIsActive={setIsActive}
          />

          <Opcion
            name={"Servicio de Planilla"}
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
            name={"Intermediación Financiera"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <Opcion
            name={"Otros Servicios"}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <div className=" columnas4 relative h-[500px] xl:flex hidden">
            <div className=" absolute w-full h-full bg-[#000000b7] flex flex-col gap-6 justify-center items-center text-white text-center px-6">
              <h1 className=" poppins-bold tracking-wide text-[#B1976B] text-[22px]">
                ¡Déjanos ayudarte!
              </h1>
              <div className="text-[#bababa]">
                Si necesitas ayuda, no dudes en contactarnos. Te responderemos
                dentro de un día hábil. O si tienes prisa, llámanos ahora.
              </div>
              <div className="text-[22px] poppins-semibold ">
                Lunes a Viernes <br />
                8:00 AM - 5:00PM
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
                <div className="text-[#bababa]">
                  +507 278-1579 / +507 278-1580
                </div>
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
                {item.title}
              </div>
              {/* Tipo y descripcion */}
              <div className="grid lg:grid-cols-2 grid-cols-1 poppins-semibold gap-x-8 text-justify">
                {item.contenido.map((item, index) => (
                  <div key={index} className=" w-full mb-10 text-[18px]">
                    <span>{index + 1}.</span>
                    <span className="ml-1">{item.tipo}</span>
                    <div className="poppins-light mt-2 text-[16px] pl-4">
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
