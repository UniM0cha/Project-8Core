import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { theme } from '../theme';
import Calendar from '../components/Calendar';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Calendar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
});

export default Main;
