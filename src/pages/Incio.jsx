import Link from "next/link";
import Arrow from "@/assets/icons/Arrow";
import Auditoria from "@/assets/icons/Auditoria";
import Calculator from "@/assets/icons/Calculator";
import Folder from "@/assets/icons/Folder";
import Legales from "@/assets/icons/Legales";
import Money from "@/assets/icons/Money";
import Tax from "@/assets/icons/Tax";

const Inicio = () => {
  const Servicio = ({ titulo, subtitulo, icon }) => {
    return (
      <div className="w-full flex flex-col items-center gap-6 ">
        <div className="text-[#c49c5d]">{icon}</div>
        {/* Titulo */}
        <h1 className=" font-semibold tracking-[3px] text-[15px]">{titulo}</h1>
        {/* Subtitulo */}
        <h2 className="text-[18px] text-[#474747] font-light">{subtitulo}</h2>
        {/* Boton */}
        <div className="flex justify-center text-[#d3b380] ">
          <Link
            href={"/Servicios"}
            className="uppercase font-bold sm:text-[12px] text-[14px]  tracking-[3px] flex gap-[2px] cursor-pointer rounded-sm"
          >
            <div>Ver más</div>
            <div className=" sm:-mt-[1.5px] mt-[0x]">
              <Arrow />
            </div>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <main className="  text-white">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full sm:h-[675px] h-[500px]  text-center biblioteca">
        <div className="  w-full h-full bg-[#17171797] flex flex-col justify-center tracking-wide  ">
          <h2 className=" md:text-[35px] text-[20px] text-[#B1976B] uppercase tracking-widest  font-light">
            Bienvenido a
          </h2>
          <div className=" w-[100px] h-[1px] bg-[#B1976B] mx-auto  md:mb-0 mb-6"></div>
          <h1 className="md:text-[85px] text-[38px] uppercase font-bold tracking-wider md:leading-normal leading-none md:mb-0 mb-2">
            Muñoz & Asociados
          </h1>
          <h3 className=" text-[#d9d9d9] font-medium md:text-[22px] text-[16px] tracking-wide mt-2">
            Somos una firma legal líder en la industria financiera y
            empresarial.
          </h3>
          <h3 className=" text-[#d9d9d9] font-medium md:text-[22px] text-[16px] tracking-wide mt-1">
            Con más de 30 años de experiencia.
          </h3>
          {/* Boton */}
          <div className="flex justify-center ">
            <Link
              href={"/Contacto"}
              className="bg-[#a38151] uppercase font-bold text-[12px] tracking-[3px] py-[14px] px-6 mt-10 flex gap-[2px] cursor-pointer rounded-sm"
            >
              <div>Contacto</div>
              <div className=" -mt-[1.5px]">
                <Arrow />
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Sobre nosotros--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" max-w-[1250px] mx-auto sm:px-10 px-5 ">
        <div className=" w-full md:h-[440px] h-[420px] bg-white md:-mt-16 -mt-10  rounded-lg shadow-xl flex overflow-hidden ">
          <div className=" md:w-[50%] w-full  h-full flex ">
            <div className=" my-auto md:px-14 px-6 flex flex-col">
              {/* Titulo */}
              <div className=" uppercase text-[#161616] font-bold tracking-wider">
                Sobre nosotros
              </div>
              <div className=" w-[50px] h-[3px] bg-[#b1976b] mt-2"></div>
              {/* Subtitulo */}
              <h2 className="text-[18px] text-[#474747]  mt-8 font-light">
                Asesoramos a clientes de forma integral de acuerdo con sus
                necesidades. Actualmente ofrecemos servicios de auditoría,
                contables, legales, y de outsorcing, bajo altos estandares de
                calidad.
              </h2>
              <div className="w-[210px] h-[100px] firma mt-2"></div>
              <div className=" uppercase font-light text-[#474747] text-[13px] mt-2 tracking-[4px]">
                Muñoz & Asociados
              </div>
            </div>
          </div>
          {/* Image */}
          <div className=" w-[50%] company h-full md:flex hidden"></div>
        </div>
      </section>

      {/* Algunos servicios--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" max-w-[1250px] mx-auto sm:px-10 px-5 text-center mt-24 ">
        {/* Subtitulo */}
        <h2 className=" uppercase tracking-[3px] text-[#acacac] font-bold text-[14px]">
          nuestros servicios
        </h2>
        {/* Titulo */}
        <h1 className="text-[#161616] font-bold text-[30px] mt-2">
          Áreas de práctica legal
        </h1>
        <div className=" w-[1px] h-[35px] bg-[#e1c088] mx-auto my-4"></div>
        {/* Servicios container */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 text-[#474747] mt-12 gap-x-10 gap-y-20">
          <Servicio
            titulo="SERVICIOS LEGALES"
            subtitulo="Asesoramiento legal hasta representación en litigios, proporcionamos soluciones efectivas y estratégicas para tus asuntos legales."
            icon={<Legales />}
          />
          <Servicio
            titulo="AUDITORÍAS"
            subtitulo="Evaluación de cumplimiento normativo, análisis de riesgos legales o revisiones de contratos."
            icon={<Auditoria />}
          />

          <Servicio
            titulo="SERVICIOS CONTABLES"
            subtitulo="Contabilidad básica hasta la preparación de estados financieros complejos, brindamos soluciones precisas y confiables."
            icon={<Calculator />}
          />
          <Servicio
            titulo="IMPUESTOS"
            subtitulo="Planificación fiscal hasta la resolución de disputas con las autoridades fiscales, estamos comprometidos a optimizar tu situación fiscal."
            icon={<Tax />}
          />
          <Servicio
            titulo="INTERMEDIACIÓN FINANCIERA"
            subtitulo="Contamos con las mejores opciones de financiamiento y gestionar tus inversiones de manera efectiva. "
            icon={<Money />}
          />

          <Servicio
            titulo="SERVICIOS DE PLANILLA"
            subtitulo="Cálculo preciso de salarios y beneficios hasta la presentación oportuna de informes ante las autoridades pertinentes."
            icon={<Folder />}
          />
        </div>
      </section>

      {/* Porque nosotros--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full md:h-[675px] sm:h-[850px] max-h-[1000px]  h-[280vw]  text-center relative mt-[115px]">
        <div className=" absolute w-full h-full bg-[#171717b2] z-40"></div>
        {/* Imagen */}
        <div className=" absolute w-full h-full columnas2 z-30 "></div>
        {/* Container */}
        <div className="  md:w-[98%] md:h-[88%] w-[95%] h-[95%]  border-[1px] border-[#696969] flex flex-col justify-center tracking-wide absolute z-40 fixedCenterXnY px-5">
          {/* Subtitulo */}
          <h2 className=" uppercase tracking-[3px] text-[#d3b380] font-bold text-[14px]">
            Razones para elegirnos
          </h2>
          {/* Titulo */}
          <h1 className="text-white font-bold text-[30px] mt-2">
            ¿Por qué los clientes nos eligen?
          </h1>
          <div className=" w-[1px] h-[35px] bg-[#e1c088] mx-auto my-4"></div>
          {/* Parrafos */}
          <div className="md:flex justify-center text-start gap-12">
            {/* Parrafo */}
            <div className="md:w-[500px] w-full text-[18px] text-[#bababa]  sm:mt-8 font-light md:text-start text-center">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookm arksgrove right at the coast of the Semantics,
              a large language ocean. A small river named
              <div className=" flex flex-col items-center  sm:mt-10 mt-4">
                <div className=" font-bold text-white  text-[50px]">100%</div>

                <div className=" font-light text-[#d3b380] ">
                  Calidad Garantizada
                </div>
              </div>
            </div>

            {/* Parrafo */}
            <div className="md:w-[500px] w-full text-[18px] text-[#bababa]  mt-8 font-light md:text-start text-center">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
              <div className=" flex flex-col items-center sm:mt-10 mt-4">
                <div className=" font-bold text-white  text-[50px]">30+</div>

                <div className=" font-light text-[#d3b380] ">
                  Años de Experiencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Inicio;
