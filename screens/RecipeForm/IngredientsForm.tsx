import { View, Text } from "react-native";
import React from "react";
import Container from "@/components/Container";
import IngredientModal from "./IngredientModal/IngredientModal";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/base";
export default function IngredientsForm() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.navigate("Add Ingredient")}>Add Ingredient</Button>
      <Text>IngredientsForm</Text>
    </Container>
  );
}
