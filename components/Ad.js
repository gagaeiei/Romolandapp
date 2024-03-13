import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Ad(props) {
    const adData = [
        { "id": "1",  "uri": "https://th.bing.com/th/id/R.c875083cf80d963717a86c399392be58?rik=FBFL3Y2ylEM4BQ&pid=ImgRaw&r=0" },
        { "id": "2", "uri": "https://beeclean.app/assets/images/webog-1.jpg" },
        { "id": "3",  "uri": "https://ddq1mzvkg4fn7.cloudfront.net/2023/03/Untitled-1-01.jpg" },
        { "id": "4",  "uri": "https://th.bing.com/th/id/R.20b703f8d062f2a455206d0751428b2b?rik=lx9OOq7jgYAJ6w&pid=ImgRaw&r=0" },
    ];

    return (
        <View style={props.style}>
            <View>

                <FlatList
                    horizontal={true}
                    data={adData}
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

 