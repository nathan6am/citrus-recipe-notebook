import { createStackNavigator } from "@react-navigation/stack";
import RecipeDetails from "../screens/RecipeDetails";
import BottomTabs from "./BottomTabs";
import AddRecipeScreen from "@/screens/RecipeForm/RecipeForm";
import HomeDrawer, { HomeDrawerParamList } from "./HomeDrawer";
import SettingsStack, { SettingsStackParamList } from "@/screens/Settings/SettingsStack";
import { useTheme } from "@/theme";
import { NavigatorScreenParams } from "@react-navigation/native";

export type BaseStackParamList = {
  Home: undefined;
  NewRecipe: undefined;
  Settings: NavigatorScreenParams<SettingsStackParamList>;
  RecipeDetails: { recipeId: string };
  EditRecipe: { recipeId: string };
};
const Stack = createStackNavigator<BaseStackParamList>();

export default function BaseStack() {
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
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeDrawer}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerTitle: "Settings",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="NewRecipe"
        component={AddRecipeScreen}
        options={{
          headerTitle: "New Recipe",
          presentation: "modal",
        }}
      />
      <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
    </Stack.Navigator>
  );
}
