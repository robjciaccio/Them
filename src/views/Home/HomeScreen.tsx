import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, View, Text, FlatList, Button } from 'react-native';
import UserRenderItem from './UserRenderItem/UserRenderItem';
import { Context } from '../../../Context';

import { ContextType } from '../../types/UserTypes';

const HomeScreen = () => {
  const { getLocalusers, localUsers } = useContext(Context);

  useEffect(() => {
    getLocalusers();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'row', backgroundColor: 'purple' }}>
      <View>
        <FlatList
          data={localUsers}
          renderItem={UserRenderItem}
          numColumns={3}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
