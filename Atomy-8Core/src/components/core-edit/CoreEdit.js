import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Body from './EditBody';
import { theme } from '../../theme';

const CoreEdit = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.scroll}>
        <Body navigation={navigation} route={route} />
      </ScrollView>
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
  scroll: {
    flex: 1,
    width: '100%',
  },
});

export default CoreEdit;
