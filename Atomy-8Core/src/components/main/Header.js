import { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DateContext from '../../contexts/DateContext';
import { theme } from '../../theme';

const Header = () => {
  const { date } = useContext(DateContext);

  return (
    <View style={styles.container}>
      <Text style={styles.textYear}>{date.getFullYear() + '년'}</Text>
      <Text style={styles.textDay}>
        {date.getMonth() + 1 + '월 ' + date.getDate() + '일'}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  textYear: {
    fontFamily: 'Atomy-Bold',
    fontSize: 18,
    color: theme.atomy,
  },
  textDay: {
    fontFamily: 'Atomy-Bold',
    fontSize: 48,
    color: theme.atomy,
  },
});
