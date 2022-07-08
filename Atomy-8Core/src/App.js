import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './navigations/Tab';
import Loading from './components/Loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Atomy-Bold': require('../assets/fonts/Atomy-Bold.otf'),
    'Atomy-Light': require('../assets/fonts/Atomy-Light.otf'),
    'Atomy-Medium': require('../assets/fonts/Atomy-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
