import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import MessageBox from './MessageBox/MessagePreviewBox';

const MessagesScreen = () => {
  return (
    <ScrollView>
      <MessageBox />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MessageBoxContainer: {},
});

export default MessagesScreen;
