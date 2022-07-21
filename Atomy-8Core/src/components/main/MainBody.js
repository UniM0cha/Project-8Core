import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../Loading';
import Core from './MainCore';

const STORAGE_KEY = '@Cores';

const Body = ({ navigation }) => {
  const [storageKey, setStorageKey] = useState('');
  const [cores, setCores] = useState({});
  const [ready, setReady] = useState(false);

  const isFocused = useIsFocused();

  // 처음 화면이 띄워질 때 날짜 지정
  useEffect(() => {
    setStorageKey(getTodayString());
  }, []);

  // 화면으로 포커스가 이동할 때마다 코어들 새로고침
  useEffect(() => {
    loadCores();
  }, [isFocused]);

  const loadCores = async () => {
    const s = await AsyncStorage.getItem(storageKey);
    if (s) {
      setCores(JSON.parse(s));
    }
    setReady(true);
  };

  // 저장된 데이터를 모두 불러오면 표시한다.
  return ready ? (
    <View style={styles.container}>
      <Core core={1} navigation={navigation} data={cores ? cores[1] : null} />
      <Core core={2} navigation={navigation} data={cores ? cores[2] : null} />
      <Core core={3} navigation={navigation} data={cores ? cores[3] : null} />
      <Core core={4} navigation={navigation} data={cores ? cores[4] : null} />
      <Core core={5} navigation={navigation} data={cores ? cores[5] : null} />
      <Core core={6} navigation={navigation} data={cores ? cores[6] : null} />
      <Core core={7} navigation={navigation} data={cores ? cores[7] : null} />
      <Core core={8} navigation={navigation} data={cores ? cores[8] : null} />
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
