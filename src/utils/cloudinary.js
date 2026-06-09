export const EXTENSIONS_IMATGE = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'heic'];

export const obtenirTipusRecursCloudinary = (fileName) => {
  const ext = (fileName || '').split('.').pop()?.toLowerCase() || '';
  return EXTENSIONS_IMATGE.includes(ext) ? 'image' : 'raw';
};

export const normalitzarUrlCloudinary = (url, fileName = '') => {
  if (!url || typeof url !== 'string') return '';
  const tipus = obtenirTipusRecursCloudinary(fileName);

  if (tipus === 'raw') {
    // Corregir el path si cal
    let urlNormalitzada = url.includes('/image/upload/')
      ? url.replace('/image/upload/', '/raw/upload/')
      : url;
    // Afegir fl_attachment per forçar descàrrega directa i evitar el bloqueig
    // de Chrome quan intenta obrir el fitxer inline (chrome-error://chromewebdata)
    if (!urlNormalitzada.includes('fl_attachment')) {
      urlNormalitzada = urlNormalitzada.replace('/raw/upload/', '/raw/upload/fl_attachment/');
    }
    return urlNormalitzada;
  }

  if (tipus === 'image' && url.includes('/raw/upload/')) {
    return url.replace('/raw/upload/', '/image/upload/');
  }

  return url;
};