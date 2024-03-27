import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Invite() {


   
        const [text, setText] = useState('');

        useEffect(() => {
            retrieveText();
        }, []);
    
        const retrieveText = async () => {
            try {
                const savedText = await AsyncStorage.getItem('savedText');
                if (savedText !== null) {
                    // If there is saved text, set it in the state
                    setText(savedText);
                }
            } catch (error) {
                console.error('Error retrieving text from AsyncStorage:', error);
            }
        };
    
        const saveText = async () => {
            try {
                // Save the text entered by the user into AsyncStorage
                await AsyncStorage.setItem('savedText', text);
                console.log('Text saved successfully!');
            } catch (error) {
                console.error('Error saving text to AsyncStorage:', error);
            }
        };
    
        return (
            <View style={{ flex: 1,backgroundColor: "#bbe5ed" }}>
             <View style={{marginHorizontal:20,marginVertical:20}}>
                <View>
                <Text  style={{fontSize:20,color:"#111d4a"}}>Visitor Detail</Text>
                <Text style={{fontSize:15,color:"gray"}}>This QR Code can be used for enter-exit only 1 time and can be used withn the specified date only.</Text>
                </View>
                <View style={{marginTop:20}} >
                    <Text> Visitor Name</Text>
                <TextInput
                    style={{ height: 40, width: 410, borderColor: 'gray', marginBottom: 20, padding: 10,borderBottomWidth:1 ,fontSize:17}}
                    placeholder="Enter name"
                    onChangeText={setText}
                    value={text}
                    multiline={true}
                />
                 </View>
                 <View style={{marginTop:20}} >
                    <Text> License plate</Text>
                <TextInput
                    style={{ height: 40, width: 410, borderColor: 'gray', marginBottom: 20, padding: 10,borderBottomWidth:1 ,fontSize:17}}
                    placeholder="Enter a 4 digit of license plate"
                    onChangeText={setText}
                    value={text}
                    multiline={true}
                />
                 </View>
                 <View style={{marginTop:20}} >
                    <Text>Phone plate</Text>
                <TextInput
                    style={{ height: 40, width: 410, borderColor: 'gray', marginBottom: 20, padding: 10,borderBottomWidth:1 ,fontSize:17}}
                    placeholder="Enter phone number"
                    onChangeText={setText}
                    value={text}
                    multiline={true}
                />
                 </View>
                 <View style={{marginTop:20}} >
                    <Text>Visitor date</Text>
                <TextInput
                    style={{ height: 40, width: 410, borderColor: 'gray', marginBottom: 20, padding: 10,borderBottomWidth:1 ,fontSize:17}}
                    placeholder="Choose a dete"
                    onChangeText={setText}
                    value={text}
                    multiline={true}
                />
                 </View >
                 <View style={{justifyContent:"flex-end"}}>
                 <Button title="Confirm" onPress={saveText} color="#111d4a" />

                </View>
            </View>
            </View>
        );
    }

      
