import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'

const MesRendezVousItems = ({heure, name, image, spécialité, date, status}) => {
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
        <View style={{}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                    <Text style={{color: '#3ABDB7'}}>{date}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='clock-time-five' size={20} color="#3ABDB7"   pack= 'material'/>
                    <Text style={{marginHorizontal: 5, color: '#3ABDB7'}}>  {heure} </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='heart' size={20} color="red"   pack= 'material'/>
                    <Icon name='dots-vertical' size={20} color="#000" style={{marginHorizontal: 5}}   pack= 'material'/>
                </View>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', }}>
                <View>
                    <Image source={image} style={{width: 70, height: 70, borderRadius: 50}}/>
                </View>
            
            <View style={{marginHorizontal: 20, top: 5}}>
                <View style={{marginBottom: 20}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
                    <Text style={{fontSize: 16, marginBottom: 20}}>{spécialité}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name='map-marker-outline' size={20} color="#000" style={{marginHorizontal: -30}}   pack= 'material'/>
                        <Text style={{marginHorizontal: 40, color: '#707070', fontSize: 12}} >Porto-Novo Bénin</Text>
                    </View>
                    <Text style={{color: '#707070', fontSize: 12}}>Boulevard du cinquantenaire 3 Km</Text>
                    
                </View>
                <View style={{flexDirection: 'row', marginHorizontal: -10}}>
                    <Icon name='clock-time-twelve-outline' size={20} color="#3ABDB7"   pack= 'material'/>
                    <Text style={{marginHorizontal: 5,  color:"#3ABDB7", fontWeight: 'bold'}}>{status}</Text>
                </View>
            </View>

            </View>
        </View>
    </View>
  );
};

export default MesRendezVousItems;
