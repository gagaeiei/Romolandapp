import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Facility(props) {
   
    const [onlineTours, setOnlineTours] = useState([]);

    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/gagaeiei/Romolandapp/master/image/room.js');
            let data = await promise.json();
            console.log("Loaded Data:", data);
            // SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);

    console.log("Online Tours:", onlineTours);

    return (
        

            <View >
                {/* View ก้อนที่ 1 */}
                <View style={{ flexDirection: "row", backgroundColor: "white", padding: 15 }}>
                    <TouchableOpacity >
                        <AntDesign name="leftcircleo" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, textAlign: "center", flexDirection: "row", marginLeft: 110 }} >Facility Booking</Text>
                </View>
                {/* View ก้อนที่ 2 */}
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: "#111d4a", backgroundColor: "white", width: 250, height: 60, marginLeft: -15 }}>
                        <Text style={{ fontSize: 20, textAlign: "center", color: "#111d4a", marginTop: 15 }} >Facility List</Text>

                    </View>
                    {/* View ก้อนที่ 3 */}
                    <View style={{ backgroundColor: "white", width: 250, height: 60, marginLeft: -15 }}>
                        <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15 }} >My Booking</Text>
                    </View>
                </View>
                <View style={{ marginTop: 15 }}></View>
        <View style={props.style}>
        <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 10 }}>
                        <Image style={{ flex: 1, resizeMode: "cover", width: 200, height: 200, borderRadius: 10 }} source={{ uri: item.uri }} />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            </View>
        </View>

    );
}