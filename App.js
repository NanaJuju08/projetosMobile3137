import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/login';
import Home from './screens/home';
import Feed from './screens/feed';
import Feed2 from './screens/feed02';
import Counter from './screens/counter';
import Produtos from './screens/products';
import Cadastro from './screens/cadastro';
import CadastrarProdutos from './screens/cadastrarProdutos';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';


function BottomTabs() {

  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
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

        <Tabs.Screen name="Counter" component={Counter} options={{
          tabBarIcon: () => (
            <MaterialIcons name="123" size={25} color="#A7D477" />
          )
        }}/>

        <Tabs.Screen name="Produtos" component={Produtos} options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-cart" size={25} color="#A7D477" />
          )
        }}/>

        <Tabs.Screen name="Cadastro Produtos" component={CadastrarProdutos} options={{
          tabBarIcon: () => (
            <MaterialIcons name="upload" size={25} color="#A7D477" />
          )
        }}/>
      </Tabs.Navigator>
  )
}
export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen options={{headerShown: false}} name='HomeTab' component={BottomTabs}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
