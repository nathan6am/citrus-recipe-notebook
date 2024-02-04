import { View, Text } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { SpeedDial } from "@rneui/themed";
import { useTheme } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "@/components/SearchBar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Input from "@/components/TextInput";
export default function Home() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: theme.colors.backgrounds.card,
          elevation: 1,
        }}
      >
        <SearchBar />
        <MaterialCommunityIcons name="tune" size={30} color={theme.colors.secondary} style={{ marginRight: 8 }} />
      </View>
      <View style={{ padding: 15 }}>
        <Input label="Name" placeholder="Name" />
        <Input label="Input Label" error={"This is an error message"} placeholder="Placeholder" />
      </View>
      <SpeedDial
        isOpen={false}
        icon={{ name: "edit", color: theme.colors.text.onSecondary }}
        openIcon={{ name: "close", color: theme.colors.text.onSecondary }}
        onOpen={() => navigation.navigate("NewRecipe")}
        onClose={() => {}}
        overlayColor="transparent"
        color={theme.colors.secondary}
      ></SpeedDial>
    </Container>
  );
}
