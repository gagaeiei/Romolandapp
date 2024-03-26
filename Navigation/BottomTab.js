import React from 'react';
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../components/Home';
import Facility from '../components/Facility';
import Information from '../components/Information'; // Corrected the import name
import MyUnit from '../components/MyUnit'; // Corrected the import name
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Facility"
                component={Facility}
                options={{
                    tabBarLabel: "มด",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bug" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Information"
                component={Information}
                options={{
                    tabBarLabel: "นก",
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bird" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="My unit"
                component={MyUnit}
                options={{
                    tabBarLabel: "แมว",
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name="cat" color={color} size={size} />),
                }}
            />
        </Tab.Navigator>
    );
}

