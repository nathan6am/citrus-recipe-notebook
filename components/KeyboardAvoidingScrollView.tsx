import { KeyboardAvoiderScrollView } from "@good-react-native/keyboard-avoider";
import { useTheme } from "@/theme";
import { StyleSheet, StyleProp, ViewStyle, TouchableWithoutFeedback, Keyboard } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}
export default function KeyboardAvoidingContainer({ children, style }: Props) {
  const { theme } = useTheme();
  return (
    <KeyboardAvoiderScrollView
      contentContainerStyle={StyleSheet.compose(
        {
          flexGrow: 1,
          backgroundColor: theme.colors.backgrounds.baseline,
        },
        style
      )}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
    </KeyboardAvoiderScrollView>
  );
}
