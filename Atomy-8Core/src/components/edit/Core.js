import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { theme } from '../../theme';

const Core = ({ core }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputTitle}
        placeholder="제목을 입력해주세요."
        multiline={true}
      />
      <TextInput
        placeholder="내용을 입력해주세요."
        multiline={true}
        style={styles.textInputContent}
      />
    </View>
  );
};

export default Core;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 20,
    marginBottom: 17,
    // margin: 10,

    // ios 그림자
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { height: 0, width: 0 },

    // 안드로이드 그림자
    elevation: 5,
  },
  textInputTitle: {
    backgroundColor: theme.textInput,
    borderRadius: 15,
    padding: 10,
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
    padding: 10,
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
