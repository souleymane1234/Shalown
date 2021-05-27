import {ImageBackground, TouchableOpacity, View, Image, Text, Picker} from 'react-native';
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'



const AchatMedicamentItems = ({namePharma, nameMedicament, image, quantité, prix}) => {
    const [selectedValue, setSelectedValue] = useState("1");
  return (
    <View
      style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 5,
        padding: 9,
        margin: 10
      }}>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image source={image} style={{width: 100, height: 100, margin: 10}}/>
                </View>
            
                <View style={{margin: 10}}>
                    <View style={{}}>
                        <Text style={{fontSize: 8, color: '#707070'}}>{namePharma}</Text>
                        <Text style={{fontSize: 22, fontWeight: 'bold' }}>{nameMedicament}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#707070', fontSize: 12}} >{quantité}</Text>
                        </View>

                        
                    </View>
                    <View style={{}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 80 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                    </Picker>
                    </View>
                </View>
                <View style={{margin: 10}}>
                    <View style={{marginBottom: 25}}>
                        <TouchableOpacity onPress={() => console.log('ok')} style={{flexDirection:'row'}}>
                            <Text style={{color: 'red', fontSize: 12}}>Supprimer</Text>
                            <Icon name='heart' size={12} color="red" style={{top: 3, marginHorizontal: 2}}   pack= 'material'/>
                        </TouchableOpacity>
                        
                    </View>
                    
                    <Text style={{fontWeight: 'bold'}}>{prix}</Text>
                </View>

            </View>
    </View>
  );
};



export default AchatMedicamentItems;
