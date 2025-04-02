import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/login';
import Home from './screens/home';
import Feed from './screens/feed';
import Feed2 from './screens/feed02';

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
        tabBarActiveBackgroundColor: "#FF748B",
        tabBarInactiveTintColor: "#A7D477",
        tabBarInactiveBackgroundColor: "#ffff",
        headerStyle: {
          backgroundColor:'#FF748B',
        },
        headerTintColor: '#ffff',
        //headerTitleAlign: 'center'
      }}>
        <Tabs.Screen name="Login" component={Login} options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={25} color="#A7D477" />
          )
        }}/>

        <Tabs.Screen name="Home" component={Home} options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={25} color="#A7D477" />
          )
        }}/>

        <Tabs.Screen name="Han" component={Feed} options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={25} color="#A7D477" />
          )
        }}/>

        
        <Tabs.Screen name="Minho" component={Feed2} options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={25} color="#A7D477" />
          )
        }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
