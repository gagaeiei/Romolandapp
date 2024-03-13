import React, { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';




export default function Infomation() {
    onPressButton = () => {
        console.log('Button pressed!');

    };

    return (
        <View >
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection:"row",backgroundColor: "white", padding: 15 }}>
                <TouchableOpacity >
                        <AntDesign name="leftcircleo" size={30} color="black" />
                </TouchableOpacity>
            <Text style={{ fontSize: 25, textAlign: "center", flexDirection:"row",marginLeft:130 }} >Infomation</Text>
        </View>
                {/* View ก้อนที่ 2 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 5 }}>
            <View style={{ marginLeft: 10, width: 45, height: 45, borderRadius: 50, backgroundColor: "#bbe5ed", justifyContent: "center", alignItems: "center" }}>
                <Ionicons name="home-sharp" size={25} color="#111d4a" />
            </View>

            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>Gaga</Text>
                <Text style={{ fontSize: 13, color: '#111d4a', textAlign: "auto" }}>General Member</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 3 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 10 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <MaterialCommunityIcons name="home-account" size={40} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 5, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>My Unit</Text>
                <View style={{ marginLeft: 185 }}>
                    <Text style={{ fontSize: 15, color: 'gray', textAlign: "right" }}>168/444 Kave TU</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 4 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 10 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <MaterialIcons name="list-alt" size={30} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 12, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>My Purchase</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 5 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 5 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <MaterialCommunityIcons name="hand-heart-outline" size={30} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 12, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>My Service</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 6 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 10 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <MaterialCommunityIcons name="translate-off" size={30} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 12, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>Change Language</Text>
                <View style={{ marginLeft: 185 }}>
                    <Text style={{ fontSize: 15, color: 'gray', textAlign: "right" }}>English</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 7 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 5 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <MaterialCommunityIcons name="message-question-outline" size={30} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 12, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>Help</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 8 */ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 5 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <Entypo name="text-document" size={30} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 12, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>Teams and conditions/Consent withdrawal</Text>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', flex: 1 }}>
                <AntDesign name="right" size={24} color="#111d4a" />
            </View>
        </View>
    </TouchableOpacity>
    {/* View ก้อนที่ 9*/ }
    <TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: "flex-start", alignItems: 'center', height: 60, width: 450, backgroundColor: 'white', marginTop: 10 }}>
            <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 15 }}>
                <MaterialIcons name="exit-to-app" size={30} color="#111d4a" />
            </View>


            <View style={{ flexDirection: "row", marginLeft: 12, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 15, color: 'black', textAlign: "auto" }}>Sign Out</Text>

            </View>
        </View>
    </TouchableOpacity>


        </View >





    );
}
