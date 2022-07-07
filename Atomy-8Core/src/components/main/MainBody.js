import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DateContext from '../../contexts/DateContext';
import Loading from '../Loading';
import Core from './MainCore';

const STORAGE_KEY = '@Cores';

const Body = ({ navigation }) => {
  const { date } = useContext(DateContext);

  const [dates, setDates] = useState({});
  const [ready, setReady] = useState(false);

  const isFocused = useIsFocused();
  useEffect(() => {
    loadDates();
  }, [isFocused]);

  const loadDates = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      setDates(JSON.parse(s));
    }

    // 없으면 오늘 날짜로 새로운 객체를 만든다.
    else {
      setDates({
        [date]: {},
      });
    }
    setReady(true);
  };

  // 저장된 데이터를 모두 불러오면 표시한다.
  return ready ? (
    <View style={styles.container}>
      <Core
        core={1}
        navigation={navigation}
        data={dates[date] ? dates[date][1] : null}
      />
      <Core
        core={2}
        navigation={navigation}
        data={dates[date] ? dates[date][2] : null}
      />
      <Core
        core={3}
        navigation={navigation}
        data={dates[date] ? dates[date][3] : null}
      />
      <Core
        core={4}
        navigation={navigation}
        data={dates[date] ? dates[date][4] : null}
      />
      <Core
        core={5}
        navigation={navigation}
        data={dates[date] ? dates[date][5] : null}
      />
      <Core
        core={6}
        navigation={navigation}
        data={dates[date] ? dates[date][6] : null}
      />
      <Core
        core={7}
        navigation={navigation}
        data={dates[date] ? dates[date][7] : null}
      />
      <Core
        core={8}
        navigation={navigation}
        data={dates[date] ? dates[date][8] : null}
      />
    </View>
  ) : (
    <Loading />
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
  },
});
