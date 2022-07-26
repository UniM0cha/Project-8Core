import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/MainTab';
import Loading from './components/Loading';
import { createContext } from 'react';

export const TodayContext = createContext();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Atomy-Bold': require('../assets/fonts/Atomy-Bold.otf'),
    'Atomy-Light': require('../assets/fonts/Atomy-Light.otf'),
    'Atomy-Medium': require('../assets/fonts/Atomy-Medium.otf'),
  });

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <TodayContext.Provider value={today}>
        <TabNavigation />
      </TodayContext.Provider>
    </NavigationContainer>
  );
}
