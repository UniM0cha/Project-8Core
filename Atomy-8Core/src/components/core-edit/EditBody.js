import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import getTodayString from '../../functions/getTodayString';
import { theme } from '../../theme';
import Loading from '../Loading';

// const STORAGE_KEY = '@Cores';

const Body = ({ route }) => {
  // MainCore로부터 core, title, content를 받아온다.
  const core = route.params.core;
  const routeTitle = route.params.title;
  const routeContent = route.params.content;

  // DateContext로부터 현재 날짜를 가져온다.
  // const { date } = useContext(DateContext);

  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ready, setReady] = useState(false);
  const [storageKey, setStorageKey] = useState('');

  // 처음 화면 표시 시에 MainCore로부터 가져온 title과 content를 적용한다.
  useEffect(() => {
    setStorageKey(getTodayString());
    setTitle(routeTitle);
    setContent(routeContent);
    setReady(true);
  }, []);

  const addCores = async () => {
    // AsyncStorage에서 dates를 불러온다.
    const todayCores = await loadTodayCores();

    // 새로운 코어를 만들고
    const newCores = Object.assign({}, todayCores, {
      [core]: {
        title: title,
        content: content,
      },
    });

    // 생성된 코어 저장
    await saveDates(newCores);

    // 8코어 메인화면으로 이동
    navigation.navigate('CoreSelect');
  };

  const saveDates = async (toSave) => {
    await AsyncStorage.setItem(storageKey, JSON.stringify(toSave));
  };

  // AsyncStorage에서 오늘의 코어 리스트를 받아오는데
  const loadTodayCores = async () => {
    const s = await AsyncStorage.getItem(storageKey);
    if (s) {
      return JSON.parse(s);
    }
    // 원래 데이터가 없으면 객체를 새로 만든다.
    else {
      return {};
    }
  };

  return ready ? (
    <View style={styles.container}>
      <Shadow viewStyle={styles.coreContainer}>
        <TextInput
          style={styles.textInputTitle}
          placeholder="제목을 입력해주세요."
          multiline={true}
          scrollEnabled={false}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />
        <TextInput
          style={styles.textInputContent}
          placeholder="내용을 입력해주세요."
          multiline={true}
          scrollEnabled={false}
          onChangeText={(text) => setContent(text)}
          value={content}
        />
      </Shadow>
      <Button title="저장" onPress={addCores} />
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
    paddingBottom: 22,
  },

  coreContainer: {
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 20,
    marginBottom: 17,
    width: '100%',
  },
  textInputTitle: {
    backgroundColor: theme.textInput,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 12,

    textAlignVertical: 'top',
    fontWeight: 'bold',

    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  textInputContent: {
    backgroundColor: theme.textInput,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    minHeight: 100,

    textAlignVertical: 'top',

    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Body;
