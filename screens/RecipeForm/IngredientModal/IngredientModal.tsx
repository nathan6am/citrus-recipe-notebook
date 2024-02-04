import { View, Text, Modal } from "react-native";
import { useFormContext } from "react-hook-form";
import { useTheme } from "@/theme";
import React from "react";
import Container from "@/components/Container";

export default function IngredientModal() {
  const { theme } = useTheme();
  return (
    <Container>
      <Text style={{ color: "#fff" }}>Ingredient Modal</Text>
    </Container>
  );
}
