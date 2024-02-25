import Arrow from "@/assets/icons/Arrow";
import Arrow3 from "@/assets/icons/Arrow3";
import React, { useState, useEffect, useRef } from "react";
import { Link as LinkDiv, animateScroll as scroll } from "react-scroll";
import { servicios } from "@/assets/json/servicios";

const Servicios = () => {
  const [isActive, setIsActive] = useState("Auditorías");
  const [filtered, setFiltered] = useState(servicios);

  useEffect(() => {
    var filtered = servicios.filter(function (atribute) {
      return atribute.title == "Auditorías";
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
    <main className=" text-black">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full sm:h-[400px] h-[140px]  text-center columnas text-white">
        <div className="  w-full h-full bg-[#0000009d] flex flex-col justify-center tracking-wider uppercase poppins-bold  ">
          <h1 className=" lg:text-[65px] sm:text-[40px] text-[35px] normal-case tracking-[1px] poppins-semibold   ">
            Servicios
          </h1>
          <h1 className=" sm:text-[15px]  text-[12px] text-[#d0d0d0]  tracking-[2px] poppins-light">
            soluciones jurídicas y contables
          </h1>
        </div>
      </section>

      {/* Content--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="xl:flex gap-10  max-w-[1400px] mx-auto sm:px-10 px-5 sm:mt-16 mt-12 ">
        <div className=" xl:w-[365px] w-full xl:flex xl:flex-col grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:justify-start justify-center gap-5">
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
            name={"Asesorías"}
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
        </div>

        <div name="info" className=" xl:w-[885px]  w-full xl:mt-0 mt-12">
          <div className=" w-full aspect-[16/6.5] audits"></div>
          {filtered.map((item) => (
            <div key={item.id} className="flex flex-col gap-6 pb-20">
              <div className="text-[#B1976B] poppins-bold text-[25px] mt-12">
                {item.subtitle}
              </div>

              <div className=" grid lg:grid-cols-2 grid-cols-1 poppins-semibold gap-x-6">
                {item.contenido.map((item, index) => (
                  <div key={index} className=" w-full mb-10">
                    <span>{index + 1}.</span>
                    <span className="ml-1">{item.tipo}</span>
                    <div className="poppins-light mt-2">{item.descripcion}</div>
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
