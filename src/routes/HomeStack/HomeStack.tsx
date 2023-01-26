import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../views/Home/HomeScreen';
import MessageScreen from '../../views/Messages/MessageScreen/MessageScreen';
import ProfileScreen from '../../views/Profile/ProfileScreen';
const MessageStackNav = createStackNavigator();

const options = {
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
};

const HomeStack = () => {
  return (
    <MessageStackNav.Navigator>
      <MessageStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={options}
      />
      <MessageStackNav.Screen
        name="Messages"
        component={MessageScreen}
        options={options}
      />
      <MessageStackNav.Screen
        name="Profile"
        component={ProfileScreen}
        options={options}
      />
    </MessageStackNav.Navigator>
  );
};

export default HomeStack;
