import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from '../Stars'

const RendezVousItems = ({date, placeDispo, heureOuverture, pause, heureFermeture}) => {
  return (
    <View
      style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        padding: 9,
        margin: 10
      }}>
          <View>
              <View>
                <Text style={{margin: 10, fontWeight: 'bold', fontSize: 16}}>{date}</Text>
              </View>
              <View style={{}}>
                <Text style={{margin: 10, fontSize: 12}}>{placeDispo}</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 10, justifyContent: 'space-between'}}>
                  <View style={{borderWidth: 1, borderRadius: 5, width: 55, borderColor:'#000'}}>
                      <Text style={{alignSelf: 'center'}}>{heureOuverture}</Text>
                  </View>
                  <View style={{borderWidth: 1, borderRadius: 5, width: 55, borderColor:'#000', marginHorizontal: 20}}>
                      <Text style={{alignSelf: 'center'}}>{pause}</Text>
                  </View>
                  <View style={{borderWidth: 1, borderRadius: 5, width: 55, borderColor:'#000'}}>
                      <Text style={{alignSelf: 'center'}}>{heureFermeture}</Text>
                  </View>
                
              </View>
              
              
          </View>
    </View>
  );
};

export default RendezVousItems;
