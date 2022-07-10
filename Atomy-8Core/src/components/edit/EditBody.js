import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import DateContext from '../../contexts/DateContext';
import { theme } from '../../theme';
import Loading from '../Loading';

const STORAGE_KEY = '@Cores';

const Body = ({ navigation, route }) => {
  // MainCore로부터 core, title, content를 받아온다.
  const core = route.params.core;
  const routeTitle = route.params.title;
  const routeContent = route.params.content;

  // DateContext로부터 현재 날짜를 가져온다.
  const { date } = useContext(DateContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [ready, setReady] = useState(false);

  // 처음 화면 표시 시에 MainCore로부터 가져온 title과 content를 적용한다.
  useEffect(() => {
    setTitle(routeTitle);
    setContent(routeContent);
    setReady(true);
  }, []);

  const addCores = async () => {
    // AsyncStorage에서 dates를 불러온다.
    const dates = await loadDates();

    // core를 만들고
    const newCore = Object.assign({}, dates[date], {
      [core]: {
        title: title,
        content: content,
      },
    });

    // dates 에 붙힌다.
    const newDate = Object.assign({}, dates, {
      [date]: {
        ...newCore,
      },
    });

    // 생성된 date 저장
    await saveDates(newDate);

    // 8Core 화면으로 이동
    navigation.navigate('CoreSelect');
  };

  const saveDates = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  // AsyncStorage에서 dates를 받아오는데
  const loadDates = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s) {
      return JSON.parse(s);
    }
    // 원래 데이터가 없으면 오늘 날짜로 객체를 새로 만든다.
    else {
      return {
        [date]: {},
      };
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
