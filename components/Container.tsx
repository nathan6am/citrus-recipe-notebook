import { View } from "react-native";
import { useTheme } from "@/theme";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
export default function Container({ children, style }: Props) {
  const { theme } = useTheme();
  return (
    <View
      style={StyleSheet.compose(
        {
          flex: 1,
          backgroundColor: theme.colors.backgrounds.baseline,
        },
        style
      )}
    >
      {children}
    </View>
  );
}
