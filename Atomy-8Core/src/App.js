import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import NavBar from './components/NavBar';
import Container from './components/Container';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { theme } from './theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Atomy-Bold': require('../assets/fonts/Atomy-Bold.otf'),
    'Atomy-Light': require('../assets/fonts/Atomy-Light.otf'),
    'Atomy-Medium': require('../assets/fonts/Atomy-Medium.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Container />
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
