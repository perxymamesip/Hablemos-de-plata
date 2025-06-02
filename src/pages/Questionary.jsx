import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from '/firebase';
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import Aurora from '../components/Aurora';
import { serverTimestamp } from "firebase/firestore";

const preguntas = [
  {
    id: 1,
    text: "Te llega dinero a tu cuenta. Lo primero que haces es:",
    opciones: [
      { texto: "Hago una lista de prioridades y lo organizo.", tipo: "A" },
      { texto: "Gasto solo en lo esencial, sin un plan detallado.", tipo: "B" },
      { texto: "Me doy un gustico, me lo merezco.", tipo: "C" },
      { texto: "Lo dejo quieto y gasto lo mínimo.", tipo: "D" },
    ],
  },
  {
    id: 2,
    text: "Tienes el dinero justo y pasas por tu tienda favorita, está con el 50% de descuento. ¿Qué haces?:",
    opciones: [
      { texto: "Miro con curiosidad, pero decido no gastar.", tipo: "A" },
      { texto: "Entro y si encuentro algo que necesite, lo llevo.", tipo: "B" },
      { texto: "¡50% OFF? No se ve a diario, ¡compro algo!", tipo: "C" },
      { texto: "Depende de mi ánimo: si estoy feliz o triste, compro para celebrar o consolarme.", tipo: "D" },
    ],
  },
  {
    id: 3,
    text: "Tienes una deuda pendiente con alguien (una cuota, un favor, un préstamo), y justo te entra esa plata. Pero aparece un plan que te encanta y cuesta lo mismo. Tú:",
    opciones: [
      { texto: "Pago la deuda primero.", tipo: "A" },
      { texto: "Divido el dinero: pago parte y guardo para el plan.", tipo: "B" },
      { texto: "El plan me llama más. ¡A parchar!", tipo: "C" },
      { texto: "Voy al parche y pido prestado para pagar la deuda.", tipo: "D" },
    ],
  },
  {
    id: 4,
    text: "Estás haciendo mercado o comprando materiales para clase. De repente te provoca un snack, una bebida, algo extra. ¿Qué haces?",
    opciones: [
      { texto: "Si no estaba presupuestado, así sea barato, no lo compro.", tipo: "A" },
      { texto: "Lo compro, pero ajusto otro gasto para equilibrar.", tipo: "B" },
      { texto: "Lo compro sin pensarlo. Total, ¿qué es un snack?", tipo: "C" },
      { texto: "Lo compro... y me quedo sin pal pasaje :(", tipo: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Cómo llevas el control de tu dinero en el mes?",
    opciones: [
      { texto: "Anoto todos mis ingresos y gastos, llevo un control detallado.", tipo: "A" },
      { texto: "Reviso solo gastos grandes.", tipo: "B" },
      { texto: "La verdad todo lo llevo mental.", tipo: "C" },
      { texto: "Algunos gastos los anoto, otros no.", tipo: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Qué tan seguido revisas tus gastos?",
    opciones: [
      { texto: "Semanalmente.", tipo: "A" },
      { texto: "A veces, cuando siento que gasto mucho.", tipo: "B" },
      { texto: "Nunca.", tipo: "C" },
      { texto: "Solo cuando me quedo sin plata.", tipo: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Tienes alguna meta financiera en este momento?",
    opciones: [
      { texto: "Sí, con plan y fechas.", tipo: "A" },
      { texto: "Sí, pero sin plan.", tipo: "B" },
      { texto: "Me gustaría, pero no sé por dónde empezar.", tipo: "C" },
      { texto: "No.", tipo: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Guardas dinero para emergencias?",
    opciones: [
      { texto: "Sí, cada mes.", tipo: "A" },
      { texto: "A veces, si sobra.", tipo: "B" },
      { texto: "No, vivo el presente.", tipo: "C" },
      { texto: "¿Emergencias? ¿Cómo? ¿Cuál?", tipo: "D" },
    ],
  },
  {
    id: 9,
    text: "Cuando te antojas de algo que no necesitas, sueles…",
    opciones: [
      { texto: "Respirar y pensarlo 24h antes de comprar.", tipo: "A" },
      { texto: "Comprar si tengo con qué.", tipo: "B" },
      { texto: "Comprar y preocuparme después.", tipo: "C" },
      { texto: "Me da culpa, pero igual lo hago.", tipo: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Has usado alguna app o herramienta para registrar tus finanzas?",
    opciones: [
      { texto: "Sí, varias veces.", tipo: "A" },
      { texto: "Una vez y la dejé.", tipo: "B" },
      { texto: "No, pero me interesa.", tipo: "C" },
      { texto: "No, ni sé cómo.", tipo: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Cuál de estas frases va más contigo?",
    opciones: [
      { texto: "Ahorra primero, gasta después.", tipo: "A" },
      { texto: "Me premio por mi esfuerzo.", tipo: "B" },
      { texto: "Disfruta hoy, mañana quién sabe.", tipo: "C" },
      { texto: "¿En qué momento me gasté todo eso?", tipo: "D" },
    ],
  },
];

function Questionary() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [catPosition, setCatPosition] = useState('hidden');
  const [firebaseId, setFirebaseId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.state?.firebaseId) {
      setFirebaseId(location.state.firebaseId);
    }
  }, [location]);

  const handleSelectOption = (tipo) => {
    setOpcionSeleccionada(tipo);
    setCatPosition('peeking');
    
    setTimeout(() => {
      setCatPosition('hidden');
    }, 2000);
  };

  const handleNext = async () => {
    if (opcionSeleccionada === null || isSubmitting) return;

    setIsSubmitting(true);
    
    const nuevasRespuestas = [...respuestas, opcionSeleccionada];
    setRespuestas(nuevasRespuestas);
    setOpcionSeleccionada(null);

    try {
      if (currentIndex < preguntas.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        await calcularPerfil(nuevasRespuestas);
      }
    } catch (error) {
      console.error("Error en navegación:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

 const calcularPerfil = async (respuestasTotales) => {
  setIsSubmitting(true);
  
  // 1. Calcular el perfil basado en las respuestas
  const conteo = { A: 0, B: 0, C: 0, D: 0 };
  respuestasTotales.forEach((tipo) => conteo[tipo]++);
  const perfil = Object.keys(conteo).reduce((a, b) => conteo[a] > conteo[b] ? a : b);

  // 2. Preparar datos para actualizar
  const updateData = {
    'testResults.respuestas': respuestasTotales,
    'testResults.perfil': perfil,
    'testResults.completado': true,
    'testResults.fechaFinalizacion': serverTimestamp(),
    'metadata.estado': 'test_completado'
  };

  try {
    // 3. Intentar guardar en Firebase
    console.log("Intentando guardar respuestas...");
    await updateDoc(doc(db, "usuarios", firebaseId), updateData);
    console.log("Respuestas guardadas con éxito");

    // 4. Navegar a resultados
    navigate('/resultados', { 
      state: { 
        tipo: perfil,
        firebaseId,
        respuestas: respuestasTotales
      }
    });

  } catch (error) {
    console.error("Error al guardar respuestas:", error);
    
    // 5. Sistema de respaldo en caso de error
    const backupData = {
      firebaseId,
      respuestas: respuestasTotales,
      perfil,
      intentos: 1,
      ultimoIntento: new Date().toISOString()
    };
    
    localStorage.setItem('respuestasPendientes', JSON.stringify(backupData));
    console.log("Respuestas guardadas en localStorage como respaldo");

    navigate('/resultados', {
      state: {
        tipo: perfil,
        respuestas: respuestasTotales,
        warning: "Tus resultados están disponibles, pero no se pudo guardar en la nube. Se intentará guardar más tarde."
      }
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const progreso = ((currentIndex) / preguntas.length) * 100;



  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      {/* Fondo Aurora */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#C6FF00", "#B877FF", "#C6FF00"]}
          blend={0.5}
          amplitude={1}
          speed={0.5}
        />
      </div>
      
      {/* Loader (nuevo componente añadido) */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#B877FF] mb-4"></div>
            <p className="text-[#FEFEFE] font-poppins">Guardando tus respuestas...</p>
          </div>
        </div>
      )}
      
      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen py-8 px-4 flex items-center justify-center">
        {/* Gato escondido */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-200 ease-out ${
          catPosition === 'hidden' ? 'translate-y-[80%]' : 'translate-y-[52%]'
        }`}>
          <img 
            src="/SitCat (1).png" 
            alt="Gato escondido"
            className="w-40 h-auto"
          />
        </div>

        {/* Contenedor de preguntas */}
        <div className={`max-w-md w-full bg-[#0A0A0A]/90 rounded-2xl border-2 border-[#B877FF] shadow-lg shadow-[#B877FF]/20 overflow-hidden relative z-30 transition-transform duration-300 ${
          catPosition === 'peeking' ? 'translate-y-2' : ''
        }`}>
          <div className="p-6">
            {/* Barra de progreso */}
            <div className="mb-4">
              <div className="w-full bg-[#2D2D2D] rounded-full h-2 font-poppins">
                <div 
                  className="bg-[#C6FF00] h-2 rounded-full" 
                  style={{ width: `${progreso}%` }}
                />
              </div>
              <p className="text-right text-xs font-poppins font-light text-[#FEFEFE] mt-1">
                Pregunta {currentIndex + 1} de {preguntas.length}
              </p>
            </div>
            
            <h2 className="text-xl font-poppins text-[#FEFEFE] mb-4">{preguntas[currentIndex].text}</h2>
            
            <div className="space-y-3 mb-6">
              {preguntas[currentIndex].opciones.map((opcion, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectOption(opcion.tipo)}
                  className={`w-full text-left p-4 rounded-xl transition duration-200 font-poppins text-sm font-light ${
                    opcionSeleccionada === opcion.tipo
                      ? "bg-[#B877FF] text-[#0A0A0A] font-semibold border-2 border-[#C6FF00]"
                      : "bg-[#2D2D2D] hover:bg-[#3D3D3D] text-[#FEFEFE] border border-[#B877FF]"
                  }`}
                >
                  {opcion.texto}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={opcionSeleccionada === null || isSubmitting}
              className={`w-full py-3 rounded-xl font-bold ${
                opcionSeleccionada === null || isSubmitting
                  ? "bg-[#2D2D2D] text-[#FEFEFE] cursor-not-allowed opacity-50"
                  : "bg-[#FF70C0] hover:bg-[#E55CAD] text-[#0A0A0A] shadow-md shadow-[#FF70C0]/30"
              }`}
            >
              {isSubmitting ? "Guardando..." : 
              currentIndex < preguntas.length - 1 ? "Siguiente" : "Ver resultados"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionary;