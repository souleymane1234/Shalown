import {
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StartComment from '../StarsComment';

const CommentaireItems = ({commentaire, name, date}) => {
  return (
    <View
      style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        padding: 9,
        margin: 10,
      }}>
      <View style={{}}>
        <StartComment />
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>{commentaire}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 12}}>{name}</Text>
        <Text style={{marginHorizontal: 20, fontSize: 12}}>{date}</Text>
      </View>
    </View>
  );
};

export default CommentaireItems;
