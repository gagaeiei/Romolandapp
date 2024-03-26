import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Facility from '../components/Facility';
import MyUnit from '../components/MyUnit';
import Home from '../components/Home';
import Infomation from '../components/Information';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Facility" component={Facility} />
            <Stack.Screen name="MyUnit" component={MyUnit} />
            <Stack.Screen name="Information" component={Infomation} />
        </Stack.Navigator>
    );
}
