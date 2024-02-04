import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@/theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();
import {
  HomeScreen,
  OptionsScreen,
  ShoppingListScreen,
  CookBooksScreen,
  AddRecipeScreen,
  PlannerScreen,
} from "../screens";
import SettingsStack from "@/screens/Settings/SettingsStack";
export default function BottomTabs() {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.icons.bottomNavActive,
        tabBarInactiveTintColor: theme.colors.icons.bottomNavInactive,
        tabBarStyle: {
          backgroundColor: theme.colors.backgrounds.bottomNav,
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: theme.colors.backgrounds.header,
        },
        headerTintColor: theme.colors.text.header,
        headerShadowVisible: false,
        headerTitleStyle: {
          fontFamily: "Poppins_500Medium",
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "My Recipes",

          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Cook Books"
        component={CookBooksScreen}
        options={{
          headerTitle: "Cook Books",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="book" color={color} size={22} />,
        }}
      />
      <Tab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{
          headerTitle: "Meal Planner",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="calendar" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Shopping List"
        component={ShoppingListScreen}
        options={{
          headerTitle: "Shopping List",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          headerShown: false,
          headerTitle: "Settings",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="cog" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
