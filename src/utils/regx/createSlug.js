const createSlug = (text) => {
  return text.trim().toLowerCase().replace(/\s+/g, "-");
};

export default createSlug;
