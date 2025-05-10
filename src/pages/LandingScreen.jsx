import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import IniciarButton from '../components/InciarButton.jsx';
import Logo from '../components/Logo.jsx';
function LandingScreen() {
  const [isHidden, setIsHidden] = useState(false);

  const toggleCat = () => {
    setIsHidden(!isHidden);
  };

  return (
    
    <div className="bg-[#C6FF00] w-full h-screen relative overflow-hidden ">
      <div className="w-full h-20 bg-[#C6FF00] flex items-center px-8">
      <Logo/>
      </div>
      {/* Contenedor principal del gato */}
      <div className="flex justify-center items-center h-full">
        {/* Contenedor clickeable */}
        <div 
          className="relative w-[80%] sm:w-[50%] md:w-[60%] lg:-[80%] max-w-[847px] aspect-[847/620] mt-[-5%] cursor-pointer"
          onClick={toggleCat}
        >
          {/* Imagen del gato con animación */}
          <div className="relative w-full h-full overflow-hidden">
            <img 
              className={`w-full h-full object-contain z-10 transition-transform duration-500 ease-in-out ${isHidden ? 'translate-y-[45%]' : 'translate-y-0'}`}
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
      
              {/* Barra inferior fija */}
          <div className="fixed bottom-0 left-0 w-full h-[310px] md:h-[280px] lg:h-[230px] bg-[#C6FF00] z-20 flex justify-center items-center">
            <IniciarButton />
          </div>
    </div>
  );
}
export default LandingScreen;
