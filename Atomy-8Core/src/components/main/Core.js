import Checkbox from 'expo-checkbox';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import selectCore from '../../functions/selectCore';
import Seperator from '../Seperator';

const Core = ({ core, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate('CoreEdit', { core: core })}>
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
    </Pressable>
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
    shadowRadius: 8,
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
