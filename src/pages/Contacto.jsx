import Mail from "@/assets/icons/Mail";
import Phone from "@/assets/icons/Phone";

const Contacto = () => {
  const Campo = ({ name }) => {
    return (
      <input
        required
        className="w-full bg-white py-4 px-6 text-black outline-none"
        type="text"
        placeholder={name}
      />
    );
  };
  return (
    <main className="  text-white mb-12 ">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full sm:h-[400px] h-[140px]  text-center columnas hidden">
        <div className="  w-full h-full bg-[#000000b6] flex flex-col justify-center tracking-wider poppins-bold  uppercase ">
          <h1 className=" sm:text-[60px] text-[30px] ">Contáctanos</h1>
        </div>
      </section>
      {/* Content--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" max-w-[1250px] mx-auto flex flex-wrap sm:mt-20 mt-10 sm:gap-20 gap-12 justify-center sm:px-10 px-5 ">
        {/* Form container */}
        <div className=" xl:w-[58%] w-full  poppins-light ">
          {/* Titulo */}
          <h1 className="sm:text-[32px] text-[28px] text-[#161616] poppins-bold mb-6">
            Déjanos tu información
          </h1>
          {/* Subtitulo */}
          <h2 className="text-[16px] text-[#474747]  sm:mb-14 mb-10">
            ¡Nos encantaría saber más sobre ti! Por favor, completa el siguiente
            formulario para que podamos ponernos en contacto contigo, brindarte
            la mejor atención y responder todas tus preguntas.
          </h2>
          {/* Form */}
          <form className=" gap-4 flex flex-col">
            <Campo name={"Nombre*"} />
            <Campo name={"Apellido*"} />
            <Campo name={"Email*"} />
            <Campo name={"Celular*"} />
            <input
              required
              className="w-full bg-white pt-4 pb-32 px-6 text-black outline-none"
              type="text"
              placeholder="Mensaje*"
            />
            <input
              value="Enviar"
              className="w-full bg-[#B1976B] py-3 px-6 text-white text-[15px] outline-none tracking-wide cursor-pointer poppins-semibold"
              type="submit"
            />
          </form>
        </div>
        {/* Mapa container */}
        <div className="xl:w-[35%] w-full poppins-light  ">
          {/* Titulo */}
          <h1 className="sm:text-[32px] text-[28px] text-[#161616] poppins-bold mb-6">
            Ubicación
          </h1>
          {/* Subtitulo */}
          <h2 className="text-[16px] text-[#474747]  sm:mb-14 mb-8 flex flex-col gap-5">
            <div>
              Dirección: Vía Ricardo J. Alfaro, calle 65 oeste, P.H. Century
              Tower, Piso 13, Oficina 1313.
            </div>
            <div className=" flex gap-3 items-center">
              <div className=" -mb-1">
                <Mail />
              </div>
              <div>contacto@munozyasociados.net</div>
            </div>
            <div className=" flex gap-3 items-center">
              <Phone />
              <div>+507 278-1579 / +507 278-1580</div>
            </div>
          </h2>
          {/* Titulo */}
          <h1 className="sm:text-[32px] text-[28px] text-[#161616] poppins-bold mb-6">
            Mapa
          </h1>
          {/* Imagen */}
          <div className=" cursor-pointer mapa w-full sm:h-[400px] h-[300px]"></div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
