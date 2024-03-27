import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import MaterialCommunityIcons

export default function NewVisitor() {
    return (
        <View style={{ backgroundColor: "#bbe5ed", flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, width: 50, height: 300, marginTop: 100 }} source={require("C:/Users/HP/Romolandapp/assets/image/3.png")} />
            </View>

            <Text style={{ fontSize: 17, textAlign: "center" }}>You have no Visitor yet.</Text>

            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginBottom: 20 ,marginTop:130}}>
                <View style={{ backgroundColor: "white", width: 500, height: 120, justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity
                        style={{backgroundColor: "#111d4a",padding: 10,borderRadius: 5,flexDirection: "row",marginLeft:60,width:400,height:50}}
                        onPress={() => { }} >
                            <View style={{flexDirection:"row",marginLeft:140}}>
                        <MaterialCommunityIcons name="line-scan" size={24} color="white" />
                        <Text style={{ color: "white", marginLeft: 5,textAlign:"center",fontSize:15,marginTop:2 }}>Scan E-Stamp</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

