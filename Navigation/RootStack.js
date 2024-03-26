import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Information from '../components/Information';
import MyUnit from '../components/MyUnit';
import Facility from '../components/Facility';

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name="Information" component={Information} options={{ title: 'Information' }} />
            <Stack.Screen name="MyUnit" component={MyUnit} options={{ title: 'My Unit' }} />
            <Stack.Screen name="Facility" component={Facility} options={{ title: 'Facility' }} />
        </Stack.Navigator>
    );
}

