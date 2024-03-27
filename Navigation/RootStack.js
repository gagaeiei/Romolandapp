import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons  } from '@expo/vector-icons';
import Home from '../components/Home';
import Information from '../components/Information';
import MyUnit from '../components/MyUnit';
import Facility from '../components/Facility';
import FacilityTab from './FaciltyTab';
import VisitorTab from './VisitorTab';
import { TouchableOpacity } from 'react-native';
import Invite from '../components/Invite';
const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            <Stack.Screen name="Information" component={Information} options={{ title: 'Information' }} />
            <Stack.Screen name="MyUnit" component={MyUnit} options={{ title: 'My Unit' }} />
            <Stack.Screen name="Facility" component={Facility} options={{ title: 'Facility' }} />
            <Stack.Screen name="FacilityTab" component={FacilityTab} options={{ title: 'Facility Booking' }} />
            <Stack.Screen name="Invite" component={Invite} options={{ title: 'Invite Visitor' }} />
            <Stack.Screen
                name="VisitorTab"
                component={VisitorTab}
                options={({ navigation }) => ({
                    title: 'Visitor',
                    headerRight: () => (
                        <Ionicons name="person-add-outline" size={24} color="black" style={{marginRight : 10}} onPress={()=>{ navigation.navigate("Invite"); }} />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

