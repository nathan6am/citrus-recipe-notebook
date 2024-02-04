import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Keyboard, ViewStyle, StyleProp } from "react-native";

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  hideWhenKeyboardHidden?: boolean;
}

const KeyboardAccessory = ({ children, hideWhenKeyboardHidden = true, style }: Props) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const onKeyboardDidShow = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height);
      setKeyboardVisible(true);
    });
    const onKeyboardDidHide = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
      setKeyboardVisible(false);
    });

    return () => {
      onKeyboardDidShow.remove();
      onKeyboardDidHide.remove();
    };
  }, []);

  return (
    <>
      {(keyboardVisible || !hideWhenKeyboardHidden) && (
        <View
          style={StyleSheet.compose(
            {
              // Initially position your accessory view offscreen or hidden
              position: "absolute",
              left: 0,
              right: 0,
              justifyContent: "space-between",
              flexDirection: "row",
              bottom: keyboardHeight,
            },
            style
          )}
        >
          {children}
        </View>
      )}
    </>
  );
};

export default KeyboardAccessory;
