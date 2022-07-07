import { useRef } from 'react';
import {
  CameraRoll,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import Body from '../../components/main/MainBody';
import Header from '../../components/main/MainHeader';
import ShareButton from '../../components/main/ShareButton';
import { DateProvider } from '../../contexts/DateContext';
import { theme } from '../../theme';
import * as Sharing from 'expo-sharing';

const Main = ({ navigation }) => {
  const captureRef = useRef();

  const getPhotoUri = async () => {
    const uri = await captureRef.current.capture();
    return `file://${uri}`;
  };

  const onCapture = async () => {
    const uri = await getPhotoUri();
    await Sharing.shareAsync(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DateProvider>
        <StatusBar />
        <ScrollView style={styles.scroll}>
          {/* 캡쳐할 부분 시작*/}
          <ViewShot
            ref={captureRef}
            options={{ format: 'jpg' }}
            style={{ backgroundColor: 'white' }}
          >
            <Header />
            <Body navigation={navigation} />
          </ViewShot>
          {/* 캡쳐할 부분 끝 */}
          <ShareButton onPress={() => onCapture()} />
        </ScrollView>
      </DateProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.background,
  },
});

export default Main;
