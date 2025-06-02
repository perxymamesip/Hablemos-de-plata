import { NavLink, useLocation } from 'react-router-dom';
import perfiles from '../components/Profiles';
import SplashCursor from '../components/SplashCursor';
import SpotlightCard from '../components/SpotlightCard';

function Feedback() {
  const location = useLocation();
  const { tipo } = location.state || {};
  const perfil = perfiles[tipo];

  // Clases dinámicas basadas en el perfil
  const clasesFondo = `min-h-screen bg-gradient-to-br ${perfil?.colores?.fondo || 'from-[#0A0A0A] to-[#1A1A2E]'} py-8 px-4 transition-all duration-1000`;
  const clasesContenedor = `max-w-6xl mx-auto bg-[#0A0A0A]/90 backdrop-blur-sm rounded-2xl border-2 ${perfil?.colores?.borde || 'border-[#B877FF]'} shadow-lg ${perfil?.colores?.sombra || 'shadow-[#B877FF]/20'} overflow-hidden animate-fade-in-up`;

  if (!perfil) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A2E] flex items-center justify-center p-4 font-poppins">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-[#FF70C0] mb-4">¡Ups!</h1>
          <p className="text-[#FEFEFE] mb-6">No se encontró un perfil válido.</p>
          <NavLink 
            to="/"
            className="inline-block bg-[#B877FF] hover:bg-[#9B59FF] text-[#0A0A0A] font-bold py-2 px-6 rounded-xl transition duration-200 shadow-md shadow-[#B877FF]/30"
          >
            Volver al inicio
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className={clasesFondo}>
      <SplashCursor color={perfil?.colores?.borde.replace('border-', '') || '#B877FF'} />
      
      <div className={clasesContenedor}>
        <div className="p-6 md:p-8">
          {/* Sección superior: Perfil destacado */}
          <div className="md:flex md:space-x-8 md:items-start">
            {/* Imagen del perfil más grande */}
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div className="relative group overflow-hidden rounded-xl border-2 border-[#C6FF00] shadow-lg">
                <img 
                  src={perfil.image}
                  alt={perfil.titulo}
                  className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`Error al cargar: ${perfil.gif}`);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h2 className="text-xl  text-white">{perfil.titulo}</h2>
                </div>
              </div>
            </div>

            {/* Descripción del perfil */}
            <div className="flex flex-col font-poppins md:w-3/5">
              <h1 className=" mt-16 text-3xl md:text-4xl font-bold text-[#C6FF00] mb-4 drop-shadow-[0_0_8px_rgba(198,255,0,0.6)]">
                {perfil.titulo}
              </h1>
              <p className="text-l md:text-xl text-[#FEFEFE] opacity-90 leading-relaxed mb-8 font-light">
                {perfil.descripcion}
              </p>
            </div>
          </div>

          {/* Sección de consejos (más destacada) */}
          <div className="my-10 font-poppins">
            <SpotlightCard 
              className="bg-gradient-to-br from-[#2D2D2D]/80 to-[#1A1A1A]/80 p-8 rounded-xl border-2 border-[#FF70C0] hover:border-[#B877FF] transition-all duration-300 shadow-xl shadow-[#FF70C0]/20 hover:shadow-[#B877FF]/30"
              spotlightColor="rgba(255, 112, 192, 0.2)"
            >
              <div className="flex items-center mb-6">
                <svg className="w-8 h-8 mr-3 text-[#FF70C0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="font-bold text-2xl text-[#FF70C0]">Consejos Clave para Ti</h2>
              </div>
              <ul className="space-y-4 pl-4">
                {perfil.consejos.map((consejo, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-[#B877FF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-[#FEFEFE] text-md opacity-90">{consejo}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>

          {/* Sección inferior: Recursos y plan de ahorro */}
          <div className="md:flex md:space-x-8 font-poppins">
            {/* Recursos Educativos */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <SpotlightCard 
                className="h-full bg-gradient-to-br from-[#2D2D2D]/80 to-[#1A1A1A]/80 p-6 rounded-xl text-left border-2 border-[#B877FF] hover:border-[#FF70C0] transition-all duration-300 shadow-lg shadow-[#B877FF]/20 hover:shadow-[#FF70C0]/30"
              >
                <div className="relative group mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/Captura de pantalla 2025-05-30 123909.png"
                    alt="Vista del curso de educación financiera"
                    className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#B877FF]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-lg">Educación financiera para todos</span>
                  </div>
              </div>
                <div className="mb-6 font-poppins">
                  <div className="flex items-center">
                    <svg className="w-7 h-7 mr-3 text-[#FF70C0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className="font-bold text-xl text-[#FF70C0] inline-block relative pb-1">
                      Recursos Educativos
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B877FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </h2>
                  </div>
                  <p className="text-[#A0A0A0] text-sm mt-2">Materiales seleccionados para tu perfil de aprendizaje</p>
                </div>

                <ul className="space-y-4">
                  {perfil.recursosEducativos.map((recurso, index) => (
                    <li key={index} className="flex items-start group hover:bg-[#2D2D2D]/50 p-3 rounded-lg transition-colors duration-200">
                      <svg className="w-6 h-6 mt-1 mr-3 text-[#B877FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <div>
                        <a
                          href={recurso.match(/https?:\/\/\S+/)?.[0] || "#"}
                          className="text-[#FEFEFE] hover:text-[#B877FF] transition-colors duration-200 font-light text-sm block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {recurso.replace(/https?:\/\/[^\s]+/g, '').trim() || recurso}
                        </a>
                        <span className="text-xs text-[#A0A0A0] block mt-1">
                          {new URL(recurso.match(/https?:\/\/\S+/)?.[0] || "#").hostname.replace('www.', '')}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>

            {/* Plan de Ahorro */}
            <div className="md:w-1/2">
              <SpotlightCard 
                className="h-full bg-gradient-to-br from-[#2D2D2D]/80 to-[#1A1A1A]/80 p-6 rounded-xl text-left border-2 border-[#B877FF] hover:border-[#FF70C0] transition-all duration-300 shadow-lg shadow-[#B877FF]/20 hover:shadow-[#FF70C0]/30"
              >
                <div className="relative group mb-6 overflow-hidden rounded-lg">
                  <img
                    src="/Plan de ahorro.png"
                    alt="Vista previa del plan de ahorro"
                    className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#B877FF]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-lg">Plan de Ahorro Personalizable</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center">
                    <svg className="w-7 h-7 mr-3 text-[#FF70C0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className="font-bold text-xl text-[#FF70C0] inline-block relative pb-1 group">
                      Plan de Ahorro
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B877FF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </h2>
                  </div>
                  <p className="text-[#A0A0A0] text-sm mt-2">Herramienta práctica para organizar tus metas financieras</p>
                </div>

                <div className="group hover:bg-[#2D2D2D]/50 p-4 rounded-lg transition-colors duration-200 border border-[#3D3D3D] bg-[#1E1E1E]/30">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mt-1 mr-3 text-[#B877FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    
                    <div className="flex-1">
                      <h3 className="text-[#FEFEFE]  font-medium text-sm mb-3">Plan de Ahorro en Excel</h3>
                      <p className="text-[#A0A0A0] text-sm mb-4">
                        Descarga esta plantilla con fórmulas automáticas para organizar tus finanzas y alcanzar tus metas de ahorro.
                      </p>
                      
                      <div className="flex justify-center">
                        <a
                          href="/Plan%20de%20ahorro%20personalizable.xlsx"
                          download="Plan_de_Ahorro_Gatitos_Financieros.xlsx"
                          className="inline-flex items-center justify-center px-6 py-3 bg-[#B877FF] hover:bg-[#9F5EE5] text-white rounded-lg transition-all duration-200 text-base font-medium shadow-lg hover:shadow-xl"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Descargar Plan de Ahorro
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <NavLink 
              to="/test"
              className="flex-1 text-center border-2 font-poppins font-semibold py-3 px-6 rounded-xl hover:border-[#B877FF] hover:shadow-[inset_0_0_12px_#B877FF] text-[#B877FF] transition-all duration-300 text-lg"
            >
              Volver a hacer el test
            </NavLink>
            
            <NavLink 
              to="/"
              className="flex-1 text-center border-2 font-poppins font-semibold py-3 px-6 rounded-xl hover:border-[#C6FF00] hover:shadow-[inset_0_0_12px_#C6FF00] text-[#C6FF00] transition-all duration-300 text-lg"
            >
              Reiniciar experiencia
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;