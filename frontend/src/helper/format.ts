export const removeEmptyObj = (obj: {} | any) => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const value = obj[key];
    if (value === null || value === undefined || value === "") {
      delete obj[key];
    }
  }
  return obj;
};
