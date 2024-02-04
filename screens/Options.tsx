import { View, Text } from "react-native";
import React from "react";
import ButtonGroup from "../components/ButtonGroup";
const unitOptions = [
  { label: "Imperial", value: "imperial" },
  { label: "Metric", value: "metric" },
  { label: "From Recipe", value: "original" },
];
export default function Options() {
  const [unit, setUnit] = React.useState("imperial");
  return (
    <View>
      <Text>Options</Text>
      <ButtonGroup
        options={unitOptions}
        selected={unit}
        onChange={(value) => {
          setUnit(value);
        }}
      />
    </View>
  );
}
