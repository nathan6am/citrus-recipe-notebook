import KeyboardAvoidingContainer from "@/components/KeyboardAvoidingScrollView";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "@/components/TextInput";
import Container from "@/components/Container";
import { KeyboardAvoiderProvider } from "@good-react-native/keyboard-avoider";
import NumericInput from "@/components/NumericInput";
import WheelPicker from "@/components/WheelPicker";
import { View, KeyboardAvoidingView, Platform } from "react-native";
const items = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
];
export default function DetailsForm() {
  const { control, formState } = useFormContext();
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoiderProvider>
        <KeyboardAvoidingContainer style={{ paddingHorizontal: 20, padding: 12 }}>
          <>
            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Title"
                  placeholder="What's the name of your delicious dish?"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={(formState.errors.title?.message as string) || undefined}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Description"
                  onBlur={onBlur}
                  placeholder="Be a food poet – describe your culinary masterpiece (optional) "
                  onChangeText={onChange}
                  value={value}
                  multiline
                  numberOfLines={5}
                  error={(formState.errors.description?.message as string) || undefined}
                />
              )}
            />
            <Controller
              control={control}
              name="servings"
              render={({ field: { onChange, onBlur, value } }) => (
                <NumericInput
                  label="Servings"
                  onBlur={onBlur}
                  onChange={onChange}
                  numericValue={value}
                  onValueChange={onChange}
                  editable={false}
                />
              )}
            />

            <View style={{ flexDirection: "row", width: "100%", marginTop: 8 }}>
              <View style={{ flex: 1, marginRight: 10 }}>
                <Controller
                  control={control}
                  name="prepTime"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      label="Prep Time"
                      onBlur={onBlur}
                      placeholder=" "
                      onChangeText={onChange}
                      value={value}
                      error={(formState.errors.prepTime?.message as string) || undefined}
                    />
                  )}
                />
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Controller
                  control={control}
                  name="cookTime"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      label="Cook Time"
                      onBlur={onBlur}
                      placeholder=" "
                      onChangeText={onChange}
                      value={value}
                      error={(formState.errors.cookTime?.message as string) || undefined}
                    />
                  )}
                />
              </View>
            </View>
          </>
        </KeyboardAvoidingContainer>
      </KeyboardAvoiderProvider>
    </View>
  );
}
