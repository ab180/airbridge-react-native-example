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
  Pressable,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import MessageDialog from './source/MessageDialog'

import {
  Airbridge,
  AirbridgeCategory,
  AirbridgeAttribute
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

  const send = () => {
    Airbridge.trackEvent(
      AirbridgeCategory.ORDER_COMPLETED, 
      {
        [AirbridgeAttribute.VALUE]: 11,
        [AirbridgeAttribute.TRANSACTION_ID]: '8065ef16-162b-4a82-b683-e51aefdda7d5',
        [AirbridgeAttribute.CURRENCY]: 'USD',
        [AirbridgeAttribute.IN_APP_PURCHASED]: true,
        [AirbridgeAttribute.PRODUCTS]: [
          {
            [AirbridgeAttribute.PRODUCT_ID]: '0117b32a-5a6c-4d4c-b64c-7858e07dba78',
            [AirbridgeAttribute.PRODUCT_NAME]: 'PlasticHammer',
            [AirbridgeAttribute.PRODUCT_PRICE]: 10,
            [AirbridgeAttribute.PRODUCT_QUANTITY]: 1,
            [AirbridgeAttribute.PRODUCT_CURRENCY]: 'USD',
          },
          {
            [AirbridgeAttribute.PRODUCT_ID]: 'd6ab2fbe-decc-4362-b719-d257a131e91e',
            [AirbridgeAttribute.PRODUCT_NAME]: 'PlasticFork',
            [AirbridgeAttribute.PRODUCT_PRICE]: 1,
            [AirbridgeAttribute.PRODUCT_QUANTITY]: 1,
            [AirbridgeAttribute.PRODUCT_CURRENCY]: 'USD',
          },
        ],
      },
    );
  }

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
            }}>Airbridge MMP plan example</Text>
        <View style={{ margin: 4 }} />
        <Pressable
          style={
            {
              backgroundColor: !isDarkMode ? Colors.darker : Colors.lighter,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 8,
              paddingHorizontal: 16,
              marginVertical: 4,
              marginHorizontal: 0,
              height: 32
            }
          }
          onPress={() => send()}>
            <Text
              style={{
                color: isDarkMode ? Colors.darker : Colors.lighter, 
                flex: 1,
                fontSize: 14,
              }
            }>Send Event</Text>
        </Pressable>

        <MessageDialog
          ref={deeplinkRef}
          title={'Deeplink'}
          message={deeplink} />
      </View>
    </View>
  );
}

export default App;
