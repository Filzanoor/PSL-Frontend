/**
 * @format
 */

// Import 'react-native-gesture-handler' before any other imports if you're using React Navigation
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Register the app component
AppRegistry.registerComponent(appName, () => App);
