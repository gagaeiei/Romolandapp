import React from 'react';
import { View, Text, Image} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Facility from '../components/Facility';
import Booking from '../components/booking';
const Tab = createMaterialTopTabNavigator();


export default function FacilityTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#111d4a", tabBarInactiveTintColor: "gray", }} >
      <Tab.Screen
        name="Facility"
        component={Facility}
        options={{
            // tabBarLabel: "Pikachu",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="bolt" color={color} size={size} /> ),
            headerShown : false
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
            // tabBarLabel: "Charmander",
            // tabBarIcon: ({ color, size }) => ( <FontAwesome name="fire" color={color} size={size} /> ),
            headerShown : false
        }}
      />
    </Tab.Navigator>

            
    );
}