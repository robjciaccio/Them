import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { User } from '../../../types/UserTypes';
import LinearGradient from 'react-native-linear-gradient';
interface FlatListProps {
  item: User;
}

const UserRenderItem = ({
  image,
  age,
  profileName,
  navigation,
  id,
}: FlatListProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Profile', {
          image: image,
          age: age,
          profileName: profileName,
          id: id,
        })
      }>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 8 }}
        style={styles.backgroundImg}>
        <LinearGradient
          colors={['#00000000', '#00000000', '#000000']}
          style={{ height: '100%', width: '100%' }}>
          <View style={styles.infoBox}>
            <View style={null}>
              <Text style={styles.infoText}>{age}</Text>
            </View>
            <View style={null}>
              <Text style={styles.infoText}>{profileName}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 5,

    width: screenWidth * 0.33,
    height: screenWidth * 0.33,
    paddingHorizontal: 3,
    // borderRadius: 8,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 6,
    overflow: 'hidden',
  },
  infoBox: {
    marginLeft: 5,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    paddingTop: 10,
    // backgroundColor: 'rgba(69, 69, 69, 0.4)',
    // shadowOpacity: 0.5,
    // opacity: 0.5,
  },
  infoText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    // opacity: 1,
  },
});

export default UserRenderItem;
