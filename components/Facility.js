import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Facility(props) {
    const Event = [
        { "id": "1", "title": "Meeting Room", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg", "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "2", "title": "Workshop Room", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg", "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "3", "title": "Workshop 2", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg", "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "4", "title": "Workshop 3", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg", "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "5", "title": "Theater Room", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "place": "Building D", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "6", "title": "Music Room", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "place": "Building B", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "7", "title": "Pool Table", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "place": "Building C", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "8", "title": "Studio Room", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "place": "Building B", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> },
        { "id": "9", "title": "Fitness Room", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "place": "Building C", "Location": <Entypo name="location" size={18} color="#111d4a" />, "emoji": <AntDesign name="right" size={24} color="#111d4a" /> }
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
                                                {/* View ก้อนที่ photo */}
                                                <View style={{ flexDirection: "column" }}>
                                                    <View style={{
                                                        marginTop: 6
                                                        , marginLeft: 7
                                                    }}>
                                                        <Image style={{ width: 100, height: 90, borderRadius: 10 }} source={{ uri: item.uri }}></Image></View>
                                                </View>
                                                {/* View ก้อนที่ text */}
                                                <View style={{ flexDirection: "column", marginTop: 10 }}>
                                                    <Text style={{ fontSize: 18, color: "black", marginLeft: 20, marginTop: 5 }}> {item.title}</Text>
                                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                                        <Text style={{ fontSize: 12, color: "gray", marginLeft: 22 }}>{item.Location}</Text>
                                                        <Text style={{ fontSize: 14, color: "gray", marginLeft: 5 }}>{item.place}</Text>
                                                        <Text style={{ justifyContent: "flex-end", marginLeft: 150, marginVertical: -12 }}>{item.emoji}</Text>
                                                    </View>
                                                </View >

                                            </View>
                                        </View>
                                
                              
                           
                            );
                        }
                    
                }

                keyExtractor={item => item.id}
                />

            </View>
        </View>

    );
}
