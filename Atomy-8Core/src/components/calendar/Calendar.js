import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { TodayContext } from '../../App';
import { theme } from '../../theme';
import { STORAGE_KEY } from '../main/MainBody';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

const ViewCalendar = () => {
  const today = useContext(TodayContext);

  const [ready, setReady] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    async function runAsync() {
      await buildMarkDates();
    }
    runAsync();
  }, [isFocused]);

  const buildMarkDates = async () => {
    const dates = await loadDates();
    // dates를 markDates 형태로 만들어준다.
    const keys = Object.keys(dates);
    setMarkedDates(
      Object.assign({}, ...keys.map((date) => ({ [date]: { marked: true } })))
    );
  };

  // AsyncStorage에서 전체 날짜 리스트를 받아온다.
  const loadDates = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      return JSON.parse(s);
    }
    // 데이터가 없으면 객체를 새로 만든다.
    else {
      return {};
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Agenda
        monthFormat={'yyyy년 MMMM'}
        theme={{
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
        }}
        markedDates={markedDates}
        // items={{
        //   '2022-07-22': [{ name: 'item 1 - any js object' }],
        //   '2022-07-23': [{ name: 'item 2 - any js object', height: 80 }],
        //   // '2022-07-24': [],
        //   '2022-07-25': [{ name: 'item 3 - any js object' }],
        // }}
        // renderItem={(item, firstItemInDay) => {
        //   return (
        //     <View style={styles.renderItem}>
        //       <Text>{item.name}</Text>
        //       <Text>{firstItemInDay}</Text>
        //     </View>
        //   );
        // }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        // renderDay={(day, item) => {
        //   // console.log(day.getDate());
        //   return <Text>{day ? day.getDate() : 'item'}</Text>;
        // }}
        // // Specify how empty date content with no items should be rendered
        // renderEmptyDate={() => {
        //   return <Text>데이터가 없을 때 표시하는 뷰</Text>;
        // }}
        // Specify what should be rendered instead of ActivityIndicator
        // renderEmptyData={() => {
        //   return <Text>아이템이 비어있을 때 나오는 뷰</Text>;
        // }}
        showOnlySelectedDayItems
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  renderDay: {
    backgroundColor: 'tomato',
  },
  renderItem: {
    backgroundColor: 'green',
  },
});

export default ViewCalendar;
