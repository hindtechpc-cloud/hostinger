/**
 * Converts a string to a URL-friendly slug
 * @param {string} text - The text to convert to slug
 * @returns {string} - The slugified string
 */
export const slugify = (text) => {
  if (!text) return '';
  
  return text
    .toString()
    .toLowerCase()
    .trim
}