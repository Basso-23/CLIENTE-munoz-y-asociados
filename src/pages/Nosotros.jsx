import Money from "@/assets/icons/Money";
import Philosophy from "@/assets/icons/Philosophy";
import Principles from "@/assets/icons/Principles";
import Success from "@/assets/icons/Success";
const Nosotros = () => {
  const Servicio = ({ titulo, subtitulo, icon }) => {
    return (
      <div className="w-full flex flex-col items-center gap-4 max-w-[400px] ">
        <div className="text-[#c49c5d] mb-2">{icon}</div>
        {/* Titulo */}
        <h1 className=" poppins-semibold tracking-[3px] text-[16px]">
          {titulo}
        </h1>
        {/* Subtitulo */}
        <h2 className="text-[16px] text-[#bababa] poppins-light">
          {subtitulo}
        </h2>
      </div>
    );
  };
  return (
    <main className="  text-white ">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section
        style={{
          backgroundImage: "url(https://i.imgur.com/leuub8W.jpeg)",
        }}
        className=" w-full sm:h-[375px] h-[140px]  text-center bg-center bg-no-repeat bg-cover"
      >
        <div className="  w-full h-full bg-[#0000009d] flex flex-col justify-center tracking-wider ">
          <h1 className=" md:text-[85px] text-[40px] uppercase poppins-bold tracking-[1px] leading-tight ">
            Nosotros
          </h1>
          <h1 className=" sm:text-[15px]  text-[12px] text-[#d0d0d0]  tracking-[2px] poppins-light uppercase  animate-delay-150">
            La historia de nuestra firma
          </h1>
        </div>
      </section>
      {/* About--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" max-w-[1250px] mx-auto sm:px-10 px-5 sm:my-24 my-12 ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 lg:h-[675px] gap-6">
          {/* Imagen */}
          <div
            style={{
              backgroundImage: "url(https://i.imgur.com/4s80g8L.jpeg)",
            }}
            className=" w-full relative shadow-md overflow-hidden lg:flex hidden bg-top bg-no-repeat bg-cover"
          >
            <div className="hidden w-full h-full absolute bg-[#00000036] shadow-md "></div>
          </div>
          {/* Info */}
          <div className=" w-full flex flex-col ">
            <div className="w-full  h-full flex ">
              <div className=" md:px-14 sm:px-6 flex flex-col">
                <div className=" w-[40px] h-[4px] bg-[#b1976b] mb-7"></div>
                {/* Titulo */}
                <div className=" uppercase text-[#959595] poppins-bold tracking-[3px] poppins-bold">
                  Muñoz y Asociados
                </div>
                <div className="  text-[#202020] poppins-bold tracking-wide sm:text-[45px] text-[45px] leading-none mt-3 poppins-bold">
                  SOBRE NOSOTROS
                </div>

                {/* Subtitulo */}
                <h2 className="text-[16px] text-[#474747]  mt-8 poppins-light text-justify">
                  Muñoz y Asociados fue fundada en 1985. Ofrecemos servicios de
                  Auditoria, Contabilidad, Legales y de Consultoría. La misma
                  está compuesta por Contadores Públicos Autorizados, Abogados u
                  Otros Profesionales, que ejercen en la actualidad en la
                  República de Panamá.
                </h2>
                {/* Subtitulo */}
                <h2 className="text-[16px] text-[#474747]  mt-8 poppins-light text-justify">
                  Mantenemos altos estándares de calidad e independencia
                  profesional, lo cual nos ha permitido una gran acogida por
                  parte de nuestros clientes tanto en los servicios de
                  auditoría, contabilidad y consultoría.
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
          </div>
        </div>
      </section>
      {/* Cualidades--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="hidden  w-full lg:h-[475px] md:h-[850px] max-h-[1000px]  h-[280vw]  text-center relative sm:mt-[115px] mt-16 ">
        <div className=" absolute w-full h-full bg-[#171717dd] z-40"></div>
        {/* Imagen */}
        <div className=" absolute w-full h-full pluma z-30 "></div>
        {/* Container */}
        <div className="  md:w-[96%] md:h-[82%] w-[95%] h-[95%]  border-[1px] border-[#565656] flex justify-center tracking-wide absolute z-40 fixedCenterXnY px-5">
          <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-28 gap-16 m-auto">
            <Servicio
              titulo="OUR PHILOSOPHY"
              subtitulo="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "
              icon={<Philosophy />}
            />
            <Servicio
              titulo="OUR PRINCIPLE"
              subtitulo="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "
              icon={<Principles />}
            />
            <Servicio
              titulo="KEY OF SUCCESS"
              subtitulo="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "
              icon={<Success />}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
