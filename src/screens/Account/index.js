import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import Google from '../../assets/svg/Google';
import Facebook from '../../assets/svg/Facebook';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';

class AccountScreen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };
  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 5000);
  }
  goToLoginScreen = () => {
    this.props.navigation.navigate('LoginScreen');
  };
  goToRegisterScreen = () => {
    this.props.navigation.navigate('RegisterScreen');
  };
  render() {
    const { count } = this.state;
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
          
        <Animatable.View animation="zoomIn"style={styles.Logo}>
          <Image
          animation="zoomIn"
            source={require('../../assets/Groupe.png')}
            style={{ justifyContent: 'center', alignSelf: 'center' }}
            
          />
        </Animatable.View>
        
      </View>
    );
    if (this.state.isVisible === true ? Splash_Screen : null) {
      return <View style={styles.MainContainer}>{Splash_Screen}</View>;
    } else {
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
}

export default AccountScreen;
