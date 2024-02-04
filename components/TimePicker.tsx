import React, { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedGestureHandler,
  withDecay,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { View, Text } from "react-native";

interface Props {
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
}
export default function TimePicker() {
  const selectedHours = useState(0);
  const selectedMinutes = useState(0);

  return (
    <View>
      <Text>TimePicker</Text>
    </View>
  );
}
