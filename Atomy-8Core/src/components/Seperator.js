import { View, StyleSheet } from 'react-native';

const Seperator = (props) => {
  return <View style={styles.container}></View>;
};

export default Seperator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C6C6C6',
    height: 1,
    marginVertical: 12,
  },
});
