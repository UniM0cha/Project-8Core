import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import Loading from './src/components/Loading';
import {
  SelectedDateContext,
  SelectedDateProvider,
} from './src/context/SelectedDateContext';
import { theme } from './src/theme';
import Main from './src/screens/Main';
import selectCore from './src/functions/selectCore';
import Edit from './src/screens/Edit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    'Atomy-Bold': require('./assets/fonts/Atomy-Bold.otf'),
    'Atomy-Light': require('./assets/fonts/Atomy-Light.otf'),
    'Atomy-Medium': require('./assets/fonts/Atomy-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SelectedDateProvider>
      <NavigationContainer>
        <CoreEditStack />
      </NavigationContainer>
    </SelectedDateProvider>
  );
};

const CoreEditStack = () => {
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
        component={Edit}
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

export default App;
