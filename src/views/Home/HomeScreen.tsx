import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
  Button,
} from 'react-native';

import { Context } from '../../../Context';
import { User } from '../../types/UserTypes';
import LinearGradient from 'react-native-linear-gradient';
import UserRenderItem from './UserRenderItem/UserRenderItem';
import { ContextType } from '../../types/UserTypes';

interface FlatListProps {
  item: User;
}

const HomeScreen = ({ navigation }) => {
  const { getLocalusers, localUsers } = useContext(Context);

  useEffect(() => {
    getLocalusers();
  }, []);

  const onViewableItemsChanged = ({ viewableItems }) => {
    console.log(viewableItems);
  };

  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }]);

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'row', backgroundColor: 'purple' }}>
      <View>
        <FlatList
          // contentContainerStyle
          data={localUsers}
          // viewabilityConfigCallbackPairs={
          //   viewabilityConfigCallbackPairs.current
          // }
          renderItem={({ item }) => (
            <UserRenderItem
              image={item.image}
              id={item.id}
              age={item.age}
              profileName={item.profileName}
              navigation={navigation}
            />
          )}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 5,

    width: screenWidth * 0.31,
    height: screenWidth * 0.31,
    marginHorizontal: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
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

export default HomeScreen;
