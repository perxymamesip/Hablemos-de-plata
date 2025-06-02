export const checkPendingResponses = async () => {
  const pendingData = localStorage.getItem('respuestasPendientes');
  if (!pendingData) return;

  const { firebaseId, respuestas, perfil, intentos } = JSON.parse(pendingData);
  
  // No intentar más de 3 veces
  if (intentos >= 3) {
    console.log("Máximo de intentos alcanzado, eliminando respaldo");
    localStorage.removeItem('respuestasPendientes');
    return;
  }

  try {
    console.log("Intentando guardar respuestas pendientes...");
    await updateDoc(doc(db, "usuarios", firebaseId), {
      'testResults.respuestas': respuestas,
      'testResults.perfil': perfil,
      'testResults.completado': true,
      'testResults.fechaFinalizacion': serverTimestamp()
    });
    
    console.log("Respuestas pendientes guardadas con éxito");
    localStorage.removeItem('respuestasPendientes');
    
  } catch (error) {
    console.error("Error al guardar pendientes:", error);
    // Incrementar contador de intentos
    const updatedData = {
      ...JSON.parse(pendingData),
      intentos: intentos + 1,
      ultimoIntento: new Date().toISOString()
    };
    localStorage.setItem('respuestasPendientes', JSON.stringify(updatedData));
  }
};