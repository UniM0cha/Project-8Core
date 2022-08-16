import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Shadow } from 'react-native-shadow-2';
import SelectedDateContext from '../context/SelectedDateContext';
import { STORAGE_KEY } from '../global_variables';
import { theme } from '../theme';

const CoreEdit = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { selectedDate, setSelectedDate } = useContext(SelectedDateContext);

  // MainCore로부터 core, title, content를 받아온다.
  const core = route.params.core;
  const routeTitle = route.params.title;
  const routeContent = route.params.content;

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
    // AsyncStorage에서 저장된 날짜들을 불러온다.
    const dates = await loadDates();

    const cores = dates[selectedDate] ? dates[selectedDate] : {};

    // 내용이 존재하면 저장
    if (!(title == '' && content == '')) {
      // 새로운 코어를 cores에 추가한다.
      const newCores = Object.assign({}, cores, {
        [core]: {
          title: title,
          content: content,
        },
      });

      // newCores를 dates에 추가한다.
      const newDates = Object.assign({}, dates, {
        [selectedDate]: newCores,
      });

      await saveDates(newDates);
    }
    // 내용이 없으면 삭제
    else {
      delete cores[core];

      // cores를 dates에 추가한다.
      const newDates = Object.assign({}, dates, {
        [selectedDate]: cores,
      });

      // 모든 코어가 없을 경우 dates도 삭제
      if (Object.keys(cores) == 0) {
        delete dates[selectedDate];
        await saveDates(dates);
      }

      // 코어가 하나라도 있는 경우에 저장
      else {
        await saveDates(newDates);
      }
    }

    // 8코어 메인화면으로 이동
    navigation.navigate('CoreSelect');
  };

  const saveDates = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
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
    <KeyboardAwareScrollView
      style={styles.scroll}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Shadow viewStyle={styles.coreContainer} startColor="#00000015">
          <Shadow
            viewStyle={styles.textInputTitleShadow}
            startColor="#00000015"
          >
            <TextInput
              style={styles.textInputTitle}
              placeholder="제목을 입력해주세요."
              multiline={true}
              scrollEnabled={false}
              onChangeText={(text) => setTitle(text)}
              value={title}
            />
          </Shadow>
          <Shadow
            viewStyle={styles.textInputContentShadow}
            startColor="#00000015"
          >
            <TextInput
              style={styles.textInputContent}
              placeholder="내용을 입력해주세요."
              multiline={true}
              scrollEnabled={false}
              onChangeText={(text) => setContent(text)}
              value={content}
            />
          </Shadow>
        </Shadow>
        {/* <Button title="저장" onPress={addCores} /> */}
        <TouchableOpacity onPress={addCores}>
          <Shadow viewStyle={styles.saveButtonShadow} startColor="#00000015">
            <Text style={styles.saveButtonText}>저장</Text>
          </Shadow>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: '100%',
  },
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
  textInputTitleShadow: {
    marginBottom: 12,
    width: '100%',
  },
  textInputContentShadow: {
    width: '100%',
  },
  textInputTitle: {
    backgroundColor: theme.textInput,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,

    textAlignVertical: 'top',
    fontWeight: 'bold',
  },
  textInputContent: {
    backgroundColor: theme.textInput,
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    minHeight: 100,

    textAlignVertical: 'top',
  },
  saveButtonShadow: {
    // backgroundColor: 'white',
    backgroundColor: theme.atomy,
    borderRadius: 15,
    alignSelf: 'stretch',
  },
  saveButtonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Atomy-Bold',
  },
});

export default CoreEdit;
