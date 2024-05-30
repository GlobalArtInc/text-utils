type Replacements = { [key: string]: string | number };

/**
 * Replace placeholder in object
 * @param obj 
 * @param replacements 
 * @returns 
 */
export const replacePlaceholdersInObject = (obj: unknown, replacements: unknown) => {
  if (typeof obj === 'string') {
    const val = obj.replace(/{{(.*?)}}/g, (_, key) => replacements[key] ?? _);
    
    return !isNaN(parseFloat(val)) ? Number(val) : val;      
  }
  if (obj && typeof obj === 'object') {
    Object.entries(obj).forEach(([key, value]) => {
      obj[key] = replacePlaceholdersInObject(value, replacements);
    });
  }

  return obj;
}

/**
 * Replace placeholder in the string
 */
export const replacePlaceholdersInString = (value: string, replacements: unknown) => {
  return value.replace(/{{(.*?)}}/g, (_, key) => replacements[key] ?? _);
}