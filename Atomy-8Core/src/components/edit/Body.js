import { StyleSheet, View } from 'react-native';
import Core from './Core';
import SubmitButton from './SubmitButton';

const Body = () => {
  return (
    <View style={styles.container}>
      <Core core={1} />
      <SubmitButton />
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
  },
});
