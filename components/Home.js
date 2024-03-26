import React, { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    const [images, setImages] = useState([

        require('../assets/Ad/Ad1.jpg'),
        require('../assets/Ad/Ad2.jpg'),
    ])

    onPressButton = () => {
        console.log('Button pressed!');
        
    };

    return (
        <View style={{ flex: 1 }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, flexDirection: "row" }}>

                
                    <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#bbe5ed", justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="home-sharp" size={30} color="#111d4a"  onPress={()=>{ navigation.navigate("MyUnit"); }}/>
                    </View>
                

                <View style={{ flexDirection: "row", padding: 5, marginLeft: 10 }}>
                    <TouchableOpacity onPress={onPressButton} style={{backgroundColor: '#111d4a', padding: 10, borderRadius: 5 }} >
                        <Text style={{ color: 'white', fontSize: 16}}>Gaga</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
                   
                        <View style={{ marginTop: 10 }}>
                            <Ionicons name="notifications-outline" size={35} color="#111d4a" />
                        </View>
              

                        <View style={{ marginLeft: 10, marginTop: 10 }}>
                            <Ionicons name="chatbubbles-outline" size={35} color="#111d4a"  />
                        </View>
               
                </View>
            </View>
            {/* View ก้อนที่ 1.5 */}
            <View style={{  padding: 10, flexDirection: "row" }}></View>
            <View style={{ flexDirection: "row-reverse", padding: 5, marginLeft: 10  }}>
                    <View style={{ backgroundColor: '#111d4a', padding: 10, borderRadius: 5 }}>
                        
                        <Button title='168/444 Kave TU' />
                        </View>
                </View>


            {/* View ก้อนที่ 2 */}
            <View style={{ padding: 5 ,marginLeft:20}}>
                <Text style={{ fontSize: 20, color: '#111d4a' }}>My menu</Text>
            </View>

            {/* View ก้อนที่ 3 */}

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* แถวที่ 1 */}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10 }}>
                        
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <AntDesign name="inbox" size={60} color="#111d4a"/>
                                <Text>Percel</Text>
                            </View>
                        
                       
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <MaterialIcons name="list-alt" size={60} color="#111d4a" />
                                <Text>Billing</Text>
                            </View>
                      
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Ionicons name="megaphone-outline" size={60} color="#111d4a" />
                                <Text>Announcement</Text>
                            </View>
                        
                    </View>
                </View>
            </View>

            {/* View ก้อนที่ 4 */}

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* แถวที่ 2 */}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10 }}>
                        
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <MaterialCommunityIcons name="home-heart" size={60} color="#111d4a" onPress={()=>{ navigation.navigate("Facility"); }}/>
                                <Text>Facilities</Text>
                            </View>
                       
                      
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesome6 name="screwdriver-wrench" size={60} color="#111d4a" />
                                <Text>Repair</Text>
                            </View>
                     
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <AntDesign name="car" size={60} color="#111d4a" />

                                <Text>Visitor</Text>
                            </View>
                     
                    </View>
                </View>
            </View>

            {/* View ก้อนที่ 5 */}

            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* แถวที่ 3 */}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 10 }}>
                        <TouchableOpacity onPress={onPressButton}>
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Ionicons name="document-text-outline" size={55} color="#111d4a" />
                                <Text>Document</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressButton}>
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Ionicons name="people-outline" size={55} color="#111d4a" />

                                <Text>Resident</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPressButton}>
                            <View style={{ flexDirection: "column", borderRadius: 10, width: 100, height: 100, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Feather name="phone-call" size={35} color="#111d4a" />
                                <Text style={{ marginTop: 5 }}>Phonebook</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
            {/* View ก้อนที่ 6 */}
           
           


        </View>
    );
}
