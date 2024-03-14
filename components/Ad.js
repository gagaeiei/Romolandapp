import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Ad(props) {
    const tours = [
        { "id": "1",  "uri": "https://github.com/gagaeiei/Romolandapp/blob/af512e139f48002822db2a44881c438cec1cd505/assets/Ad/Ad1.jpg" },
        { "id": "2", "uri": "https://github.com/gagaeiei/Romolandapp/blob/af512e139f48002822db2a44881c438cec1cd505/assets/Ad/Ad2.jpg" },
        { "id": "3",  "uri": "https://github.com/gagaeiei/Romolandapp/blob/af512e139f48002822db2a44881c438cec1cd505/assets/Ad/Ad3.png" }
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

                <FlatList
                    horizontal={true}
                    data={onlineTours}
                    renderItem={({ item }) => (
                        <View style={{ marginRight: -35,padding:30 }}>
                            <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                            
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

 