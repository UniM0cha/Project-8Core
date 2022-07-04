import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text } from 'react-native';
import Seperator from './Seperator';

function selectCore(core) {
  switch (core) {
    case 1:
      return '1Core : 제품 애용';
    case 2:
      return '2Core : 책 읽기 / VOD 시청';
    case 3:
      return '3Core : 미팅 참석';
    case 4:
      return '4Core : 제품 전달';
    case 5:
      return '5Core : 사업 설명 (Show The Plan)';
    case 6:
      return '6Core : 후속 관리';
    case 7:
      return '7Core : 상담';
    case 8:
      return '8Core : 신뢰 쌓기';
  }
}

const Core = ({ core }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textCoreHeader}>{selectCore(core)}</Text>
        <Checkbox />
      </View>

      <Seperator />

      <Text style={styles.textTitle}>Title</Text>
      <Text style={styles.textContent}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type speci...
      </Text>
    </View>
  );
};

export default Core;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 11,
    marginBottom: 17,
    // margin: 10,

    // ios 그림자
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 0 },

    // 안드로이드 그림자
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCoreHeader: {
    fontFamily: 'Atomy-Bold',
  },
  textTitle: {
    fontFamily: 'Atomy-Medium',
    marginBottom: 12,
  },
  textContent: {
    fontFamily: 'Atomy-Light',
  },
});
