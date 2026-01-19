import { useState, useEffect } from 'react';

export const useProjectStatus = (url) => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!url) return;

    if (url.startsWith('/')) {
      setStatus('internal');
      return;
    }

    const checkStatus = async () => {
      const controller = new AbortController();
      // AUMENTAMOS A 4 SEGUNDOS (Streamlit tarda en despertar)
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      try {
        await fetch(url, { method: 'GET', mode: 'no-cors', signal: controller.signal });
        // Si no lanza error, asumimos que "existe" (aunque sea respuesta opaca)
        setStatus('online');
      } catch (error) {
        // Solo marcamos offline si realmente falló la red o timeout
        console.warn("Ping fallido o bloqueado por CORS:", url);
        setStatus('offline');
      } finally {
        clearTimeout(timeoutId);
      }
    };

    checkStatus();
  }, [url]);

  return status;
};