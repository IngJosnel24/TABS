import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';



import Settings from './Screen/Settings';
import Home from './Screen/Home';
import Users from './Screen/Users';
import DetailHome from './Screen/DetailHome';
import AnotherDatailsHome from './Screen/AnotherDatailsHome';
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: 'purple',
        }}  
      >
        <Tab.Screen name='HomeScreen' component={StackDetailHome}
          options={{
            tabBarLabel: 'HomeScreen',
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" size={26} color="black" />
            ),
          }}
        />
        <Tab.Screen name='Setting' component={Settings}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
             <Fontisto name="player-settings" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen name='Users' component={Users}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

const DetailsHomeNavigator = createStackNavigator();

function StackDetailHome() {
  return (
    <DetailsHomeNavigator.Navigator
      initialRouteName="Home"
    >
      <DetailsHomeNavigator.Screen
        name="Home"
        component={Home}
      />
      <DetailsHomeNavigator.Screen
        name="DetailHome"
        component={DetailHome}
      />
      <DetailsHomeNavigator.Screen
        name="AnotherDatailsHome"
        component={AnotherDatailsHome}
      />
    </DetailsHomeNavigator.Navigator>
  );
}


  
export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
