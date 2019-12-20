export const addElementIntoArray = (array, element) => array.concat([element]);

export const removeElementFromArray = (array, value, key = "id") => array.filter(
  (element) => element[key] !== value,
);
