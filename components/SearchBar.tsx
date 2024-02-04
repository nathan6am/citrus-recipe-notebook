import { styled } from "styled-components/native";
import { TextInput } from "react-native";
import { useTheme } from "@/theme";
import colors from "@/theme/colors";
export default function SearchBar() {
  const { theme } = useTheme();

  return (
    <TextInput
      placeholder="Search Recipes"
      placeholderTextColor={theme.colors.text.placeholder}
      cursorColor={theme.colors.primary}
      style={{
        color: theme.colors.text.body,
        padding: 6,
        paddingTop: 10,
        paddingLeft: 18,
        borderRadius: 8,
        margin: 10,
        fontSize: 15,
        fontFamily: "Poppins_400Regular",
        backgroundColor: theme.key === "dark" ? colors.elevationsDark["04dp"] : "#f0eae2",
        borderColor: theme.colors.primary + "33",
        borderWidth: theme.key === "dark" ? 1 : 0,
        elevation: 0,
        flex: 1,
      }}
    />
  );
}
