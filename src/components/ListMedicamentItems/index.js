import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'

const ListMedicamentsItems = ({image, name, prix, image2, name2, prix2}) => {
  return (
    <View
      style={{
        flexDirection: 'row', alignSelf: 'center'
      }}>
          <View       style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        padding: 9,
        margin: 10,
        width: 150,
      }}>
              <View>
              <Image source={image} style={{width: 100, height: 100, alignSelf: 'center'}}/>
              </View>
              <View style={{ alignSelf: 'center'}}>
                <Text style={{}} style={{ fontSize: 18}}>{name}</Text> 
              </View>
              <View style={{flexDirection: 'row', margin: 10, justifyContent: 'space-between'}}>
                  <View style={{}}>
                      <Text style={{alignSelf: 'center', color: '#3ABDB7'}}>{prix}</Text>
                  </View>
                  <View style={{marginHorizontal: 20}}>
                  <Icon name='cart' size={20} color="#3ABDB7"   pack= 'material'/>
                  </View>
                
              </View>
              
              
          </View>
          {/* deux */}
          <View       style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        padding: 9,
        margin: 10,
        width: 150,
      }}>
              <View>
              <Image source={image2} style={{width: 100, height: 100, alignSelf: 'center'}}/>
              </View>
              <View style={{ alignSelf: 'center'}}>
                <Text style={{}} style={{ fontSize: 18}}>{name2}</Text> 
              </View>
              <View style={{flexDirection: 'row', margin: 10, justifyContent: 'space-between'}}>
                  <View style={{}}>
                      <Text style={{alignSelf: 'center', color: '#3ABDB7'}}>{prix2}</Text>
                  </View>
                  <View style={{marginHorizontal: 20}}>
                  <Icon name='cart' size={20} color="#3ABDB7"   pack= 'material'/>
                  </View>
                
              </View>
              
              
          </View>
    </View>
  );
};

export default ListMedicamentsItems;
