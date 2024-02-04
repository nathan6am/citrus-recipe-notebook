import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import React, { useState } from "react";
import { useTheme } from "@/theme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { on } from "@nozbe/watermelondb/QueryDescription";

interface Props extends React.ComponentProps<typeof TextInput> {
  label?: string;
  numericValue: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  stepMap?: number[];
}

export default function NumericInput({ numericValue, min = 0, max = 99, step, onValueChange, label, ...props }: Props) {
  const [focused, setFocused] = useState(false);
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: label ? "space-between" : "flex-start",
    },
    label: {
      fontFamily: "Poppins_500Medium",
      fontSize: 15,
      color: theme.colors.text.label,
      marginTop: -2,
    },
    input: {
      fontFamily: "Poppins_500Medium",
      fontSize: 15,
      padding: 6,

      paddingTop: 10,

      color: theme.colors.text.label,
      textAlign: "center",
      marginHorizontal: 10,
    },
    error: {
      fontFamily: "Poppins_400Regular",
      fontSize: 13,
      color: theme.colors.error,
    },
  });

  const onIncrement = () => {
    const newValue = numericValue + (step || 1);
    if (newValue > max) {
      onValueChange(max);
      return;
    }
    onValueChange(newValue);
  };

  const onDecrement = () => {
    const newValue = numericValue - (step || 1);
    if (newValue < min) {
      onValueChange(min);
      return;
    }
    onValueChange(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          onPress={onDecrement}
          color={theme.colors.secondary}
          radius={"lg"}
          size="md"
          icon={<MaterialCommunityIcons name="minus" size={18} color={theme.colors.text.onSecondary} />}
        />
        <TextInput
          {...props}
          style={styles.input}
          keyboardType="numeric"
          value={`${numericValue}`}
          onChange={(e) => {
            const text = e.nativeEvent.text;
            if (text === "") {
              onValueChange(0);
              return;
            }
            const num = parseInt(text);
            if (isNaN(num)) {
              onValueChange(0);
              return;
            }
            if (num < min) {
              onValueChange(min);
              return;
            }
            if (num > max) {
              onValueChange(max);
              return;
            }
            onValueChange(num);
          }}
        />
        <Button
          onPress={onIncrement}
          color={theme.colors.secondary}
          size="md"
          radius={"lg"}
          icon={<MaterialCommunityIcons name="plus" size={18} color={theme.colors.text.onSecondary} />}
        />
      </View>
    </View>
  );
}
