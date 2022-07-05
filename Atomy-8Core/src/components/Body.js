import { StyleSheet, View } from 'react-native';
import Core from './Core';

const Body = () => {
  return (
    <View
      style={styles.container}
      // contentContainerStyle={styles.contentContainer}
    >
      <Core core={1} />
      <Core core={2} />
      <Core core={3} />
      <Core core={4} />
      <Core core={5} />
      <Core core={6} />
      <Core core={7} />
      <Core core={8} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
  },
});
