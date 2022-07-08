import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
