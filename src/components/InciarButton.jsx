import { NavLink } from 'react-router-dom';

const IniciarButton = () => {
  return (
    <NavLink to="/start">
      <div className="w-44 h-16 sm:w-36 sm:h-14 px-6 py-3 sm:px-4 sm:py-2 bg-[#B877FF] rounded-2xl flex justify-center items-center cursor-pointer hover:bg-[#A55EED] transition-colors duration-200">
      <span className="text-[#0A0A0A] text-2xl sm:text-xl font-bold font-poppins italic">INICIAR</span>
      </div>

    </NavLink>
  );
};

export default IniciarButton;