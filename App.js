import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import ContactScreen from './src/screens/contact';
import 'react-native-gesture-handler';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;