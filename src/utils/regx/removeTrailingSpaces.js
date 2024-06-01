export default removeTrailingSpaces = (text) => {
  return text.trim().replace(/\s+/g, "");
};
