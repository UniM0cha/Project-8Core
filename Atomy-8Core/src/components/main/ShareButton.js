import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { EvilIcons } from '@expo/vector-icons';

const ShareButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
        >
          {Platform.OS == 'ios' ? (
            <EvilIcons name="share-apple" size={35} color="black" />
          ) : (
            <EvilIcons name="share-google" size={35} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 13,
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

    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { height: 0, width: 0 },
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default ShareButton;
