import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { TodayContext } from '../../context/TodayContext';
import { theme } from '../../theme';
import { STORAGE_KEY } from '../main/MainBody';
import Core from '../main/MainCore';

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
  const todayString = format(today, 'yyyy-MM-dd');

  const [ready, setReady] = useState(false);
  const [markedDates, setMarkedDates] = useState({});
  const [items, setItmes] = useState({});
  const [dates, setDates] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    async function runAsync() {
      setDates(await loadDates());
      buildMarkDates();
      buildItems();
    }
    runAsync();
  }, [isFocused]);

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

  const buildMarkDates = () => {
    /**
     * dates를 markDates 형태로 만들어준다.
     * ['2022-04-05', '2022-04-06']
     * >>>>>>
     * {
     *  '2022-04-05' : { marked : true },
     *  '2022-04-06' : { marked : true },
     * }
     */

    const newMarkedDates = {};
    Object.keys(dates).forEach((key) => {
      newMarkedDates[key] = { marked: true };
    });
    setMarkedDates(newMarkedDates);
  };

  const buildItems = () => {
    /**
     * dates를 itmes 형태로 만들어준다.
     * ['2022-04-05', '2022-04-06']
     * >>>>>>
     * {
     *  '2022-04-05' : [{ cores : dates['2022-04-05'] }],
     *  '2022-04-06' : [{ cores : dates['2022-04-06'] }],
     * }
     */
    const newItems = {};
    Object.keys(dates).forEach((key) => {
      const data = [];
      data.push({ cores: dates[key] });
      newItems[key] = data;
    });
    setItmes(newItems);
  };

  const renderItem = (item, firstItemInDay) => {
    return (
      <View style={styles.renderItem}>
        <Core
          core={1}
          data={item.cores ? item.cores[1] : null}
          readonly={true}
        />
        <Core
          core={2}
          data={item.cores ? item.cores[2] : null}
          readonly={true}
        />
        <Core
          core={3}
          data={item.cores ? item.cores[3] : null}
          readonly={true}
        />
        <Core
          core={4}
          data={item.cores ? item.cores[4] : null}
          readonly={true}
        />
        <Core
          core={5}
          data={item.cores ? item.cores[5] : null}
          readonly={true}
        />
        <Core
          core={6}
          data={item.cores ? item.cores[6] : null}
          readonly={true}
        />
        <Core
          core={7}
          data={item.cores ? item.cores[7] : null}
          readonly={true}
        />
        <Core
          core={8}
          data={item.cores ? item.cores[8] : null}
          readonly={true}
        />
      </View>
    );
  };

  const renderEmptyData = () => {
    return (
      <View style={styles.renderEmptyData}>
        <Text>해당 날짜에 8코어를 작성하지 않았습니다.</Text>
      </View>
    );
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
        loadItemsForMonth={buildItems}
        markedDates={markedDates}
        items={items}
        renderItem={renderItem}
        // renderDay={(day, item) => {
        //   // console.log(day.getDate());
        //   return <Text>{day ? day.getDate() : 'item'}</Text>;
        // }}
        // renderEmptyDate={renderEmptyDate}
        renderEmptyData={renderEmptyData}
        showOnlySelectedDayItems={true}
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
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
  },
  renderEmptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ViewCalendar;
