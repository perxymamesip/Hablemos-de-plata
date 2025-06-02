import { NavLink } from 'react-router-dom';
import '../App.css';
import Particles from '../components/Particles.jsx';
import Logo2 from '../components/Logo2.jsx';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplashCursor from '../components/SplashCursor.jsx';
import Magnet from '../components/Magnet.jsx'


gsap.registerPlugin(ScrollTrigger);

export default function Start() {
  const texto1Ref = useRef(null);
  const texto2Ref = useRef(null);
  const texto3Ref = useRef(null);
  const texto4Ref = useRef(null);

  // Animación 1
  useGSAP(() => {
    gsap.fromTo(
      texto1Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: texto1Ref.current,
          start: 'top 80%',
          toggleActions: 'restart pause none reverse',
        },
      }
    );
  }, []);

  // Animación 2
  useGSAP(() => {
    gsap.fromTo(
      texto2Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: texto2Ref.current,
          start: 'top 80%',
          toggleActions: 'restart pause none reverse',
        },
      }
    );
  }, []);

  // Animación 3
  useGSAP(() => {
    gsap.fromTo(
      texto3Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: texto3Ref.current,
          start: 'top 80%',
          toggleActions: 'restart pause none reverse',
        },
      }
    );
  }, []);

  // Animación 4
  useGSAP(() => {
    gsap.fromTo(
      texto4Ref.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: texto4Ref.current,
          start: 'top 80%',
          toggleActions: 'restart pause none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0A] overflow-hidden">
      {/* Fondo con partículas */}
      <SplashCursor />
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#FEFEFE']}
          backgroundColor="#0A0A0A"
          particleCount={300}
          particleSpread={1}
          speed={0.1}
          particleBaseSize={40}
          moveParticlesOnHover={false}
          alphaParticles={false}
          particleHoverFactor={1}
          cameraDistance={15}
          sizeRandomness={2}
          disableRotation={false}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="h-20 bg-transparent flex items-center px-8">
          <Logo2 className="h-12" />
        </header>

        <main className="flex-1 flex flex-col items-center px-24 py-80 space-y-96">
          <div className="w-full max-w-[844px] flex flex-col items-center gap-96">
            {/* Bloques de texto */}
            <div className="w-full text-center opacity-0" ref={texto1Ref}>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">
                <span className="text-[#C6FF00]">¿Te sucede que algunas veces no sabes</span>
                <span className="text-[#B877FF]"> a donde va tu plata?</span>
              </p>
            </div>

            <div className="w-full text-center opacity-0" ref={texto2Ref}>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">
                <span className="text-[#FF70C0]">¿Estás ahorrando como deberías...</span>
                <span className="text-[#AEEBEE]"> o como puedes?</span>
              </p>
            </div>

            <div className="w-full text-center opacity-0" ref={texto3Ref}>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">
                <span className="block text-[#C6FF00]">No te preocupes...</span>
                <span className="block text-[#AEEBEE]">Si sientes que el dinero se espanta como gato en agua</span>
                <span className="block text-[#FF70C0]">o si solo quieres ser consciente de cuidarlo mejor...</span>
              </p>
            </div>

            <div className="w-full text-center opacity-0" ref={texto4Ref}>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins text-[#B877FF]">
                Este test tiene algo para ti.
              </p>
            </div>
          <Magnet>
            <NavLink
              to="/presentacion"
              className="bg-[#B877FF] font-poppins font-semibold py-2 px-4 rounded-xl mb-10 hover:border hover:border-[#C6FF00] hover:shadow-[inset_0_0_8px_#C6FF00] text-[#C6FF00] transition-all duration-300"
        >
        
              DESCUBRELO AHORA
            </NavLink>
            </Magnet>
          </div>
        </main>
      </div>
    </div>
  );
}
