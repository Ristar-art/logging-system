import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import Good from '../screens/good';
import Evil from '../screens/evil';
import Content from '../screens/content';

const screens = {
  Home: {
    screen: Home,
  },
  Good: {
    screen: Good,
  }
  
  ,
  Evil: {
    screen: Evil,
  },
  Content: {
    screen: Content,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
