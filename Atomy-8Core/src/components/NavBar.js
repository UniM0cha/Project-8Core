import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme } from '../theme';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.navButton}>
        <MaterialCommunityIcons
          name="notebook-edit-outline"
          size={24}
          color={theme.atomy}
        />
      </Pressable>
      <Pressable style={styles.navButton}>
        <Ionicons name="calendar-sharp" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.navButton}>
        <Ionicons name="person-circle" size={24} color="black" />
      </Pressable>
      <Pressable style={styles.navButton}>
        <Ionicons name="settings-sharp" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '100%',
    borderTopColor: '#C4C6C9',
    borderTopWidth: 1,
  },
  navButton: {},
});
