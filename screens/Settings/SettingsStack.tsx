import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useTheme } from "@/theme";
import Settings from "./Settings";
export type SettingsStackParamList = {
  "Settings Menu": undefined;
};
const Stack = createStackNavigator();

export default function SettingsStack() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.backgrounds.header,
        },
        headerTintColor: theme.colors.text.header,
        headerShadowVisible: theme.key === "light" ? true : false,
        headerTitleStyle: {
          fontFamily: "Poppins_500Medium",
          marginTop: 4,
        },
      }}
    >
      <Stack.Screen
        name="SettingsHome"
        component={Settings}
        options={{
          headerTitle: "Settings",
        }}
      />
    </Stack.Navigator>
  );
}
