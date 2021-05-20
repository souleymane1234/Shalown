import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'

const HopitalItems = ({name, image, location, adress, dispo}) => {
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
          <View>
              <View>
                  <Image source={image} style={{width: 200, height: 200, alignSelf: 'center', borderRadius: 20}}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{}}>{name}</Text>
                  <Icon name='checkbox-marked-circle' size={30} color="#36CF30"   pack= 'material'/>
              </View>
                <Text style={{fontSize: 14}}>{location}</Text>
              
              <View style={{flexDirection: 'row', margin: 10}}>
                <Start/>
                <Text style={{marginHorizontal: 20}}>(4.5)</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name='map-marker' size={30} color="#000"   pack= 'material'/>
                <Text style={{fontSize: 10, alignSelf: 'center'}}>{adress}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Icon name='clock-time-five' size={30} color="#000"   pack= 'material'/>
                <Text style={{fontSize: 10, alignSelf: 'center'}}>{dispo}</Text>
              </View>
              
              
          </View>
    </View>
  );
};

export default HopitalItems;
