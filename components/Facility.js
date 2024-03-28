import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Facility(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/gagaeiei/Romolandapp/master/roomnew.json');
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
                
                
                <View style={{ backgroundColor:"#bbe5ed"}}>
                <FlatList
                    horizontal={false}
                    //data={tours}
                    data={onlineTours}
                    // data={Event}
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
