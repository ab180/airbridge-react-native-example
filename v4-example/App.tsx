/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

import {
  Airbridge,
  AirbridgeCategory,
  AirbridgeAttribute
} from 'airbridge-react-native-sdk';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={{margin: 16}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <SafeAreaView />
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
          onPress={() => {
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
            )
          }}>
            <Text
              style={{
                color: isDarkMode ? Colors.darker : Colors.lighter, 
                flex: 1,
                fontSize: 14,
              }
            }>Send Event</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default App;
