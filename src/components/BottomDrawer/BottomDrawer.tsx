import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from '@gorhom/bottom-sheet'

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: height,
          backgroundColor: '#fff',
          borderRadius: 25,
          position: 'absolute',
          bottom: -height + 30,
        },
      ]}>
      {horizontalLine()}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  horizontalLine: {
    margin: '25 0 15 0',
    height: 1,
    width: '100%',
    backgroundColor: '#D3D3D3',
  },
});

export default BottomDrawer;
