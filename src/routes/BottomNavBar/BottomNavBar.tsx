import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-ionicons';
// screens
import HomeScreen from '../../views/Home/HomeScreen';
import HomeStack from '../HomeStack/HomeStack';
import ProfileScreen from '../../views/Profile/ProfileScreen';
import MessagesScreen from '../../views/Messages/MessagesScreen';
import MessagesStack from '../MessagesStack/MessagesStack';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'aqua',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'purple',
            shadowColor: 'transparent',
            borderTopWidth: 0,
          },

          headerStyle: {
            backgroundColor: 'purple',
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: '600',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="people" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <Icon name="mail" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavBar;
