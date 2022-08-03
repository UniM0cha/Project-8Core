import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { format } from 'date-fns';
import { useCallback, useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TodayContext } from '../../context/TodayContext';
import Loading from '../Loading';
import Core from './MainCore';

export const STORAGE_KEY = '8CORE';

const Body = () => {
  const today = useContext(TodayContext);

  const [cores, setCores] = useState({});
  const [ready, setReady] = useState(false);

  // 화면으로 포커스가 이동할 때마다 코어들 새로고침
  useFocusEffect(
    useCallback(() => {
      loadCores();
    }, [])
  );

  useEffect(() => {
    setReady(true);
  }, [cores]);

  const loadCores = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      setCores(JSON.parse(s)[format(today, 'yyyy-MM-dd')]);
    } else {
      setCores({});
    }
  };

  // 저장된 데이터를 모두 불러오면 표시한다.
  return ready ? (
    <View style={styles.container}>
      <Core core={1} data={cores ? cores[1] : null} />
      <Core core={2} data={cores ? cores[2] : null} />
      <Core core={3} data={cores ? cores[3] : null} />
      <Core core={4} data={cores ? cores[4] : null} />
      <Core core={5} data={cores ? cores[5] : null} />
      <Core core={6} data={cores ? cores[6] : null} />
      <Core core={7} data={cores ? cores[7] : null} />
      <Core core={8} data={cores ? cores[8] : null} />
    </View>
  ) : (
    <Loading />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
  },
});

export default Body;
