import React from 'react';
import { View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewVisitor from '../components/NewVisitor';
import Contacted from '../components/Contacted';
const Tab = createMaterialTopTabNavigator();


export default function VisitorTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#111d4a", tabBarInactiveTintColor: "gray", }} >
      <Tab.Screen
        name="NewVisitor"
        component={NewVisitor}
        options={{
            // tabBarLabel: "Pikachu",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="bolt" color={color} size={size} /> ),
            headerShown : false
        }}
      />
      <Tab.Screen
        name="Contacted"
        component={Contacted}
        options={{
            // tabBarLabel: "Charmander",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="fire" color={color} size={size} /> ),
            headerShown : false
        }}
      />
    </Tab.Navigator>

            
    );
}