// Check current preference
const getBrowserTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? {
          background: "#202124",
          text: "#fcf8f8",
          grayBg: "#55555A",
          greyText: "#ECECEC",
        } // dark bg, light text
      : {
          background: "#FFFFFF",
          text: "#25100e",
          grayBg: "#ECECEC",
          greyText: "#55555A",
        }; // light bg, dark text
  }
  return {
    background: "#FFFFFF",
    text: "#25100e",
    grayBg: "#ECECEC",
    greyText: "#55555A",
  }; // fallback
};

const browserTheme = getBrowserTheme();

export const themes = {
  dashboard: {
    primary: "#0E6BA8",
    secondary: "#CE8380",
    background: browserTheme.background,
    text: browserTheme.text,
    grayBg: browserTheme.grayBg,
    greyText: browserTheme.greyText,
  },

  // ONE template theme for ALL templates
  template: {
    primary: "var(--primary)",
    background: "var(--background)",
    text: "var(--text)",
  },
};

export const useTheme = (type = "dashboard", customColors = null) => {
  if (type === "template" && customColors) {
    return customColors;
  }
  return themes[type];
};
