import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { useTheme } from "@/theme";
import { SettingsContext } from "@/context/SettingsContext";
import { useContext } from "react";
import { set } from "react-hook-form";
import Toggle from "@/components/Toggle";
function SettingsLabel({ label }: { label: string }) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        color: theme.colors.text.label,
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Poppins_500Medium",
      }}
    >
      {label}
    </Text>
  );
}

function SettingsDescription({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  return (
    <Text
      style={{
        color: theme.colors.text.body + "66",
        fontSize: 15,

        fontFamily: "Poppins_400Regular",
      }}
    >
      {children}
    </Text>
  );
}

export default function Settings() {
  const { theme } = useTheme();
  const { settings, updateSettings } = useContext(SettingsContext);
  const styles = StyleSheet.create({
    settingsItem: {
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
  return (
    <View>
      <View style={styles.settingsItem}>
        <View>
          <SettingsLabel label="Dark Theme" />
          <SettingsDescription>{settings.darkMode ? "Enabled" : "Disabled"}</SettingsDescription>
        </View>
        <Toggle
          value={settings.darkMode}
          onValueChange={(value) => updateSettings({ darkMode: value })}
        />
      </View>
    </View>
  );
}
