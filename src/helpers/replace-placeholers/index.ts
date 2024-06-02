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
 * Replace placeholder in object with flatter replacements
 * @param value 
 * @param replacements 
 * @returns 
 */
export const replacePlaceholdersInStringWithFlatten = (value: string, replacements: unknown) => {
  const flattenVariables = (obj: any, prefix = ''): Record<string, unknown> => {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? `${prefix}.` : '';
      if (typeof obj[k] === 'object' && obj[k] !== null) {
        Object.assign(acc, flattenVariables(obj[k] as Record<string, unknown>, `${pre}${k}`));
      } else {
        acc[`${pre}${k}`] = obj[k];
      }
      return acc;
    }, {} as Record<string, unknown>);
  };

  if (replacements) {
    const flatVariables = flattenVariables(replacements);
    Object.keys(flatVariables).forEach((variable) => {
      const regex = new RegExp(`{{${variable}}}`, 'g');
      value = value.replace(regex, String(flatVariables[variable]));
    });
  }

  return value;
}

/**
 * Replace placeholder in the string
 */
export const replacePlaceholdersInString = (value: string, replacements: unknown) => {
  return value.replace(/{{(.*?)}}/g, (_, key) => replacements[key] ?? _);
}