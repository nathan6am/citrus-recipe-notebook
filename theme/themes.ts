import colors from "./colors";

export const lightTheme = {
  key: "light",
  fonts: {
    body: "Poppins_400Regular",
    header: "Poppins_500Medium",
  },
  colors: {
    text: {
      header: colors.primary[50],
      body: colors.text.darkPrimary,
      onPrimary: colors.primary[50],
      onSecondary: colors.whites.bg,
      placeholder: colors.text.darkPrimary + "66",
      label: colors.text.darkPrimary,
      subLabel: colors.text.darkPrimary + "66",
    },
    backgrounds: {
      baseline: colors.whites.bg,
      header: colors.primary[700],
      card: colors.whites.card,
      bottomNav: colors.primary[700],
    },
    icons: {
      bottomNavActive: colors.primary[50],
      bottomNavInactive: "#75aa9a",
    },
    primary: colors.primary[700],
    secondary: colors.secondary[700],
    shadow: colors.elevationsDark["00dp"],
    error: "#b00020",
  },
};

export const darkTheme = {
  key: "dark",
  fonts: {
    body: "Poppins_400Regular",
    header: "Poppins_500Medium",
  },
  colors: {
    text: {
      header: colors.primary[200],
      body: colors.primary[100],
      bodyLight: colors.primary[100] + "66",
      onPrimary: colors.text.darkPrimary,
      onSecondary: colors.text.darkSecondary,
      placeholder: colors.primary[100] + "66",
      label: colors.text.lightPrimary,
      subLabel: colors.text.lightPrimary + "66",
    },
    backgrounds: {
      baseline: colors.elevationsDark["00dp"],
      header: colors.elevationsDark["08dp"],
      card: colors.elevationsDark["04dp"],
      bottomNav: colors.elevationsDark["12dp"],
    },
    icons: {
      bottomNavActive: colors.primary[100],
      bottomNavInactive: colors.primary[50] + "54",
    },
    primary: colors.primary[300],
    secondary: colors.secondary[300],
    shadow: "transparent",
    error: "#cf6679",
  },
};

export type ThemeType = typeof lightTheme;
