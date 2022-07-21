import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme';
import Loading from '../Loading';

const Header = () => {
  const [date, setDate] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    setDate(today);
    setReady(true);
  }, []);

  return ready ? (
    <View style={styles.container}>
      <Text style={styles.textYear}>{date.getFullYear()}년</Text>
      <Text style={styles.textDay}>
        {date.getMonth() + 1}월 {date.getDate()}일
      </Text>
    </View>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 16,
  },
  textYear: {
    fontFamily: 'Atomy-Bold',
    fontSize: 18,
    color: theme.atomy,
  },
  textDay: {
    fontFamily: 'Atomy-Bold',
    fontSize: 40,
    color: theme.atomy,
  },
});

export default Header;
