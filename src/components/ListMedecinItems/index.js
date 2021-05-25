import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'

const ListMedecinItems = ({image, name, spécialité, hopital, dispo}) => {
  return (
    <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{height: 'auto', marginHorizontal: 10,marginVertical: 5, backgroundColor: '#fff', borderRadius: 10,elevation: 5, padding: 9,  margin: 10, width: '45%'}}>
                <View>
                    <Image source={image} style={{width: 150, height: 150, borderRadius: 10, alignSelf: 'center'}}/>
                </View>
                <View style={{  flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{}} style={{ fontSize: 14, fontWeight: 'bold'}}>{name}</Text>
                    <Icon name='checkbox-marked-circle' size={20} color="#36CF30"   pack= 'material'/>
                </View>
                <View style={{ justifyContent: 'space-between'}}>
                    <View style={{}}>
                        <Text style={{ color: '#000', marginBottom: 2}}>{spécialité}</Text>
                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                            <Icon name='checkbox-marked-circle' size={12} color="#3ABDB7"   pack= 'material'/>
                            <Text style={{ color: '#3ABDB7', fontSize: 10, marginHorizontal: 5}}>{hopital}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Start/>
                        <Text style={{marginHorizontal: 10}}>(4.5)</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='clock-time-five' size={18} color="#3ABDB7"   pack= 'material'/>
                            <Text style={{fontSize: 8, alignSelf: 'center', color: '#3ABDB7', marginHorizontal: 5}}>{dispo}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='phone-hangup' size={18} color="red"   pack= 'material'/>
                            <Icon name='video-outline' size={18} color="#36CF30" style={{marginHorizontal: 5}}   pack= 'material'/>
                        </View>
                    </View>
                </View>
              
              
            </View>
          {/* deux */}
            <View style={{ height: 'auto',marginHorizontal: 10, marginVertical: 5, backgroundColor: '#fff',borderRadius: 10,elevation: 5, padding: 9, margin: 10, width: '45%' }}>
                <View>
                    <Image source={image} style={{width: 150, height: 150, borderRadius: 10, alignSelf: 'center'}}/>
                </View>
                <View style={{  flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{}} style={{ fontSize: 14, fontWeight: 'bold'}}>{name}</Text>
                    <Icon name='checkbox-marked-circle' size={20} color="#36CF30"   pack= 'material'/>
                </View>
                <View style={{ justifyContent: 'space-between'}}>
                    <View style={{}}>
                        <Text style={{ color: '#000', marginBottom: 2}}>{spécialité}</Text>
                        <View style={{flexDirection: 'row', marginBottom: 5}}>
                            <Icon name='checkbox-marked-circle' size={12} color="#3ABDB7"   pack= 'material'/>
                            <Text style={{ color: '#3ABDB7', fontSize: 10, marginHorizontal: 5}}>{hopital}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 5}}>
                        <Start/>
                        <Text style={{marginHorizontal: 10}}>(4.5)</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='clock-time-five' size={18} color="#3ABDB7"   pack= 'material'/>
                            <Text style={{fontSize: 8, alignSelf: 'center', color: '#3ABDB7', marginHorizontal: 5}}>{dispo}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='phone-hangup' size={18} color="red"   pack= 'material'/>
                            <Icon name='video-outline' size={18} color="#36CF30" style={{marginHorizontal: 5}}   pack= 'material'/>
                        </View>
                    </View>
                </View>
            </View>
    </View>
  );
};

export default ListMedecinItems;
