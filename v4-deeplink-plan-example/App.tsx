/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import MessageDialog from './source/MessageDialog'

import {
  Airbridge
} from 'airbridge-react-native-sdk';

function App(): React.JSX.Element {

  useEffect(() => { 
    prepare() 
  }, []);

  const prepare = async () => {
    Airbridge.setOnDeeplinkReceived((result) => {
      console.log(`[DeepLink] ${result}`)
      
      setDeeplink(result)
      var ref = deeplinkRef.current
      if (!!ref && typeof ref === 'object' && typeof (ref as MessageDialog).show === 'function') {
        (ref as MessageDialog).show()
      }
    })
  };

  const deeplinkRef = useRef(null);
  const [deeplink, setDeeplink] = useState('');

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{margin: 16}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <SafeAreaView />
        
        <Text
          style={{
              color: isDarkMode ? Colors.lighter : Colors.darker, 
              fontSize: 20,
              fontWeight: 900
            }}>Airbridge Deeplink plan example</Text>
        
        <MessageDialog
          ref={deeplinkRef}
          title={'Deeplink'}
          message={deeplink} />
      </View>
    </View>
  );
}

export default App;
