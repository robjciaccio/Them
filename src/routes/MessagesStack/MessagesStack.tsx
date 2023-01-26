import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../../views/Messages/MessagesScreen';
import MessageScreen from '../../views/Messages/MessageScreen/MessageScreen';

const MessageStackNav = createStackNavigator();

const MessagesStack = () => {
  return (
    <MessageStackNav.Navigator>
      <MessageStackNav.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          headerStyle: {
            backgroundColor: 'purple',
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: '600',
          },
          headerBackTitleStyle: { color: 'white' },
        }}
      />
      <MessageStackNav.Screen
        name="Message"
        component={MessageScreen}
        options={{
          headerStyle: {
            backgroundColor: 'purple',
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: '600',
          },
          // headerback
          headerBackTitleStyle: { color: 'aqua' },
          headerTintColor: 'aqua',
        }}
      />
    </MessageStackNav.Navigator>
  );
};

export default MessagesStack;
