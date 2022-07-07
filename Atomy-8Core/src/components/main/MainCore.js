import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import selectCore from '../../functions/selectCore';
import Seperator from '../Seperator';
import PropTypes from 'prop-types';

const Core = ({ core, navigation, data }) => {
  const onPress = () => {
    navigation.navigate('CoreEdit', {
      core: core,
      title: data ? data.title : '',
      content: data ? data.content : '',
    });
  };

  return data &&
    ((data.title && data.title != '') ||
      (data.content && data.content != '')) ? (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.textCoreHeader}>{selectCore(core)}</Text>
          <Checkbox value={true} />
        </View>

        <Seperator />

        {data.title ? <Text style={styles.textTitle}>{data.title}</Text> : null}
        {data.content ? (
          <Text style={styles.textContent}>{data.content}</Text>
        ) : null}
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <Text style={styles.textCoreHeader}>{selectCore(core)}</Text>
          <Checkbox value={false} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

Core.propTypes = {
  core: PropTypes.number,
  navigation: PropTypes.object,
  data: PropTypes.object,
};

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
    shadowRadius: 8,
    shadowOffset: { height: 0, width: 0 },

    // 안드로이드 그림자
    // elevation: 5,
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

export default Core;
