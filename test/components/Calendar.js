import { StatusBar, StyleSheet, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Agenda />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
