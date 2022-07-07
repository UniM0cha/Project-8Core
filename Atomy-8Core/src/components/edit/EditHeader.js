import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textYearDay}>2022년 7월 2일</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  textYearDay: {
    fontFamily: 'Atomy-Bold',
    fontSize: 18,
    color: theme.atomy,
    textAlign: 'center',
  },
});
