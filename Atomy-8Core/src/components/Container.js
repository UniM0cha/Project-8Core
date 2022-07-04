import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import Body from './Body';
import Header from './Header';

const Container = (props) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Body />
    </ScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 16,
  },
});
