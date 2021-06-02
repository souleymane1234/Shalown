import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Google from '../../assets/svg/Google';
import Facebook from '../../assets/svg/Facebook';
import Icon from 'react-native-vector-icons/FontAwesome5';

class AccountScreen extends Component {
  goToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  goToRegisterScreen = () => {
    this.props.navigation.navigate('RegisterScreen');
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignSelf: 'center', top: 20}}>
          <Image source={require('../../assets/Groupe.png')} />
        </View>
        <View style={styles.textBienvenueView}>
          <Text style={styles.textBienvenue}>Bienvenue</Text>
          <Text style={styles.textConnexion}>
            veulliez vous connecter ou vous {'\n'} inscrire pour continuer a
            utiliser {'\n'} notre application
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.customBtnBGConnecter}
            onPress={() => this.goToLoginScreen()}>
            <Text style={styles.customBtnTextConnecter}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.customBtnBGInscrire}
            onPress={() => this.goToRegisterScreen()}>
            <Text style={styles.customBtnTextInscrire}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            alignSelf: 'center',
            justifyContent: 'space-around',
            width: '50%',
            top: 10,
          }}>
          <Facebook />
          <Text style={{alignSelf: 'center'}}>OU</Text>
          <Google />
        </View>
      </SafeAreaView>
    );
  }
}

export default AccountScreen;
