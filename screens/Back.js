import React from "react";
import { View } from "react-native";
import Home from "../components/Home";
import Infomation from "../components/Information";
import MyUnit from "../components/MyUnit";
import Ad from "../components/Ad";
import Facility from "../components/Facility";
import Phonebook from "../components/Phonebook";



export default function Back() {
    return (
        <View style={{ flex: 1 , backgroundColor : '#bbe5ed' }}>
          
       
          <Phonebook/>
        
          

        </View>
    );
}