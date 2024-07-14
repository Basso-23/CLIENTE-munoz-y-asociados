import Link from "next/link";
import Arrow from "@/assets/icons/Arrow";
import Auditoria from "@/assets/icons/Auditoria";
import Calculator from "@/assets/icons/Calculator";
import Folder from "@/assets/icons/Folder";
import Legales from "@/assets/icons/Legales";
import Money from "@/assets/icons/Money";
import Tax from "@/assets/icons/Tax";
import { FaHandsHelping } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";

const Inicio = () => {
  const Servicio = ({ titulo, subtitulo, icon }) => {
    return (
      <div className="w-full flex flex-col items-center gap-6 ">
        <div className="text-[#c49c5d] text-[45px]">{icon}</div>
        {/* Titulo */}
        <h1 className=" poppins-semibold tracking-[3px] text-[15px]">
          {titulo}
        </h1>
        {/* Subtitulo */}
        <h2 className="text-[16px] text-[#474747] poppins-light text-justify">
          {subtitulo}
        </h2>
        {/* Boton */}
        <div className="flex justify-center text-[#d3b380] ">
          <Link
            href={"/Servicios"}
            className="uppercase poppins-bold sm:text-[12px] text-[14px]  tracking-[3px] flex gap-[2px] cursor-pointer rounded-sm"
          >
            <div>Ver más</div>
            <div className=" sm:-mt-[1.5px] mt-[0x] ">
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
      <section
        style={{
          backgroundImage: "url(https://i.imgur.com/Mr6alDq.jpeg)",
        }}
        className=" w-full sm:h-[675px] h-[500px]  text-center bg-no-repeat bg-cover bg-center "
      >
        <div className="  w-full h-full bg-[#000000a7] flex flex-col justify-center tracking-wide  ">
          <h2 className=" md:text-[35px] text-[20px] text-[#B1976B] uppercase tracking-widest  poppins-light ">
            Bienvenido a
          </h2>
          <div className=" w-[100px] h-[1px] bg-[#B1976B] mx-auto  md:mb-0 mb-6 "></div>
          <h1 className="md:text-[85px] text-[40px] uppercase poppins-bold tracking-[1px] md:leading-normal leading-none md:mb-0 mb-2  animate-delay-100">
            Muñoz Y Asociados
          </h1>
          <h3 className=" text-[#d9d9d9] poppins-light md:text-[16px] text-[15px] tracking-wide mt-2  animate-delay-150">
            Somos una Firma Integral con más de 30 años de experiencia.
          </h3>
          <h3 className="hidden text-[#d9d9d9] poppins-light md:text-[16px] text-[15px] tracking-wide mt-1 leading-none  animate-delay-150">
            Con más de 30 años de experiencia.
          </h3>
          {/* Boton */}
          <div className="flex justify-center  animate-delay-200">
            <Link
              href={"/Contacto"}
              className="bg-[#a38151] uppercase poppins-semibold text-[12px] tracking-[3px] py-[14px] px-6 mt-10 flex gap-[2px] cursor-pointer"
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
      <section className=" max-w-[1250px] mx-auto sm:px-10 px-5">
        <div className=" w-full md:h-[440px] h-[420px] bg-white md:-mt-16 mt-10  shadow-md flex overflow-hidden ">
          <div className=" md:w-[50%] w-full  h-full flex ">
            <div className=" my-auto md:px-14 px-6 flex flex-col">
              {/* Titulo */}
              <div className=" uppercase text-[#161616] poppins-bold tracking-wider">
                Sobre nosotros
              </div>
              <div className=" w-[50px] h-[3px] bg-[#b1976b] mt-2"></div>
              {/* Subtitulo */}
              <h2 className="text-[16px] text-[#474747]  sm:mt-8 mt-4 poppins-light">
                Asesoramos a clientes de forma integral de acuerdo con sus
                necesidades. Actualmente ofrecemos servicios de auditoría,
                contables, legales, y de outsourcing, bajo altos estandares de
                calidad.
              </h2>
              <div className="w-[210px] h-[100px] firma mt-2 invisible"></div>
              <div className=" uppercase poppins-light text-[#474747] text-[13px] tracking-[4px] flex  my-auto">
                {/* Logo */}
                <div className="logo w-20 h-10"></div>
                {/* Nombre */}
                <div className=" my-auto pt-0 leading-[15px]">
                  <div className=" poppins-bold tracking-wide text-[14px]">
                    Muñoz y Asociados{" "}
                  </div>
                  <div className="hidden poppins-light text-[11px] tracking-wider">
                    Firma Legal
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/UpsPqUc.jpeg)",
            }}
            className=" w-[50%] h-full md:flex hidden bg-no-repeat bg-cover bg-top"
          ></div>
        </div>
      </section>

      {/* Algunos servicios--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" max-w-[1250px] mx-auto sm:px-10 px-5 text-center sm:mt-24 mt-16 ">
        {/* Subtitulo */}
        <h2 className="hidden uppercase tracking-[3px] text-[#acacac] poppins-bold text-[14px]">
          nuestros servicios
        </h2>
        {/* Titulo */}
        <h1 className=" capitalize text-[#161616] poppins-bold text-[30px] mt-2">
          nuestros servicios
        </h1>
        <div className=" w-[1px] h-[35px] bg-[#e1c088] mx-auto my-4"></div>
        {/* Servicios container */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 text-[#474747] mt-12 gap-x-10 sm:gap-y-20 gap-y-14">
          <Servicio
            titulo="AUDITORÍAS"
            subtitulo="Nuestro enfoque de auditoria empieza con el conocimiento del cliente, determinando los riesgos materiales en los estados financieros para poder emitir una opinión."
            icon={<Auditoria />}
          />
          <Servicio
            titulo="IMPUESTOS"
            subtitulo="El interés de esta unidad es brindarle soporte y asistir a los clientes en aplicar las normas tributarias."
            icon={<Tax />}
          />
          <Servicio
            titulo="SERVICIOS CONTABLES"
            subtitulo="Realización de los registros contables de la empresa."
            icon={<Calculator />}
          />
          <Servicio
            titulo="ASESORIA"
            subtitulo="Asesoramos a nuestros clientes en finanzas corporativa, tributaria, laboral, además diseñamos estrategias corporativas a la medida."
            icon={<FaHandsHelping />}
          />
          <Servicio
            titulo="SERVICIOS DE PLANILLA"
            subtitulo="Como servicio tercerizado, realizamos los cálculos de planilla para la empresa, cumpliendo con las normativas vigentes."
            icon={<Folder />}
          />
          <Servicio
            titulo="PREVENCION DE LAVADOS DE ACTIVOS"
            subtitulo="Acompañamiento en la implementación de la ley 23 del 27 de abril de 2015.  "
            icon={<Money />}
          />
          <Servicio
            titulo="SERVICIOS LEGALES"
            subtitulo="Acompañamos al cliente en temas de asesoría jurídica y tramite legales."
            icon={<Legales />}
          />
          <Servicio
            titulo="INTERMEDIACION FINANCIERA"
            subtitulo="Asesoramos al cliente para obtención de líneas de créditos bancario u otros productos disponibles en la Banca actualmente. "
            icon={<FaMoneyBill />}
          />
          <Servicio
            titulo="OTROS SERVICIOS "
            subtitulo="Trámites ante entidades gubernamentales, servicios de domicilio fiscal para empresas en Panamá, y otros."
            icon={<MdMiscellaneousServices />}
          />
        </div>
      </section>

      {/* Porque nosotros--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section
        style={{
          backgroundImage: "url(https://i.imgur.com/Mr6alDq.jpeg)",
        }}
        className="w-full min-h-[500px] bg-no-repeat bg-center bg-cover sm:mt-[115px] mt-16 flex"
      >
        <div className="flex-1 bg-[#000000c3] text-center py-20 px-4 flex justify-center items-center">
          <div className="w-full">
            {/* Subtitulo */}
            <h2 className=" uppercase tracking-[3px] text-[#d3b380] poppins-bold text-[30px]">
              Razones para elegirnos
            </h2>
            <div className=" w-[1px] h-[35px] bg-[#e1c088] mx-auto my-4"></div>
            <div className=" grid sm:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto">
              <div className=" flex flex-col items-center  sm:mt-4 mt-4">
                <div className="poppins-bold text-white  text-[50px]">100%</div>
                <div className="poppins-light text-[#d3b380] ">
                  Calidad Garantizada
                </div>
              </div>
              <div className=" flex flex-col items-center  sm:mt-4 mt-4">
                <div className="poppins-bold text-white  text-[50px]">30+</div>
                <div className="poppins-light text-[#d3b380] ">
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
