import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import MessagePreviewBox from './MessagePreviewBox/MessagePreviewBox';
import {RootStackParamList} from '../../types/NavigationTypes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

const MessagesScreen = ({navigation, route}: Props) => {
  return (
    <ScrollView>
      <MessagePreviewBox navigation={navigation} route={route} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MessageBoxContainer: {},
});

export default MessagesScreen;
