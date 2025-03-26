import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/login';
import Home from './screens/home';

export default function Bottomtabs() {

  const Tabs = createBottomTabNavigator({

  })
  return (

    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Login" component={Login}/>
        <Tabs.Screen name="Home" component={Home}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}