import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../App.css';
import Logo from '../components/Logo.jsx';
import CatCard from '../components/CatCard.jsx';

function Presentacion() {
  const [bgColor, setBgColor] = useState('#FF70C0');
  const { pathname } = useLocation();

  const handleHover = (color) => {
    setBgColor(color);
  };

  // Reset scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    
    <>
    
      {/* Sección 1: Sabías que... */}
      <section className="w-full  bg-[#C6FF00]">
        <div className="w-full h-20 flex items-center px-8">
          <Logo />
        </div>

        <div className="flex flex-col items-left px-20 py-10">
          <h1 className="font-poppins text-4xl font-semibold mb-2">Sabías que...</h1>
          <div className="flex items-center">
            <p className="font-poppins text-9xl font-bold text-[#B18CFE] mr-10">73%</p>
            <div className="flex flex-col gap-2">
              <p className="font-poppins text-4xl font-normal">
                de los jóvenes en Colombia no lleva un control de sus gastos
              </p>
              <p className="font-poppins font-light text-s">
                Según la encuesta nacional de capacidades financieras hecha en Colombia por el Banco Mundial*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Gatitos financieros */}
      <section className="w-full  transition-colors duration-500" style={{ backgroundColor: bgColor }}>
        <h2 className="font-poppins ml-20 text-4xl font-semibold pt-16 text-[#FFFC87]">
          ¡Descubre cuál tipo de gatito financiero eres!
        </h2>

        <div className="w-full flex justify-evenly">
          <div className="flex flex-wrap gap-6 justify-center">
            <CatCard
              image="13.gif"
              title="Gatito Planificador"
              description="Controla cada peso como un chef mide ingredientes..."
              hoverColor="#0A0A0A"
              handleHover={handleHover}
              alt="Gatito Planificador"
            />
            <CatCard
              image="1.gif"
              title="Gatito Selectivo"
              description="Solo gasta cuando está 100% seguro. Compara opciones, evalúa riesgos y no se deja llevar por impulsos."
              hoverColor="#B877FF"
              handleHover={handleHover}
              alt="Gatito Selectivo"
            />
            <CatCard
              image="3.gif"
              title="Gatito Gastón"
              description="¡Compre ahora, pregunte después! (Aunque el susto llegue con la factura)."
              hoverColor="#FF70C0"
              handleHover={handleHover}
              alt="Gatito Gastón"
            />
            <CatCard
              image="2.gif"
              title="Gatito Desprevenido"
              description="Vive al día y el dinero… se le esconde como arena en el arenero. Sin plan, gasta por ánimo o urgencias."
              hoverColor="#AEEBEE"
              handleHover={handleHover}
              alt="Gatito Desprevenido"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <NavLink 
          to="/comienzo" 
          className="bg-[#0A0A0A] font-poppins font-semibold py-2 px-4 rounded-xl mb-10 hover:border hover:border-[#C6FF00] hover:shadow-[inset_0_0_8px_#C6FF00] text-[#C6FF00] transition-all duration-300"
        >
          ¡Descubre cuál eres!
        </NavLink>
        </div>
 </section>

     
    </>
  );
}

export default Presentacion;
