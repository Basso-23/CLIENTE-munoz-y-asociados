const Servicios = () => {
  return (
    <main className=" text-black">
      {/* Banner--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className=" w-full sm:h-[400px] h-[140px]  text-center columnas text-white">
        <div className="  w-full h-full bg-[#0000009d] flex flex-col justify-center tracking-wider uppercase poppins-bold  ">
          <h1 className=" lg:text-[65px] sm:text-[40px] text-[25px] normal-case tracking-[1px] poppins-semibold   ">
            Servicios
          </h1>
          <h1 className=" sm:text-[15px]  text-[12px] text-[#d0d0d0]  tracking-[2px] poppins-light">
            soluciones jurídicas y contables
          </h1>
        </div>
      </section>
      {/* Content--------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="xl:flex gap-10  max-w-[1400px] mx-auto sm:px-10 px-5 sm:mt-24 mt-12 ">
        <div className=" xl:w-[365px] w-full h-96 bg-amber-300"></div>
        <div className=" xl:w-[885px]  w-full h-96 bg-red-300"></div>
      </section>
    </main>
  );
};

export default Servicios;
