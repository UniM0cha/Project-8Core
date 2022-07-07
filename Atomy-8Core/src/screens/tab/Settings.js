import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
