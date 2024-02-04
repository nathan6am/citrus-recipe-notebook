import { View, Text, Pressable, StyleSheet } from "react-native";
import { useTheme } from "@/theme";
import React from "react";

interface GroupButtonProps {
  selected: boolean;
  onPress: () => void;
  showBorder: boolean;
  children?: React.ReactNode;
}
const GroupButton = ({ onPress, selected, showBorder, children }: GroupButtonProps) => {
  const { theme } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 4,
        backgroundColor: selected ? theme.colors.primary : theme.colors.backgrounds.card,
        borderRightWidth: showBorder ? 1 : 0,
        borderRightColor: showBorder ? theme.colors.primary : "transparent",
      }}
    >
      {children || null}
    </Pressable>
  );
};

interface Props {
  options: Array<{
    label: string;
    value: string;
  }>;
  selected: string;
  onChange: (value: string) => void;
}
export default function ButtonGroup({ options, selected, onChange }: Props) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        borderRadius: 6,
        overflow: "hidden",
        padding: 0,
        flexDirection: "row",
        backgroundColor: theme.colors.backgrounds.baseline,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        shadowColor: theme.colors.shadow,
        elevation: theme.key === "dark" ? 0 : 4,
        marginBottom: 20,
      }}
    >
      {options.map((option, idx) => (
        <GroupButton
          key={option.value}
          selected={option.value === selected}
          onPress={() => onChange(option.value)}
          showBorder={idx < options.length - 1}
        >
          <Text
            style={{
              marginTop: 2,
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: option.value === selected ? theme.colors.text.onPrimary : theme.colors.primary,
            }}
          >
            {option.label}
          </Text>
        </GroupButton>
      ))}
    </View>
  );
}
