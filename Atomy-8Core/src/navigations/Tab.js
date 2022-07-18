import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Calender from '../screens/tab/Calender';
import Profile from '../screens/tab/Profile';
import Settings from '../screens/tab/Settings';
import { theme } from '../theme';
import CoreEditStackNavigation from './CoreEditStack';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      activeColor={theme.atomy}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Main"
        component={CoreEditStackNavigation}
        options={{
          tabBarLabel: '8코어',
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name={props.focused ? 'notebook-edit' : 'notebook-edit-outline'}
              size={24}
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarLabel: '캘린더',
          tabBarIcon: (props) => (
            <Ionicons
              name={props.focused ? 'calendar' : 'calendar-outline'}
              size={24}
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '프로필',
          tabBarIcon: (props) => (
            <Ionicons
              name={props.focused ? 'person-circle' : 'person-circle-outline'}
              size={24}
              color={props.color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '설정',
          tabBarIcon: (props) => (
            <Ionicons
              name={props.focused ? 'settings' : 'settings-outline'}
              size={24}
              color={props.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
