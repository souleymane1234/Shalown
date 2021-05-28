import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
  Picker
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import Paiment from '../../assets/svg/Paiment'
import PickerNumber from '../../components/PickerNumber'
class TypePaimentOrgScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Icon
              style={{color: '#3ABDB7'}}
              size={30}
              name="arrow-left-circle-outline"
              pack="material"
            />
          </TouchableOpacity>
          <Image source={require('../../assets/1.png')} style={{top: -20}} />
          <View style={{flexDirection: 'row'}}>
            <Icon name="bell" size={30} color="#3ABDB7" />
            <Icon
              name="account-circle"
              size={30}
              color="#602873"
              pack="material"
            />
          </View>
        </View>
        <View style={{margin: 10}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', margin: 10}}>
                Choisissez une méthde de payement
            </Text>
        </View>
        <View style={{}}>
        <ScrollView horizontal={true} style={{}}>
            <View style={{margin: 10, flexDirection: 'row', }}>
            <Image source={require('../../assets/orange.jpg')} style={{height: 50, width: 100, borderRadius: 10 }} />
            <Image source={require('../../assets/mtn.jpg')} style={{height: 50, width: 100,  marginHorizontal: 10, borderRadius: 10 }} />
            <Image source={require('../../assets/moov.png')} style={{height: 50, width: 100, borderRadius: 10 }} />
            <Image source={require('../../assets/visa.png')} style={{height: 50, width: 100, borderRadius: 10, marginHorizontal: 10 }} />
            <Image source={require('../../assets/mcard.png')} style={{height: 50, width: 100, borderRadius: 10 }} />
            </View>

        </ScrollView>
        </View>
        <Paiment style={{alignSelf: 'center'}}/>
        <View style={{flexDirection: 'row'}}>
            <PickerNumber/>
            <Input
  placeholder='EX: 0701020304'
  containerStyle={{
      top: 10,
      
  }}
/>

        </View>
        <View style={{width: '84%', alignSelf: 'center'}}>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => console.log('pressed')}>
              <Text style={styles.customBtnBGText}>Payer</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
}

export default TypePaimentOrgScreen;
