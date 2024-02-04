import { useTheme } from "@/theme";
import { StatusBar, View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

export type HomeDrawerParamList = {
  MyRecipes: undefined;
  CookBooks: undefined;
  Planner: undefined;
  ShoppingList: undefined;
};
const Drawer = createDrawerNavigator<HomeDrawerParamList>();

import {
  HomeScreen,
  OptionsScreen,
  ShoppingListScreen,
  CookBooksScreen,
  AddRecipeScreen,
  PlannerScreen,
} from "../screens";
import { on } from "@nozbe/watermelondb/QueryDescription";

interface DrawerItemProps {
  label: string;
  icon?: { name: string; color: string; size: number };
  active: boolean;
  onPress: () => void;
}
function DrawerItem({ onPress, icon, label, active }: DrawerItemProps) {
  const { theme } = useTheme();
  return (
    <TouchableRipple
      onPress={onPress}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: active ? theme.colors.primary + "22" : "transparent",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <>
        <View style={{ width: 30, height: 30, justifyContent: "center", alignItems: "center" }}>
          {icon && <MaterialCommunityIcons name={icon.name} size={icon.size} color={theme.colors.primary} />}
        </View>
        <Text
          style={{
            marginLeft: 16,
            marginTop: 2,
            fontSize: 15,
            fontFamily: "Poppins_500Medium",
            color: active ? theme.colors.text.body : theme.colors.text.body + "BB",
          }}
        >
          {label}
        </Text>
      </>
    </TouchableRipple>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { navigation, state } = props;
  const activeRoute = state.routes[state.index].name;
  const { theme } = useTheme();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <View style={{ height: 70, backgroundColor: theme.colors.backgrounds.header, marginBottom: 8 }}></View>
      <View style={{ borderBottomColor: theme.colors.text.body + "33", borderBottomWidth: 1 }}>
        <DrawerItem
          label="My Recipes"
          active={activeRoute === "MyRecipes"}
          onPress={() => navigation.navigate("MyRecipes")}
          icon={{
            name: "chef-hat",
            color: theme.colors.primary,
            size: 24,
          }}
        />
        <DrawerItem
          label="Cook Books"
          active={activeRoute === "CookBooks"}
          onPress={() => navigation.navigate("CookBooks")}
          icon={{
            name: "book",
            color: theme.colors.primary,
            size: 22,
          }}
        />
        <DrawerItem
          label="Meal Planner"
          active={activeRoute === "Planner"}
          onPress={() => navigation.navigate("Planner")}
          icon={{
            name: "calendar",
            color: theme.colors.primary,
            size: 24,
          }}
        />
        <DrawerItem
          label="Shopping List"
          active={activeRoute === "ShoppingList"}
          onPress={() => navigation.navigate("ShoppingList")}
          icon={{
            name: "format-list-bulleted",
            color: theme.colors.primary,
            size: 24,
          }}
        />
      </View>
      <DrawerItem
        label="Settings"
        active={false}
        onPress={() => navigation.navigate("Settings")}
        icon={{
          name: "cog",
          color: theme.colors.primary,
          size: 24,
        }}
      />
    </DrawerContentScrollView>
  );
};
export default function HomeDrawer() {
  const { theme } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          marginTop: StatusBar.currentHeight,
          backgroundColor: theme.colors.backgrounds.baseline,
        },
        drawerItemStyle: {
          display: "flex",

          padding: 0,
          paddingVertical: 0,
          marginVertical: 0,
          margin: 0,
          height: "auto",
        },
        drawerLabelStyle: {
          fontFamily: "Poppins_500Medium",
          fontSize: 15,
          marginTop: 2,
          paddingVertical: 0,
        },
        drawerActiveBackgroundColor: "transparent",
        drawerContentContainerStyle: {
          paddingTop: 0,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text.body,
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
      <Drawer.Screen
        name="MyRecipes"
        component={HomeScreen}
        options={{
          drawerItemStyle: {
            padding: 0,
            paddingVertical: 0,
            marginVertical: 0,
            margin: 0,
            height: "auto",
          },

          headerTitle: "My Recipes",
        }}
      />
      <Drawer.Screen
        name="CookBooks"
        component={CookBooksScreen}
        options={{
          headerTitle: "Cook Books",
        }}
      />
      <Drawer.Screen
        name="Planner"
        component={PlannerScreen}
        options={{
          headerTitle: "Meal Planner",
        }}
      />
      <Drawer.Screen
        name="ShoppingList"
        component={ShoppingListScreen}
        options={{
          headerTitle: "Shopping List",
        }}
      />
    </Drawer.Navigator>
  );
}
