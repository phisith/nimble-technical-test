export const formatKeyWord = (keyword: string) => {
  return keyword.replace(" ", "+");
};

export const formatKeywordsSearch = (keyword: {}) => {
  for (const key in keyword) {
    if (key === "adWords" || key === "totalLink" || key === "result") {
      keyword[key] = Number(keyword[key]) | 0;
    }
  }
  return keyword;
};
