/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
// import BasicFlatList from './compoents/BasicFlatList';
// import HorizontalFlatList from './ExampleWeather/HorizontalFlatList'
// import ViewPageAndroid from './Demo/ViewPageAndroid'
AppRegistry.registerComponent(appName, () => App);
