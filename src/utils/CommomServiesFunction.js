export const COMMON_SERVICE = {
  formatText(text) {
    if (!text) return "";

    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  },
};
