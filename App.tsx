
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation';
function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
