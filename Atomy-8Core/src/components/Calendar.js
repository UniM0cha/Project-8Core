import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { theme } from '../theme';
import Loading from './Loading';
import { STORAGE_KEY } from '../global_variables';
import ShareButton from './ShareButton';
import CoreList from './CoreList';
import ViewShot, { captureRef } from 'react-native-view-shot';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from 'react-native-google-mobile-ads';
import SelectedDateContext from '../context/SelectedDateContext';
import * as Sharing from 'expo-sharing';
import CoreHeader from './CoreHeader';

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

const adUnitId = __DEV__
  ? TestIds.BANNER
  : Platform.select({
      ios: 'ca-app-pub-7177226656845371/2933124133',
      android: 'ca-app-pub-7177226656845371/4469567088',
    });

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

  const [markedDates, setMarkedDates] = useState({});
  const [items, setItmes] = useState({});
  const [dates, setDates] = useState({});
  const [itemReady, setItemReady] = useState(false);
  const [markedDatesReady, setMarkedDatesReady] = useState(false);

  const viewshotRef = useRef();

  const getPhotoUri = async () => {
    const uri = await captureRef(viewshotRef, {
      fileName: selectedDate,
      format: 'jpg',
      quality: 0.8,
    });
    return `file://${uri}`;
  };

  const onCapture = async () => {
    const uri = await getPhotoUri();
    await Sharing.shareAsync(uri);
  };

  useFocusEffect(
    useCallback(() => {
      async function runAsync() {
        setDates(await loadDates());
      }
      runAsync();
    }, [])
  );

  useEffect(() => {
    buildMarkDates();
    buildItems();
  }, [dates]);

  useEffect(() => {
    setItemReady(true);
  }, [items]);

  useEffect(() => {
    setMarkedDatesReady(true);
  }, [markedDates]);

  // AsyncStorage에서 전체 날짜 리스트를 받아온다.
  const loadDates = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      return await JSON.parse(s);
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
      <ScrollView>
        <ViewShot ref={viewshotRef} style={styles.renderItem}>
          <CoreHeader />
          <CoreList item={item} />
        </ViewShot>
        <ShareButton onPress={onCapture} />
        <View style={styles.ad}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>
      </ScrollView>
    );
  };

  const renderEmptyData = () => {
    return (
      <ScrollView>
        <ViewShot ref={viewshotRef} style={styles.renderItem}>
          <CoreHeader />
          <CoreList />
        </ViewShot>
        <ShareButton onPress={onCapture} />
        <View style={styles.ad}>
          <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
        </View>
      </ScrollView>
    );
  };

  return itemReady && markedDatesReady ? (
    <Agenda
      monthFormat="yyyy-MM"
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
      items={items}
      renderItem={renderItem}
      renderDay={() => null}
      renderEmptyData={renderEmptyData}
      showOnlySelectedDayItems={true}
      onDayPress={(date) => {
        setSelectedDate(date.dateString);
      }}
    />
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  renderItem: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
    backgroundColor: '#F2F4F5',
  },
  renderEmptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ad: {
    alignItems: 'center',
  },
});

export default Calendar;
