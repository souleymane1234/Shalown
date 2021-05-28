import {ImageBackground, TouchableOpacity, View, Image, Text, Picker} from 'react-native';
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'



const PickerNumber = () => {
    const [selectedValue, setSelectedValue] = useState("225");
  return (
                    <View style={{backgroundColor: '#3ABDB7', width: 100, margin: 10, borderRadius: 10}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 100, backgroundColor: 'red' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="225" value="225" />
                        <Picker.Item label="226" value="226" />
                    </Picker>
                    </View>
  )
};



export default PickerNumber;
