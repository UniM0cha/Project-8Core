import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { theme } from '../theme';
import CoreEdit from '../components/CoreEdit';

const Edit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CoreEdit />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Edit;
