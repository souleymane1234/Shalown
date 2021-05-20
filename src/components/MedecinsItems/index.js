import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'

const MedecinsItems = ({image, name, specialité}) => {
  return (
    <View
      style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        padding: 9,
        margin: 10,
        flexDirection: 'row'
      }}>
              <View>
                <Image source={image} style={{width: 70, height: 70, borderRadius: 50, margin: 1, top: 5}}/>
              </View>
              <View style={{margin: 10}}>
                <Text style={{ fontSize: 21, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{ fontSize: 18}}>{specialité}</Text>
              </View>
    </View>
  );
};

export default MedecinsItems;
