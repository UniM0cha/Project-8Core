import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import selectCore from '../../functions/selectCore';
import Seperator from '../Seperator';
import PropTypes from 'prop-types';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';

const Core = ({ core, data }) => {
  const navigation = useNavigation();

  // 코어를 선택할 때 CoreEdit으로 제목과 내용을 전달하며 이동한다.
  const onPress = () => {
    navigation.navigate('CoreEdit', {
      core: core,
      title: data ? data.title : '',
      content: data ? data.content : '',
    });
  };

  // 내용 or 제목이 있을 때와 없을때를 구별
  return data &&
    ((data.title && data.title != '') ||
      (data.content && data.content != '')) ? (
    <Shadow viewStyle={styles.container} startColor="#00000015">
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.textCoreHeader}>{selectCore(core)}</Text>
          <Checkbox value={true} onValueChange={onPress} />
        </View>

        <Seperator />

        {data.title ? <Text style={styles.textTitle}>{data.title}</Text> : null}
        {data.content ? (
          <Text style={styles.textContent}>{data.content}</Text>
        ) : null}
      </TouchableOpacity>
    </Shadow>
  ) : (
    <Shadow viewStyle={styles.container} startColor="#00000015">
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.textCoreHeader}>{selectCore(core)}</Text>
          <Checkbox value={false} onValueChange={onPress} />
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

Core.propTypes = {
  core: PropTypes.number,
  data: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 11,
    marginBottom: 17,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCoreHeader: {
    fontFamily: 'Atomy-Bold',
    width: '90%',
  },
  textTitle: {
    fontFamily: 'Atomy-Medium',
    marginBottom: 12,
  },
  textContent: {
    fontFamily: 'Atomy-Light',
  },
});

export default Core;
