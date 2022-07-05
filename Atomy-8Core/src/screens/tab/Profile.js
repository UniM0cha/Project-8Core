import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
