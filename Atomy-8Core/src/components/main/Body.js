import { StyleSheet, View } from 'react-native';
import Core from './Core';

const Body = ({ navigation }) => {
  return (
    <View
      style={styles.container}
      // contentContainerStyle={styles.contentContainer}
    >
      <Core core={1} navigation={navigation} />
      <Core core={2} navigation={navigation} />
      <Core core={3} navigation={navigation} />
      <Core core={4} navigation={navigation} />
      <Core core={5} navigation={navigation} />
      <Core core={6} navigation={navigation} />
      <Core core={7} navigation={navigation} />
      <Core core={8} navigation={navigation} />
      {/* <ShareButton /> */}
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 22,
    // backgroundColor: 'blue',
  },
});
