import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Body from '../../components/edit/Body';
import Header from '../../components/edit/Header';
import { theme } from '../../theme';

const CoreEdit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.scroll}>
        {/* <Header /> */}
        <Body />
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
    paddingVertical: 16,
  },
});

export default CoreEdit;
