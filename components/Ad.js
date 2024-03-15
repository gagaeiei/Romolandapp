import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";


export default function Ad(props) {
    const tours = [
        [
            { "id": "1",  "uri": "https://raw.githubusercontent.com/gagaeiei/Romolandapp/master/assets/Ad/Ad1.jpg" },
            { "id": "2", "uri": "https://raw.githubusercontent.com/gagaeiei/Romolandapp/master/assets/Ad/Ad2.jpg" },
            { "id": "3",  "uri": "https://raw.githubusercontent.com/gagaeiei/Romolandapp/master/assets/Ad/Ad3.png" },
            ]
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/gagaeiei/Romolandapp/master/image/ad.js');
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

            <View>
                <Text style={{ fontSize: 20 }}>Tour</Text>
                <Text style={{ color: "gray", marginVerical: 10 }}>Let find out What most interesting things</Text>
                <FlatList
                    horizontal={true}
                    //data={tours}
                    data={onlineTours}
                    renderItem={
                        ({ item, index }) => {
                            console.log(item, index, item.uri);
                            return (
                                <View style={{ marginRight: 10 }}>
                                    <Image style={{ flex: 1, resizeMode: "cover", width: 200, height: 200, borderRadius: 10 }} source={{ uri: item.uri }}>
                                    </Image>
                                    <View style={{
                                        marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10
                                    }}>
                                        <Text style={{ fontSize: 20, color: "white" }}> {item.title}</Text>
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