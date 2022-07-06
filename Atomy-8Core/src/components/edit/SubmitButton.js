import { Button, StyleSheet, View } from 'react-native';
import Core from './Core';

const SubmitButton = () => {
  return <Button title="저장" />;
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 22,
  },
});
