import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Body from '../../components/main/MainBody';
import Header from '../../components/main/MainHeader';
import { DateProvider } from '../../contexts/DateContext';
import { theme } from '../../theme';

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <DateProvider>
        <StatusBar />
        <ScrollView style={styles.scroll}>
          <Header />
          <Body navigation={navigation} />
        </ScrollView>
      </DateProvider>
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

export default Main;
