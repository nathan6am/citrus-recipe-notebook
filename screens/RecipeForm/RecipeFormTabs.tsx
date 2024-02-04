import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useTheme } from "@/theme";
const Tab = createMaterialTopTabNavigator();

import DetailsForm from "./DetailsForm";
import IngredientsForm from "./IngredientsForm";
import StepsForm from "./StepsForm";
export default function RecipeFormTabs() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "Poppins_500Medium",
          fontSize: 14,
          textTransform: "capitalize",
        },
        tabBarActiveTintColor: theme.colors.text.body,
        tabBarInactiveTintColor: theme.colors.text.body + "66",
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
          height: 3,
        },
        tabBarItemStyle: {
          paddingBottom: 6,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.backgrounds.card,
        },
      }}
    >
      <Tab.Screen name="Details" component={DetailsForm} />
      <Tab.Screen name="Ingredients" component={IngredientsForm} />
      <Tab.Screen name="Steps" component={StepsForm} />
    </Tab.Navigator>
  );
}
