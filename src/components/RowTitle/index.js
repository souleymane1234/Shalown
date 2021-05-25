import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RowTitle = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 10,
        margin: 10
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#3ABDB7'}}>
        {title}
      </Text>

    </View>
  );
};

export default RowTitle;