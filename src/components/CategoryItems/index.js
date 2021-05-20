import {ImageBackground, TouchableOpacity, View, Image, Text} from 'react-native';
import React from 'react';

const CategoryItems = ({name, image}) => {
  return (
    <View
      style={{
        height: 'auto',
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#3ABDB7',
        borderRadius: 20,
        elevation: 5,
        padding: 9,
        margin: 10
      }}>
          <View>
              <Image source={image} style={{width: 100, height: 100}}/>
              <Text style={{textAlign: 'center'}}>{name}</Text>
          </View>
    </View>
  );
};

export default CategoryItems;
