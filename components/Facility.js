import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Facility(props) {
    const Facili = [
        { "id": "1", "uri": "https://github.com/gagaeiei/Romolandapp/blob/a14c99b44cf76c2296284acab2cb3aab411d548a/assets/room/fit.jpg" },
      
    ];

    return (
        <View style={props.style}>
            <View>

                <FlatList
                    horizontal={true}
                    data={Facili}
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

 