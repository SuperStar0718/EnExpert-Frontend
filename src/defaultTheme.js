export const theme = {
  light: {
    background: "#FFFFFF",
    lightBackground: "#FFFFFF",
    text: "#171725",
    text2: "#131523",
    text3: "#5A607F",
    primary: "#37A1DB",
    primaryText: "#025699b8",
    secondary: "#D7DBEC",
    secondary2: "#f5f6fa",
    secondaryText: "#7E84A3",
    divider: "#edf1f4",
    green: "#46C782",
    yellow: "#DBD621",
    orange: "#E58448",
    red: "#DB4D56",
  },
  dark: {
    background: "#191919",
    lightBackground: "#232323",
    // text: "#e4e6eb",
    text: "#FFFFFF",
    primaryText: "#FFFFFF",
    secondaryText: "#ABAAAA",
    // section: "#424242",
    // navLink: "#b0b3b8",
    // listHover: "rgba(255, 255, 255, 0.08)",
    divider: "#575858",
    // inputBorder: "#575858",
  },
  colors: {
    "primary-color": "#0078d9cf",
    "secondary-color": "#D34848",
    // "text-color-secondary": "fade(@black, 45%)",
    // "text-color": "#000",
    // "box-shadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    "box-shadow": "0px 2px 18px rgba(0, 0, 0, 0.41)",
    // "menu-bg-color": "#e9c46a",
    // "body-bg-color": "#fff",
    // "sidebar-bg-color": "#2a9d8f",
    // "header-color": "#2a9d8f",
    // "@layout-trigger-background": "#E76E2D",
    // "@layout-header-background": "#8a421b",
    // "box-shadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
};

export const switchTheme = (mode = "light") => {
  let themeColors = theme.colors;
  let themeMode = { ...theme[mode], ...themeColors };
  Object.keys(themeMode).forEach((key) => {
    document.body.style.setProperty(`--${key}`, themeMode[key]);
  });
  const newTheme = { mode: mode, colors: themeColors };
  localStorage.setItem("themeConfig", JSON.stringify(newTheme));
  return newTheme;
};
