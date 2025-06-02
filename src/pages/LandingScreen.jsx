import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import IniciarButton from '../components/InciarButton.jsx';
import Logo from '../components/Logo.jsx';
import RotatingText from '../components/RotatingText.jsx';
import Particles from '../components/Particles.jsx';
function LandingScreen() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleCat = () => {
    setIsHidden(!isHidden);
  };

  return (
    
    <div className="bg-[#0A0A0A] w-full h-screen relative overflow-hidden ">
<div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#FEFEFE']}
          backgroundColor="#0A0A0A"
          particleCount={500}
          particleSpread={10}
          speed={1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          particleHoverFactor={1}
          cameraDistance={15}
          sizeRandomness={2}
          disableRotation={true}
        
        />
     </div>
      <div className="w-full h-20 bg-[#0A0A0A] flex items-center px-8">
      <Logo/>
      </div>
      {/* Contenedor principal del gato */}
        <div className="w-full pt-8 px-4 z-10">
          <div className="font-poppins flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              <span className="text-[#FEFEFE]">Hablemos de</span>
              <RotatingText
                texts={['conciencia financiera', 'manejo del dinero', 'plata :)']}
                mainClassName="px-4 sm:px-4 bg-[#B877FF]/10 text-[#B877FF] font-bold rounded-lg"
                staggerFrom="center"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                staggerDuration={0.03}
                transition={{ 
                  type: "spring", 
                  damping: 20, 
                  stiffness: 300,
                  mass: 0.5
                }}
                rotationInterval={2500}
                splitLevelClassName="overflow-hidden"
                elementLevelClassName="inline-block"
              />
            </div>
          </div>
        </div>
<div className="transform -translate-x-1/2 flex flex-col items-center animate-bounce z-40 ">
    <span className="text-[#FEFEFE] mt-2 text-sm font-medium font-poppins">¡Hazme click!</span>
    <svg 
      className="w-5 h-5 text-[#FEFEFE] mt-1" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
      />
    </svg>
  </div>
      <div className="flex flex-col justify-center items-center h-full">

        {/* Contenedor clickeable */}
<div 
  className="relative w-[80%] sm:w-[50%] md:w-[60%] lg:w-[80%] max-w-[847px] aspect-[847/620] mb-96 cursor-pointer"
  onClick={toggleCat}
>
  {/* Imagen del gato con animación */}
  <div className="relative w-full h-full overflow-hidden">
    
    {/* Botón detrás del gato */}
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <IniciarButton />
    </div>

    <img 
      className={`w-full h-full object-contain z-30 transition-transform duration-500 ease-in-out ${isHidden ? 'translate-y-[60%]' : 'translate-y-0'}`}
      src="/miau Landing.png" 
      alt="Cat Logo"
    />

    
  </div>

  {/* Patas del gato */}
  <img 
    className="absolute bottom-[1%] left-[10%] w-[30%] md:w-[30%] lg:w-[30%] z-30"
    src="/paw.png" 
    alt="Pata izquierda"
  />
  
  <img 
    className="absolute bottom-[1%] right-[11%] w-[30%] md:w-[30%] lg:w-[30%] z-30"
    src="/paw.png" 
    alt="Pata derecha"
  />
</div>
</div>
{/* Barra inferior (fija, con z-index mayor que el botón pero menor que el gato) */}
<div className="overflow-hidden fixed bottom-0 left-0 w-full h-[350px] sm:h-[1px] md:h-[310px] lg:h-[230px] bg-[#dc3bae] z-20" />

    </div>
  );
}
export default LandingScreen;
