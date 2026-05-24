export const EXTENSIONS_IMATGE = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg', 'heic'];

export const obtenirTipusRecursCloudinary = (fileName) => {
  const ext = (fileName || '').split('.').pop()?.toLowerCase() || '';
  return EXTENSIONS_IMATGE.includes(ext) ? 'image' : 'raw';
};

export const normalitzarUrlCloudinary = (url, fileName = '') => {
  if (!url || typeof url !== 'string') return '';
  const tipus = obtenirTipusRecursCloudinary(fileName);
  if (tipus === 'raw' && url.includes('/image/upload/')) {
    return url.replace('/image/upload/', '/raw/upload/');
  }
  if (tipus === 'image' && url.includes('/raw/upload/')) {
    return url.replace('/raw/upload/', '/image/upload/');
  }
  return url;
};
