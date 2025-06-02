import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Particles from '../components/Particles.jsx';
import { db } from '/firebase';
import { 
  collection, 
  addDoc, 
  serverTimestamp 
} from "firebase/firestore";

function Comienzo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const [formData, setFormData] = useState({
    edad: '',
    semestre: '',
    carrera: 'Diseño Digital y Multimedia',
    otraCarrera: '',
    correo: '',
    recibirResultado: false,
    aceptaTerminos: false
  });

  // Reset scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.aceptaTerminos) {
    alert('Debes aceptar los términos para continuar');
    return;
  }
  
  try {
    // 1. Preparamos el documento completo con estructura organizada
    const userDoc = {
      metadata: {
        estado: "test_iniciado",
        fechaInicio: serverTimestamp(),
        version: "1.0"
      },
      userInfo: {
        // Datos demográficos
        edad: formData.edad,
        semestre: formData.semestre,
        carrera: formData.carrera === "Otra" ? formData.otraCarrera : formData.carrera,
        contacto: {
          correo: formData.correo,
          recibirResultado: formData.recibirResultado
        }
      },
      testResults: {
        // Espacio para las respuestas (se llenará después)
        respuestas: [],
        perfil: null,
        completado: false
      }
    };

    // 2. Guardamos el documento inicial en Firestore
    const docRef = await addDoc(collection(db, "usuarios"), userDoc);
    console.log("Documento inicial creado con ID:", docRef.id);

    // 3. Redirigimos al test con el ID del documento
    navigate('/test', { 
      state: { 
        firebaseId: docRef.id,
        userData: userDoc.userInfo // Pasamos solo los datos necesarios
      }
    });

  } catch (error) {
    console.error("Error al crear documento inicial:", error);
    alert(`Error al iniciar: ${error.message}`);
  }
};

return (
  <div className="min-h-screen bg-[#0A0A0A] py-8 px-4 flex items-center justify-center relative overflow-hidden font-poppins">
    <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#B877FF', '#FF70C0', '#C6FF00']}
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

    
    <div className="w-full max-w-2xl bg-[#0A0A0A] rounded-2xl border-2 border-[#B877FF] shadow-lg shadow-[#B877FF]/20 overflow-hidden relative z-20"
    >
      
      <div className="p-8">
        {/* Encabezado con mejor jerarquía visual */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#C6FF00] mb-2">Antes de comenzar...</h1>
          <p className="text-[#FEFEFE]/80">Completa estos datos para personalizar tu experiencia</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Grupo de campos - Estilo consistente */}
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-[#FEFEFE]">Edad:</h2>
            <div className="border-2 rounded-xl p-4 grid grid-cols-2 gap-3 border-[#B877FF] bg-[#1A1A1A]">
              {['17-19', '20-22', '23-25', '26 o más'].map(opcion => (
                <label key={opcion} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-[#2D2D2D] transition-colors">
                  <input
                    type="radio"
                    name="edad"
                    value={opcion}
                    checked={formData.edad === opcion}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#B877FF] focus:ring-[#B877FF] border-[#FF70C0]"
                    required
                  />
                  <span className="text-[#FEFEFE]">{opcion}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Semestre - Mejor distribución */}
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-[#FEFEFE]">Semestre actual:</h2>
            <div className="border-2 rounded-xl p-4 border-[#B877FF] bg-[#1A1A1A] grid grid-cols-5 gap-2">
              {Array.from({length: 10}, (_, i) => i + 1).map(num => (
                <label key={num} className="flex items-center justify-center p-2 rounded-lg hover:bg-[#2D2D2D] transition-colors">
                  <input
                    type="radio"
                    name="semestre"
                    value={`${num}°`}
                    checked={formData.semestre === `${num}°`}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#B877FF] focus:ring-[#B877FF] border-[#FF70C0]"
                    required
                  />
                  <span className="ml-2 text-[#FEFEFE]">{num}°</span>
                </label>
              ))}
              <label className="col-span-5 flex items-center p-2 rounded-lg hover:bg-[#2D2D2D] transition-colors mt-2">
                <input
                  type="radio"
                  name="semestre"
                  value="Otro / No aplica"
                  checked={formData.semestre === "Otro / No aplica"}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#B877FF] focus:ring-[#B877FF] border-[#FF70C0]"
                />
                <span className="ml-2 text-[#FEFEFE]">Otro / No aplica</span>
              </label>
            </div>
          </div>
          
          {/* Carrera - Mejor alineación */}
          <div className="space-y-3">
            <h2 className="text-lg font-medium text-[#FEFEFE]">Carrera:</h2>
            <div className="border-2 rounded-xl p-4 border-[#B877FF] bg-[#1A1A1A] space-y-3">
              <label className="flex items-center p-3 rounded-lg hover:bg-[#2D2D2D] transition-colors">
                <input
                  type="radio"
                  name="carrera"
                  value="Diseño Digital y Multimedia"
                  checked={formData.carrera === "Diseño Digital y Multimedia"}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#B877FF] focus:ring-[#B877FF] border-[#FF70C0]"
                  required
                />
                <span className="ml-3 text-[#FEFEFE]">Diseño Digital y Multimedia</span>
              </label>
              
              <div className="flex items-center space-x-3">
                <label className="flex items-center p-3 rounded-lg hover:bg-[#2D2D2D] transition-colors flex-none">
                  <input
                    type="radio"
                    name="carrera"
                    value="Otra"
                    checked={formData.carrera === "Otra"}
                    onChange={handleChange}
                    className="h-4 w-4 text-[#B877FF] focus:ring-[#B877FF] border-[#FF70C0]"
                  />
                  <span className="ml-3 text-[#FEFEFE]">Otra:</span>
                </label>
                <input
                  type="text"
                  name="otraCarrera"
                  value={formData.otraCarrera}
                  onChange={handleChange}
                  disabled={formData.carrera !== "Otra"}
                  className="flex-1 bg-[#2D2D2D] border-2 rounded-xl py-2 px-4 border-[#B877FF] text-[#FEFEFE] hover:border-[#FF70C0] focus:border-[#C6FF00] transition-colors"
                  required={formData.carrera === "Otra"}
                />
              </div>
            </div>
          </div>
          
          {/* Correo - Más espacio */}
          <div className="space-y-2">
            <label className="text-lg text-[#FEFEFE]">Correo institucional (opcional):</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-[#FEFEFE]">✉️</span>
              </div>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="laurita@universidadmayor.edu.co"
                className="w-full bg-[#2D2D2D] border-2 rounded-xl py-3 px-4 pl-10 border-[#B877FF] text-[#FEFEFE] hover:border-[#FF70C0] focus:border-[#C6FF00] transition-colors"
              />
            </div>
          </div>
          
          {/* Términos - Más legible */}
          <div className="bg-[#1A1A1A] p-5 border-2 rounded-xl border-[#B877FF] space-y-3">
            <p className="text-sm text-[#FEFEFE]/80">
              De acuerdo con la Ley 1581 de 2012 de protección de datos personales en Colombia, 
              te informo que los datos recopilados a través de este formulario serán utilizados 
              exclusivamente con fines académicos, para el desarrollo del proyecto de clase de 
              la Universidad Colegio Mayor de Cundinamarca.
            </p>
            <p className="text-sm text-[#FEFEFE]/80">
              No se compartirá tu información con terceros ni se usará con fines comerciales. 
              Puedes solicitar en cualquier momento la eliminación de tus datos escribiendo al 
              correo de contacto del proyecto.
            </p>
            <p className="text-sm text-[#FEFEFE]/80">
              Al continuar, aceptas el uso anónimo de tus respuestas bajo estos términos.
            </p>
            <label className="flex items-start space-x-3 mt-4 p-2 rounded-lg hover:bg-[#2D2D2D] transition-colors">
              <input
                type="checkbox"
                name="aceptaTerminos"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-[#B877FF] focus:ring-[#B877FF] border-[#FF70C0] rounded"
                required
              />
              <span className="text-[#FEFEFE]">He leído y acepto el tratamiento de mis datos personales</span>
            </label>
          </div>
          
          {/* Botón con mejor feedback */}
          <button
            type="submit"
            className={`w-full py-4 rounded-xl font-bold transition-all duration-200 ${
              formData.aceptaTerminos
            ? "bg-[#FF70C0] hover:bg-[#E55CAD] text-[#0A0A0A] shadow-md shadow-[#FF70C0]/30"
                  : "bg-[#2D2D2D] text-[#FEFEFE] cursor-not-allowed opacity-50"
              }`}
            disabled={!formData.aceptaTerminos}
          >
            Comenzar el test
          </button>
        </form>
      </div>
    </div>
  </div>
);
}
export default Comienzo;