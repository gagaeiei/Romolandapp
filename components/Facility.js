import React from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Facility(props) {
    const facilities = [
        { "id": "1", "uri": "assets\room\ci.jpg" },
        { "id": "2", "uri": "https://nwscdn.com/media/catalog/product/p/o/pool-table.jpg", "title": "Facility 2" },
        { "id": "3", "uri": "https://th.bing.com/th/id/R.51958c44d61c13c13ee5287e9afc6848?rik=SW5pZktvbZ2dcw&pid=ImgRaw&r=0", "title": "Facility 3" },
        { "id": "4", "uri": "https://th.bing.com/th/id/R.9aaa02d89811cb5eec67acb9461606db?rik=wEBv2ZGEJ3JPSw&riu=http%3a%2f%2fpatreeda.com%2fwp-content%2fuploads%2f2018%2f07%2fcover-no-logo-2.jpg&ehk=kpEWEE31EV4ZQFl3ku%2b6rexv7jKqMCBmlFN7cugGsyk%3d&risl=&pid=ImgRaw&r=0", "title": "Facility 4" },
        { "id": "5", "uri": "https://cdn.mos.cms.futurecdn.net/zf2pQDZezqnKqFUsAYDGpM-2560-80.jpg", "title": "Facility 5" },
        { "id": "6", "uri": "https://th.bing.com/th/id/OIP.QTIBFfcPzPlfQGgzwP1l8gHaE0?w=1520&h=988&rs=1&pid=ImgDetMain", "title": "Facility 6" },
        { "id": "7", "uri": "https://th.bing.com/th/id/R.dae8f9e6cdd7da7ff6006b611c638580?rik=frCHF797kEYSuA&pid=ImgRaw&r=0", "title": "Facility 7" },
        { "id": "8", "uri": "https://ballantyneexecutivesuites.com/wp-content/uploads/2015/10/Depositphotos_13534536_original.jpg", "title": "Facility 8" }
    ];

    return (
        <View style={props.style}>
            <View>
                <FlatList
                    horizontal={true}
                    data={facilities}
                    renderItem={({ item }) => (
                        <View style={{ marginRight: 10 }}>
                            <Image
                                style={{ flex: 1, resizeMode: "cover", width: 200, height: 200, borderRadius: 10 }}
                                source={{ uri: item.uri }}
                            />
                            <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                <Text style={{ fontSize: 20, color: "white" }}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}
