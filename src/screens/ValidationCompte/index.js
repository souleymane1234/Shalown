import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import SvgConfimationScreen from '../../assets/svg/SvgConfimationScreen';
import CodeValidator from '../../components/CodeValidator';
import {ScrollView} from 'react-native-gesture-handler';
import CountDown from 'react-native-countdown-component';

class ValidationCompteScreen extends Component {

  goToSlidesScreen = () => {
    this.props.navigation.navigate('SlidesScreen');
  };
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{flex: 3}}>
          <SvgConfimationScreen style={{alignSelf: 'center', top: 20}} />
        </View>
        <View style={{flex: 2, margin: 20}}>
          <Text style={{fontSize: 28}}>Verifiez votre Email</Text>
          <Text style={{marginBottom: 20}}>
            Nous vous avons envoyé le code a 4 chiffres
          </Text>
          <Text>Entrez le code</Text>
          <View
            style={{
              backgroundColor: 'white',
              width: '70%',
              alignSelf: 'center',
            }}>
            <CodeValidator style={{}}/>
            <CountDown
        until={60 * 1 + 0}
        size={30}
        onFinish={() => alert('Délai expiré')}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: 'red'}}
        timeToShow={['M', 'S']}
        timeLabels={{}}
      />
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => this.goToSlidesScreen()}>
              <Text style={styles.customBtnBGText}>Continuer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignSelf: 'center',
            height: 100,
          }}>
          <View style={{top: 50, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>
              Vous n'avez pas recu le code ?
            </Text>
            <Text style={{fontWeight: 'bold', color: '#3ABDB7'}}>
              {' '}
              Renvoyer
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ValidationCompteScreen;
