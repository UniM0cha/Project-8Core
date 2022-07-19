import { createStackNavigator } from '@react-navigation/stack';
import selectCore from '../functions/selectCore';
import CoreEdit from '../components/core-edit/CoreEdit';
import Main from '../components/main/Main';
import { theme } from '../theme';

const Stack = createStackNavigator();

const CoreEditStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="CoreSelect">
      <Stack.Screen
        name="CoreSelect"
        component={Main}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CoreEdit"
        component={CoreEdit}
        options={({ route }) => ({
          headerTitle: selectCore(route.params.core),
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontFamily: 'Atomy-Bold',
            fontSize: 18,
            color: theme.atomy,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default CoreEditStackNavigation;
