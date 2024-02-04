import { useTheme } from "@/theme";
import { StyleSheet } from "react-native";
import { View, Text, TextInput, StyleProp, TextStyle } from "react-native";
import React, { useState } from "react";
interface Props extends React.ComponentProps<typeof TextInput> {
  label: string;
  disabled?: boolean;
  error?: string;
  showErrorMessage?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
}

const Input = React.forwardRef<TextInput, Props>(
  (
    { onBlur, onFocus, inputStyle, labelStyle, containerStyle, error, showErrorMessage = true, ...props }: Props,
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const { theme } = useTheme();
    const styles = StyleSheet.create({
      container: {
        marginVertical: 10,
        width: "100%",
      },
      label: {
        fontFamily: "Poppins_500Medium",
        fontSize: 15,
        color: focused ? theme.colors.primary : theme.colors.text.label,
        marginBottom: -8,
      },
      input: {
        fontFamily: "Poppins_400Regular",
        fontSize: 15,
        padding: 6,
        paddingLeft: 0,
        paddingTop: 10,
        borderBottomColor: focused ? theme.colors.primary : error ? theme.colors.error : theme.colors.text.body + "66",
        borderBottomWidth: 2,
        color: theme.colors.text.body,
        textAlignVertical: props.multiline ? "top" : "center",
      },
      error: {
        fontFamily: "Poppins_400Regular",
        fontSize: 13,
        color: theme.colors.error,
      },
    });

    return (
      <View style={StyleSheet.compose(styles.container, containerStyle)}>
        <Text style={StyleSheet.compose(styles.label, labelStyle)}>{props.label}</Text>
        <TextInput
          {...props}
          cursorColor={theme.colors.primary}
          placeholderTextColor={theme.colors.text.placeholder}
          style={StyleSheet.compose(styles.input, inputStyle || {})}
          onFocus={(e) => {
            setFocused(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            if (onBlur) onBlur(e);
          }}
        />
        {showErrorMessage && error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  }
);

export default Input;
