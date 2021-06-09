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
  TouchableHighlight,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomBar from '../BottomBar';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#D8D8D8'}}>
        <View style={styles.header}>
          <TouchableOpacity style={{}} onPress={() => this.goBack()}>
            <Icon
              style={{color: '#3ABDB7'}}
              size={30}
              name="arrow-left-circle-outline"
              pack="material"
            />
          </TouchableOpacity>
          <Image
            source={require('../../assets/1.png')}
            style={{top: -20}}
          />
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
        <View
          style={{
            backgroundColor: '#F3F3F3',
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
            top: -10,
          }}>
          <ScrollView>
            <View
              style={{
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 22}}>Profile</Text>
              <Icon name="cart" size={30} />
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image
                source={require('../../assets/profile.jpg')}
                style={{width: 100, height: 100, borderRadius: 50}}
              />
              <Text
                style={{
                  color: '#3ABDB7',
                  fontSize: 10,
                  marginBottom: 6,
                  textAlign: 'center',
                }}>
                Editer le profile
              </Text>
              <Text
                style={{fontSize: 16, textAlign: 'center', marginBottom: 6}}>
                Salut Kanania!
              </Text>
              <TouchableHighlight>
                <Text style={{fontSize: 12, color: 'red', textAlign: 'center'}}>
                  Se séconnecter
                </Text>
              </TouchableHighlight>
            </View>
            <View style={{marginBottom: 80}}>
              <TextInput
                style={styles.textInput_form}
                placeholder="Nom d'utilisateur"
                value="Kenania KOBENAN"
              />
              <TextInput
                style={styles.textInput_form}
                placeholder="Email"
                value="kobenankenania@gmail.com"
              />
              <TextInput
                style={styles.textInput_form}
                placeholder="Confirmation de Email"
                value="kobenankenania@gmail.com"
              />
              <TextInput
                style={styles.textInput_form}
                placeholder="Adresse"
                value="Cocody-Abidjan, COte d'ivoire"
              />
              <TextInput
                style={styles.textInput_form}
                placeholder="Mot de passe"
                value="12345678"
                secureTextEntry
              />
              <TextInput
                style={styles.textInput_form}
                placeholder="Confirmez mot de passe"
                value="12345678"
                secureTextEntry
              />
              <View>
                <TouchableOpacity
                  style={styles.customBtnBG}
                  onPress={() => console.log('ok')}>
                  <Text style={styles.customBtnBGText}>Sauvegarder</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
