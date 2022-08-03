import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import CoreEditStackNavigation from './CoreEditStack';
import ViewCalendar from '../components/calendar/Calendar';
import { theme } from '../theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Main"
        component={CoreEditStackNavigation}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.atomy,
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
        component={ViewCalendar}
        options={{
          headerShown: false,
          tabBarActiveTintColor: theme.atomy,
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
      {/* <Tab.Screen
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
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
