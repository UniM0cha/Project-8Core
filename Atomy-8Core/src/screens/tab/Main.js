import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Body from '../../components/main/Body';
import Header from '../../components/main/Header';
import DateContext from '../../contexts/DateContext';
import { theme } from '../../theme';

const Main = ({ navigation }) => {
  const date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return (
    <SafeAreaView style={styles.container}>
      <DateContext.Provider value={{ date: date }}>
        <StatusBar />
        <ScrollView style={styles.scroll}>
          <Header />
          <Body navigation={navigation} />
        </ScrollView>
      </DateContext.Provider>
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
  scroll: {
    flex: 1,
    width: '100%',
    paddingVertical: 16,
  },
});
