import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { EvilIcons } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';

const ShareButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Shadow viewStyle={styles.button} startColor="#00000015">
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
        >
          {/* ios일 경우 ios에 맞는 공유 버튼, 안드로이드일 경우 안드로이드에 맞는 공유버튼을 넣는다. */}
          {Platform.OS == 'ios' ? (
            <EvilIcons name="share-apple" size={35} color="black" />
          ) : (
            <EvilIcons name="share-google" size={35} color="black" />
          )}
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: theme.background,
    borderRadius: 50,

    // ...Platform.select({
    //   ios: {
    //     shadowOpacity: 0.2,
    //     shadowOpacity: 0.2,
    //     shadowRadius: 8,
    //     shadowOffset: { height: 0, width: 0 },
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
});

export default ShareButton;
