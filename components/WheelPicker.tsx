import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withDecay,
  withTiming,
  scrollTo,
  useAnimatedRef,
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { FlatList, View, Text } from "react-native";
import React, { useEffect } from "react";
const zeroPad = (num: number, places: number) => String(num).padStart(places, "0");
const hours = Array.from({ length: 25 }).map((_, i) => zeroPad(i, 2));
const hoursCyclic = [...hours, ...hours, ...hours];
const ITEM_HEIGHT = 32;

export default function WheelPicker() {
  const pickerRef = useAnimatedRef<FlatList>();
  useEffect(() => {
    const initialOffset = ITEM_HEIGHT * 24;

    pickerRef.current?.scrollToOffset({ offset: initialOffset, animated: false });
  }, [pickerRef]);
  const scrollPosition = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollPosition.value = event.contentOffset.y;
    },
    onMomentumBegin: (event) => {
      const velocity = event.velocity?.y;
      if (velocity) {
        scrollPosition.value = withDecay({
          velocity,
          deceleration: 1,
        });
      }
    },
    onMomentumEnd: (event) => {
      const targetIndex = Math.round(scrollPosition.value / ITEM_HEIGHT);
      const targetOffset = targetIndex * ITEM_HEIGHT;
      console.log(scrollPosition.value);
      console.log(targetIndex, targetOffset);

      // scrollTo(pickerRef, 0, targetOffset, true);
      // console.log(pickerRef);
    },
  });
  return (
    <View style={{ height: ITEM_HEIGHT * 3 }}>
      <Animated.FlatList
        ref={pickerRef}
        data={hoursCyclic}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        snapToInterval={ITEM_HEIGHT}
        scrollEventThrottle={16}
        decelerationRate={0.95}
        renderItem={({ item, index }) => {
          return <Item label={item} offset={(index - 1) * ITEM_HEIGHT} scrollPosition={scrollPosition} />;
        }}
      ></Animated.FlatList>
    </View>
  );
}

function Item({
  label,
  offset,
  scrollPosition,
}: {
  label: string;
  offset: number;
  scrollPosition: SharedValue<number>;
}) {
  const style = useAnimatedStyle(() => {
    const inputRange = [offset - ITEM_HEIGHT, offset, offset + ITEM_HEIGHT];
    const opacity = interpolate(scrollPosition.value, inputRange, [0.5, 1, 0.5]);
    return {
      fontFamily: "Poppins_400Regular",
      fontSize: 18,
      opacity,
      color: "#fff",
    };
  });
  return (
    <View style={{ height: ITEM_HEIGHT, justifyContent: "center", alignItems: "center" }}>
      <Animated.Text style={style}>{label}</Animated.Text>
    </View>
  );
}
