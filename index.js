import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './src/index.tsx';

AppRegistry.registerComponent(appName, () => App);
