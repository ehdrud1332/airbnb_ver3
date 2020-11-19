import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';

import ListStack from "./navigation/ListStack";
import navigationTheme from './navigation/navigationTheme';

const cacheImages = images =>
    images.map(image => {
      if(typeof image === 'string') {
        return Image.prefetch(image)
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });

const cacheFonts = fonts =>
    fonts.map(font => [Font.loadAsync(font), Ionicons.font])

const App = () => {

  const [isReady, setIsReady] = useState(false);
  const loadAssets = async() => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",
      require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font])
    return Promise.all([...images, ...fonts])
  }

  const onFinish = () => setIsReady(true)

    return isReady ? (
        <NavigationContainer theme={navigationTheme}>
            <ListStack />
        </NavigationContainer>
    ) : (
        <AppLoading
          startAsync={loadAssets}
          onFinish={onFinish}
          onError={console.log}
        />
    )
};

export default App;
