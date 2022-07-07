import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import Body from '../../components/edit/EditBody';
import { DateProvider } from '../../contexts/DateContext';
import { theme } from '../../theme';

const CoreEdit = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <DateProvider>
        <StatusBar />
        <ScrollView style={styles.scroll}>
          <Body navigation={navigation} route={route} />
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
  },
});

export default CoreEdit;
