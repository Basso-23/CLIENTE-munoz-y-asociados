import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Mail from "@/assets/icons/Mail";
import Phone from "@/assets/icons/Phone";
import Twitter from "@/assets/icons/Twitter";
import Link from "next/link";

const Footer = () => {
  const Servicio = ({ name }) => {
    return (
      <div>
        <Link href={"/Servicios"}>{name} </Link>
      </div>
    );
  };

  return (
    <div className=" justify-center flex gap-14 bg-[#1D1D1D] text-white sm:py-16 py-10 flex-wrap sm:px-10 px-5">
      <div className="flex flex-col gap-6  sm:max-w-[325px] w-full justify-center">
        <div className="">
          {/* Nombre y logo--------------------------------------------------------------------------------------------------------------------------------------------- */}
          <Link href={"/"} className=" flex  my-auto gap-2 uppercase">
            {/* Logo */}
            <div className="logo w-20 h-16 saturate-150"></div>
            {/* Nombre */}
            <div className=" my-auto pt-0 leading-[18px]">
              <div className=" poppins-bold tracking-widest text-[18px]">
                Muñoz y Asociados{" "}
              </div>
              <div className="hidden  poppins-light text-[12px] tracking-wider text-[#bababa]">
                Firma Legal
              </div>
            </div>
          </Link>
        </div>
        <div className="text-[#bababa] invisible">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into.
        </div>
        <div className=" flex gap-4 text-[#B1976B]">
          <Facebook />
          <Instagram />
        </div>
      </div>

      {/* Subtitulo */}
      <div className="text-[16px] text-[#bababa] sm:max-w-[300px] w-full flex flex-col gap-5 justify-center">
        <div className="poppins-bold text-[18px] text-white">Contacto</div>
        <div>
          Dirección: Vía Ricardo J. Alfaro, calle 65 oeste, P.H. Century Tower,
          Piso 13, Oficina 1313.
        </div>
        <div className=" flex gap-3 items-center text-[#B1976B]">
          <div className=" -mb-1">
            <Mail />
          </div>
          <div>contacto@munozyasociados.net</div>
        </div>
        <div className=" flex gap-3 items-center text-white">
          <Phone />
          <div>+507 278-1579 / +507 278-1580</div>
        </div>
      </div>
      {/* Subtitulo */}
      <div className="text-[16px] text-[#bababa] sm:max-w-[600px] w-full flex flex-col gap-5 ">
        <div className="poppins-bold text-[18px] text-white">Servicios</div>
        <div className=" grid sm:grid-cols-2 gap-2 text-[#B1976B] ">
          <Servicio name={"Auditorías"} />
          <Servicio name={"Impuestos"} />
          <Servicio name={"Servicios Contables"} />
          <Servicio name={"Asesorías"} />
          <Servicio name={"Servicios de Planilla"} />
          <Servicio name={"Prevención de Lavado de Activos"} />
          <Servicio name={"Servicios Legales"} />
          <Servicio name={"Intermediación Financiera"} />
          <Servicio name={"Otros Servicios"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
