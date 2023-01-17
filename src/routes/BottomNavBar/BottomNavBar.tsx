import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-ionicons';
// screens
import HomeScreen from '../../views/Home/HomeScreen';
import ProfileScreen from '../../views/Profile/ProfileScreen';
import MessagesScreen from '../../views/Messages/MessagesScreen';
import MessagesStack from '../MessagesStack/MessagesStack';

const Tab = createBottomTabNavigator();

const BottomNavBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="people" color={color} />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => <Icon name="person" color={color} />,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesStack}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <Icon name="mail" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavBar;
