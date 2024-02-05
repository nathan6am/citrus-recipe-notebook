import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BaseStack from "./navigators/BaseStack";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useContext, createContext, useState } from "react";
import { defaultSettings, SettingsContext } from "@/context/SettingsContext";
import { ThemeContext } from "./theme";
import { darkTheme, lightTheme } from "./theme/themes";
import { SafeAreaView } from "react-native";
import type { BaseStackParamList } from "./navigators/BaseStack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BaseStackParamList {}
  }
}

export default function App() {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings: (updates) => {
          setSettings((prev) => ({ ...prev, ...updates }));
        },
      }}
    >
      <ThemeContext.Provider value={{ theme: settings.darkMode ? darkTheme : lightTheme }}>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer
            theme={{
              dark: settings.darkMode,
              colors: {
                primary: settings.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary,
                background: settings.darkMode
                  ? darkTheme.colors.backgrounds.baseline
                  : lightTheme.colors.backgrounds.baseline,
                card: settings.darkMode
                  ? darkTheme.colors.backgrounds.card
                  : lightTheme.colors.backgrounds.card,
                text: settings.darkMode ? darkTheme.colors.text.body : lightTheme.colors.text.body,
                border: settings.darkMode
                  ? darkTheme.colors.text.onPrimary
                  : lightTheme.colors.text.onPrimary,
                notification: settings.darkMode
                  ? darkTheme.colors.secondary
                  : lightTheme.colors.secondary,
              },
            }}
          >
            <BaseStack />
          </NavigationContainer>
        </SafeAreaView>
      </ThemeContext.Provider>
    </SettingsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
