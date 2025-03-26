import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/login';
import Home from './screens/home';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Bottomtabs() {

  const Tabs = createBottomTabNavigator({

  })
  return (

    <NavigationContainer>
      <Tabs.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: "#ffff",
        tabBarActiveBackgroundColor: "#E05388",
        tabBarInactiveTintColor: "#E05388",
        tabBarInactiveBackgroundColor: "#ffff",
        headerStyle: {
          backgroundColor:'#E05388',
        },
        headerTintColor: '#ffff',
        //headerTitleAlign: 'center'
      }}>
        <Tabs.Screen name="Login" component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={25} color="#5CE660" />
          )
        }}/>
        <Tabs.Screen name="Home" component={Home}options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={25} color="#5CE660" />
          )
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
