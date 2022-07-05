import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Container from '../../components/Container';
import { theme } from '../../theme';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Container />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
