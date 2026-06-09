export const EXTENSIONS_IMATGE = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'heic'];
export const EXTENSIONS_DOCUMENT_VISUALITZABLE = ['pdf'];

export const obtenirExtensioFitxer = (fileName = '', url = '') => {
  const origen = fileName || url || '';
  const senseQuery = origen.split('?')[0].split('#')[0];
  const ultimSegment = senseQuery.split('/').pop() || '';
  return ultimSegment.includes('.') ? ultimSegment.split('.').pop()?.toLowerCase() || '' : '';
};

export const obtenirTipusRecursCloudinary = (fileName = '', url = '') => {
  const ext = obtenirExtensioFitxer(fileName, url);
  return EXTENSIONS_IMATGE.includes(ext) ? 'image' : 'raw';
};

const eliminarFlagAttachment = (url = '') => {
  return url
    .replace('/raw/upload/fl_attachment/', '/raw/upload/')
    .replace('/raw/upload/fl_attachment:false/', '/raw/upload/')
    .replace('/image/upload/fl_attachment/', '/image/upload/')
    .replace('/image/upload/fl_attachment:false/', '/image/upload/');
};

const afegirFlagAttachment = (url = '') => {
  if (url.includes('/raw/upload/fl_attachment/') || url.includes('/image/upload/fl_attachment/')) {
    return url;
  }

  if (url.includes('/raw/upload/')) {
    return url.replace('/raw/upload/', '/raw/upload/fl_attachment/');
  }

  if (url.includes('/image/upload/')) {
    return url.replace('/image/upload/', '/image/upload/fl_attachment/');
  }

  return url;
};

/**
 * Normalitza una URL de Cloudinary sense canviar a cegues el resource_type.
 *
 * IMPORTANT:
 * - Per visualitzar/revisar fitxers, especialment PDFs, NO afegim fl_attachment.
 * - Per descarregar fitxers, sí que afegim fl_attachment.
 * - No convertim automàticament /image/upload/ a /raw/upload/ perquè Cloudinary
 *   pot haver desat PDFs o documents amb un resource_type concret, i canviar-lo
 *   pot provocar errors 404 o chrome-error://chromewebdata.
 */
export const normalitzarUrlCloudinary = (url, fileName = '', mode = 'view') => {
  if (!url || typeof url !== 'string') return '';

  const urlNeta = url.trim();

  if (mode === 'download') {
    return afegirFlagAttachment(urlNeta);
  }

  return eliminarFlagAttachment(urlNeta);
};

export const obtenirUrlVisualitzacioCloudinary = (url, fileName = '') => {
  return normalitzarUrlCloudinary(url, fileName, 'view');
};

export const obtenirUrlDescarregaCloudinary = (url, fileName = '') => {
  return normalitzarUrlCloudinary(url, fileName, 'download');
};

/**
 * Obre un recurs de Cloudinary de manera segura des d'un clic d'usuari.
 * Ús recomanat per al botó "Revisar" o "Veure arxiu".
 */
export const obrirRecursCloudinary = (url, fileName = '') => {
  const urlFinal = obtenirUrlVisualitzacioCloudinary(url, fileName);
  if (!urlFinal) return;

  const novaFinestra = window.open('', '_blank', 'noopener,noreferrer');

  if (novaFinestra) {
    novaFinestra.opener = null;
    novaFinestra.location.href = urlFinal;
    return;
  }

  window.location.href = urlFinal;
};