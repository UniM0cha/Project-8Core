import { parse } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SelectedDateContext from '../context/SelectedDateContext';
import { theme } from '../theme';

const CoreHeader = () => {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setDate(parse(selectedDate, 'yyyy-MM-dd', new Date()));
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <Text style={styles.textYear}>{date.getFullYear()}년</Text>
      <Text style={styles.textDay}>
        {date.getMonth() + 1}월 {date.getDate()}일
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
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

export default CoreHeader;
