import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>현재 페이지는 준비중입니다.</Text>
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
