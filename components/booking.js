import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Booking(props) {
    const Event = [
        { "id": "1", "title": "Meeting Room", "uri": <FontAwesome6 name="house-user" size={50} color="white" />, "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "dateday": "12/03/24", "dateemoji": <Fontisto name="date" size={18} color="#111d4a" />, "status": <AntDesign name="smileo" size={24} color="green" />, },
        { "id": "2", "title": "Workshop Room", "uri": <FontAwesome5 name="laptop-house" size={50} color="white" />, "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "dateday": "12/03/24", "dateemoji": <Fontisto name="date" size={18} color="#111d4a" />, "status": <AntDesign name="smileo" size={24} color="green" />, },
        { "id": "3", "title": "Workshop 2", "uri": <FontAwesome5 name="laptop-house" size={50} color="white" />, "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "dateday": "01/03/24", "dateemoji": <Fontisto name="date" size={18} color="#111d4a" />, "status": <AntDesign name="smileo" size={24} color="green" />, },
        { "id": "4", "title": "Workshop 3", "uri": <FontAwesome5 name="laptop-house" size={50} color="white" />, "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "dateday": "30/03/24", "dateemoji": <Fontisto name="date" size={18} color="#111d4a" />, "status": <AntDesign name="frowno" size={24} color="red" /> },

    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);


    return (
        <View style={props.style}>

            <View style={{ backgroundColor: "#bbe5ed" }}>

                <FlatList
                    horizontal={false}
                    //data={tours}
                    //data={onlineTours}
                    data={Event}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (

                                <View style={{ marginLeft: 24, marginTop: 10 }}>
                                    {/* View ก้อนที่ 1 */}
                                    <View style={{ flexDirection: 'row', borderRadius: 10, borderWidth: 2, borderColor: "#111d4a", width: 400, height: 105, backgroundColor: "white" }}>
                                        {/* View ก้อนที่ 1 */}
                                        <View style={{ flexDirection: "column" }}>
                                            <View style={{ marginTop: 6, marginLeft: 7, width: 100, height: 90, borderRadius: 10, backgroundColor: "#111d4a" }}>
                                                <Text style={{}}>{item.uri}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "column", marginTop: 10 }}>
                                            <Text style={{ fontSize: 18, color: "black", marginLeft: 20, marginTop: 2.5 }}> {item.title}</Text>
                                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                                <Text style={{ color: "gray", marginLeft: 22 }}>{item.Location}</Text>
                                                <Text style={{ fontSize: 14, color: "gray", marginLeft: 5 }}>{item.place}</Text>
                                                <View style={{ flexDirection: "row", marginTop: 25, marginHorizontal: -85 }}>
                                                    <Text style={{ color: "gray" }}>{item.dateemoji}</Text>
                                                    <Text style={{ fontSize: 12, color: "gray", marginHorizontal: 5 }}>{item.dateday}</Text>
                                                </View>
                                                <View style={{ flexDirection: "column", marginTop: -30, marginHorizontal: 190 }}>
                                                    <Text style={{}}>{item.status}</Text>

                                                </View>
                                            </View>

                                        </View >


                                    </View>

                                </View>


                            );
                        }

                    }

                    keyExtractor={item => item.id}
                />
                <View style={{ backgroundColor: "#bbe5ed", width: 300, height: 300 }}></View>

            </View>
        </View>

    );
}
