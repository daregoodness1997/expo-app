import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const EmojiSticker = ({ imageSize, stickerSource }) => {
  return (
    <View style={styles.stickerContainer}>
      <Image
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
