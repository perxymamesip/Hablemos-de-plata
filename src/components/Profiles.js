import { image } from "framer-motion/client";

  const perfiles = {
    A: {
      titulo: "🐱 Gatito Planificador",
      image:"13.gif",
      alt: "Gatito Planificador",
          // Colores personalizados para el perfil A
       colores: {
      fondo: "from-[#0A0A0A] to-[#0A0A0A]", // Azul oscuro
      borde: "border-[#3A7BD5]", // Azul claro
      sombra: "shadow-[#3A7BD5]/20" // Azul claro con opacidad
    },
      descripcion: "¡Eres un maestro de las finanzas! Controlas cada peso como un chef mide ingredientes. Tu futuro financiero está en buenas patas.",
      consejos: [
        " Invierte tiempo en educación financiera: ya tienes la base, ahora puedes explorar temas como inversión, fondos o fintech para potenciar tus finanzas. Te dejamos un curso gratuito de la Superintendencia Financiera de Colombia ;) ⌛",
        "Destina el 10% de tus ingresos a inversiones de bajo riesgo, como cuentas de ahorro o fondos de inversión con interés como los CDT o cajitas de ahorro como las de NuBank. 💰",
        "Date gusto: manten un gasto presupuesto mensual fijo y sin culpa, para cositas que te hagan feliz, como un almuerzo especial o una salida al cine. ❤️",
      ],
      recursosEducativos: [
        "Aquí hay un curso gratuito de la Superintendencia Financiera de Colombia para que puedas potenciar y desarrollar los conocimientos necesarios acerca del sistema financiero. Además, te brinda un certificado de participación: https://www.superfinanciera.gov.co/educacionSFC/"
      ]
    },

    B: {
      titulo: "🐱 Gatito Selectivo",
      image:"/1.gif",
      alt: "Gatito Selectivo",
          colores: {
      fondo: "from-[#B18CFE] to-[#B18CFE]", // Morado oscuro
      borde: "border-[#B877FF]", // Morado claro
      sombra: "shadow-[#B877FF]/20"
    },
      descripcion: "Eres equilibrado: gastas en lo que te hace feliz, pero con moderación. A veces dudas si comprar o no, y aunque no tienes un plan rígido, evitas los excesos. ¡Tu punto débil es la consistencia!",
      consejos: [
        "Podrías beneficiarte de un plan de ahorro automático con aplicaciones como Nequi, Daviplata o NuBank, que tienen bolsillos para ahorrar sin complicaciones 💰",
        " Crea un fondo de alegría: dinero fijo y presupuestado, solo para gastos que te hagan feliz (ej. 50k/mes solo para gustos) ✅",
        " Usa la técnica 10-10-10: ¿Te arrepentirás en 10 días/meses/años? Si la respuesta es no, adelante con la compra. 👁️",
        " Rastrea tu gasto en eso que anhelas comprar: durante dos meses, observarás en la plataforma del producto que deseas la fluctuación de precios y así podrás decidir si es un buen momento para comprarlo o no. 💲",
      ],
      recursosEducativos: [
        "Aquí hay un curso gratuito de la Superintendencia Financiera de Colombia para que puedas potenciar y desarrollar los conocimientos necesarios acerca del sistema financiero. Además, te brinda un certificado de participación: https://www.superfinanciera.gov.co/educacionSFC/"
      ]
    },
    C: {
      titulo: "🐱 Gatito Gastón",
      image:"/3.gif",
      alt: "Gatito Gastón",
          colores: {
      fondo: "from-[#FF70C0] to-[#FF70C0]", // Rojo oscuro
      borde: "border-[#FF70C0]", // Rosa
      sombra: "shadow-[#FF70C0]/20"
    },
      descripcion: "¡Vives al máximo! Pero cuidado con los sustos en la cuenta bancaria. Tu filosofía es 'disfruta hoy', aunque a veces pagas las consecuencias mañana.",
      consejos: [
        " Prueba la regla 1 semana: espera una semana antes de compras no esenciales y extensas, así evitas arrepentimientos 👁️",
        "Fondo de alegría: Destina el 10% de tus ingresos a un apartado solo para gustos (sin culpa). 💰",
        "Podrías beneficiarte de un plan de ahorro automático con aplicaciones como Nequi, Daviplata o NuBank, que tienen bolsillos para ahorrar sin complicaciones 💲",
        "Rastrea tu gasto en eso que anhelas comprar: durante dos meses, observarás en la plataforma del producto que deseas la fluctuación de precios y así podrás decidir si es un buen momento para comprarlo o no. ❤️",
      ],
      recursosEducativos: [
        "Aquí hay un curso gratuito de la Superintendencia Financiera de Colombia para que puedas potenciar y desarrollar los conocimientos necesarios acerca del sistema financiero. Además, te brinda un certificado de participación: https://www.superfinanciera.gov.co/educacionSFC/"
      ]
    },
    D: {
      titulo: "🐱 Gatito Desprevenido",
     image:"/2.gif",
      alt: "Gatito Desprevenido",
          colores: {
      fondo: "from-[#AEEBEE] to-[#AEEBEE]", // Verde oscuro
      borde: "border-[#C6FF00]", // Verde neón
      sombra: "shadow-[#C6FF00]/20"
    },
      descripcion: "El dinero parece esfumarse sin que notes cómo. Vives al día y las emergencias te toman por sorpresa. Pero tienes una oportunidad: pequeños pasos para ganar control y conciencia sobre tu dinero.",
      consejos: [
        "Empieza con metas de 7 días: ej. 'Esta semana anotaré todos mis gastos en café' ✅",
        "Coloca recordatorios físicos: una nota con tu meta (“Ahorrar $2.000 diarios”) en la nevera o el espejo, junto a una imagen que se relacione. 📝",
        "Guarda la moneda o billete que sobre cada día en una alcancía (no virtual, ¡real!). 💰",
        "Ponle nombre a tu dinero: asigna un propósito a cada peso (ej. 'este es para el almuerzo', 'este es para el ahorro'). ❤️",
        "Preguntate antes de comprar: ¿realmente necesito esto? ¿Me hará feliz a largo plazo o sólo lo deseo? 👁️",
        "Rastrea tu gasto en eso que anhelas comprar: durante dos meses, observarás en la plataforma del producto que deseas la fluctuación de precios y así podrás decidir si es un buen momento para comprarlo o no. 🫵",
      ],
      recursosEducativos: [
        "Aquí hay un curso gratuito de la Superintendencia Financiera de Colombia para que puedas potenciar y desarrollar los conocimientos necesarios acerca del sistema financiero. Además, te brinda un certificado de participación: https://www.superfinanciera.gov.co/educacionSFC/"
      ]
    }
  };

  export default perfiles;