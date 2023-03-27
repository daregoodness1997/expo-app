import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const EmojiSticker = ({ imageSize, stickerSource }) => {
  const scaleImage = useSharedValue(imageSize);

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value) {
        scaleImage.value = scaleImage.value * 2;
      }
    },
  });
  return (
    <View style={styles.stickerContainer}>
      <AnimatedImage
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
        resizeMode='contain'
      />
    </View>
  );
};

export default EmojiSticker;

const styles = StyleSheet.create({
  stickerContainer: {
    top: -350,
  },
});
