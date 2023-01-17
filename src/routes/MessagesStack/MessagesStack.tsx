import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessagesScreen from '../../views/Messages/MessagesScreen';
import MessageScreen from '../../views/Messages/MessageScreen/MessageScreen';

const MessageStackNav = createStackNavigator();

const MessagesStack = () => {
  return (
    <MessageStackNav.Navigator>
      <MessageStackNav.Screen name="Messages" component={MessagesScreen} />
      <MessageStackNav.Screen name="Message" component={MessageScreen} />
    </MessageStackNav.Navigator>
  );
};

export default MessagesStack;
