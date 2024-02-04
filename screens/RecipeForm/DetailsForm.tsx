import KeyboardAvoidingContainer from "@/components/KeyboardAvoidingScrollView";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Input from "@/components/TextInput";
import Container from "@/components/Container";
import { KeyboardAvoiderProvider } from "@good-react-native/keyboard-avoider";
import NumericInput from "@/components/NumericInput";
import WheelPicker from "@/components/WheelPicker";
import { View, KeyboardAvoidingView, Platform } from "react-native";
const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
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
                  error={(formState.errors.title?.message as string) || undefined}
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
            <WheelPicker />
          </>
        </KeyboardAvoidingContainer>
      </KeyboardAvoiderProvider>
    </View>
  );
}
