import RecipeFormTabs from "./RecipeFormTabs";
import { useForm, FormProvider } from "react-hook-form";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();
interface FormValues {
  title: string;
  description?: string;
  servings: number;
  prepTime?: string;
  cookTime?: string;
  images: string[];
  ingredients: string[];
  steps: string[];
}

export default function RecipeForm() {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
      servings: 4,
      prepTime: "",
      cookTime: "",
      images: [],
      ingredients: [],
      steps: [],
    },
  });
  return (
    <FormProvider {...methods}>
      <Stack.Navigator>
        <Stack.Screen
          name="RecipeFormTabs"
          component={RecipeFormTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Ingredient"
          component={View}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </FormProvider>
  );
}
