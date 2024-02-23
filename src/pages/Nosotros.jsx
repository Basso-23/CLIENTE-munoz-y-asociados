import Money from "@/assets/icons/Money";
const Nosotros = () => {
  const Servicio = ({ titulo, subtitulo, icon }) => {
    return (
      <div className="w-full flex flex-col items-center gap-4 max-w-[400px] ">
        <div className="text-[#c49c5d] mb-2">{icon}</div>
        {/* Titulo */}
        <h1 className=" font-semibold tracking-[3px] text-[18px]">{titulo}</h1>
        {/* Subtitulo */}
        <h2 className="text-[18px] text-[#bababa] font-light">{subtitulo}</h2>
      </div>
    );
  };
  return (
    <main className="  text-white ">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full sm:h-[400px] h-[140px]  text-center columnas3">
        <div className="  w-full h-full bg-[#0000009d] flex flex-col justify-center tracking-wider uppercase font-bold  ">
          <h1 className=" sm:text-[60px] text-[30px] ">Nosotros</h1>
          <h1 className=" sm:text-[15px] text-[30px]   tracking-[3px]">
            La historia de nuestra empresa
          </h1>
        </div>
      </section>
      {/* About--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" max-w-[1250px] mx-auto sm:px-10 px-5 mt-24 ">
        <div className=" grid grid-cols-2 h-[625px] gap-6">
          {/* Imagen */}
          <div className=" w-full law  relative shadow-md">
            <div className=" w-full h-full absolute bg-[#00000036] shadow-md "></div>
          </div>
          {/* Info */}
          <div className=" w-full flex flex-col ">
            <div className="w-full  h-full flex ">
              <div className=" md:px-14 px-6 flex flex-col">
                <div className=" w-[40px] h-[4px] bg-[#b1976b] mb-7"></div>
                {/* Titulo */}
                <div className=" uppercase text-[#959595] font-bold tracking-[3px]">
                  Sobre Muñoz & Asociados
                </div>
                <div className="  text-[#202020] font-bold tracking-wide text-[50px] leading-none mt-3">
                  Nuestra Grandiosa Historia
                </div>

                {/* Subtitulo */}
                <h2 className="text-[18px] text-[#474747]  mt-8 font-light">
                  Asesoramos a clientes de forma integral de acuerdo con sus
                  necesidades. Actualmente ofrecemos servicios de auditoría,
                  contables, legales, y de outsorcing, bajo altos estandares de
                  calidad.
                </h2>
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
          </div>
        </div>
      </section>
      {/* Cualidades--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full md:h-[475px] sm:h-[850px] max-h-[1000px]  h-[280vw]  text-center relative mt-[115px]">
        <div className=" absolute w-full h-full bg-[#171717dd] z-40"></div>
        {/* Imagen */}
        <div className=" absolute w-full h-full pluma z-30 "></div>
        {/* Container */}
        <div className="  md:w-[96%] md:h-[82%] w-[95%] h-[95%]  border-[1px] border-[#565656] flex justify-center tracking-wide absolute z-40 fixedCenterXnY px-5">
          <div className=" flex gap-24 m-auto">
            <Servicio
              titulo="OUR PHILOSOPHY"
              subtitulo="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "
              icon={<Money />}
            />
            <Servicio
              titulo="OUR PRINCIPLE"
              subtitulo="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "
              icon={<Money />}
            />
            <Servicio
              titulo="KEY OF SUCCESS"
              subtitulo="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. "
              icon={<Money />}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
