import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/MainTab';
import Loading from './components/Loading';
import { TodayContext } from './context/TodayContext';

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
    <TodayContext.Provider value={today}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </TodayContext.Provider>
  );
}
