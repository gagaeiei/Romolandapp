import React, { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';



export default function MyUnit() {
    onPressButton = () => {
        console.log('Button pressed!');

    };

    return (
        <View style={{flex:1,backgroundColor: "#bbe5ed"}}>
            
            {/* View ก้อนที่ 2*/}
            <View style={{ alignItems: "flex-start", marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: "black" }}>All:1</Text>
            </View>
            <TouchableOpacity >
                <View style={{ marginLeft: 290, marginTop: -27, flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "black" }}>All Properties</Text>
                    <AntDesign name="down" size={20} color="black" />
                </View>
            </TouchableOpacity>
            {/* View ก้อนที่ 3*/}
            <View style={{ alignItems: "flex-start", marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: "black" }}>Current house</Text>
            </View>

            {/* View ก้อนที่ 4*/}
            <View style={{ height: 100, width: 410, borderRadius: 8, borderWidth: 2, borderColor: '#111d4a', backgroundColor: 'white', marginLeft: 20, marginTop: 15 }}>
                <View style={{ borderBottomWidth: 0.5, borderBottomEndRadius: 25, borderBottomStartRadius: 20 }}>
                    <View style={{ marginTop: 5, marginLeft: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <MaterialCommunityIcons name="home-account" size={40} color="#111d4a" />
                            <Text style={{ fontSize: 20, color: "black", marginLeft: 7, marginTop: 5 }}>168/444</Text>
                        </View>
                        <View style={{ marginHorizontal: 20 }}>
                            <Fontisto name="smiling" size={24} color="green" />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontSize: 20, color: "black", marginLeft: 25, marginVertical: 10 }}>Kave TU</Text>
                </View>
            </View >
               {/* View ก้อนที่ 5*/}
               <View style={{ alignItems: "flex-start", marginLeft: 21, marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: "black" }}>Other house</Text>
            </View>
        </View >





    );
}