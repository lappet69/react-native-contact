/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './@types/type';
import AddContact from './screens/AddContact';
import ListContact from './screens/ListContact';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    // <SafeAreaView style={{backgroundColor: theme.colors.primary}}>
    //   <ScrollView contentInsetAdjustmentBehavior="automatic">
    //     <ListContact />
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={ListContact}
          options={{title: 'Home', headerShown: false}}
        />
        <RootStack.Screen name="AddContact" component={AddContact} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
