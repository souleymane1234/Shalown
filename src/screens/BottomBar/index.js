import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

class BottomBar extends Component {
  constructor(props) {
    super(props);
  }
  goToPharmacieScreen() {
    this.props.navigation.navigate('PharmacieScreen');
  }
  goToHistoriqueScreen = () => {
    this.props.navigation.navigate('HistoriqueScreen');
  };
  goToContactScreen = () => {
    this.props.navigation.navigate('ContactScreen');
  };
  
  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.footerContentCentered}>
          <TouchableOpacity style={styles.footerFavContainer}>
            <Icon name="home" size={30} color="#A2A2A2" pack="material" />
            <Text style={{fontSize: 10}}>Accueil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContentCentered}>
          <TouchableOpacity
            style={styles.footerFavContainer}
            onPress={() => this.goToContactScreen()}>
            <Icon
              name="calendar-clock"
              size={30}
              color="#A2A2A2"
              pack="material"
            />
            <Text style={{fontSize: 10}}>Rendez-vous</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContentCentered}>
          <TouchableOpacity style={styles.footerVoiceContainer}>
            <Icon name="microphone" size={50} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContentCentered}>
          <TouchableOpacity style={styles.footerCartContainer}>
            <Icon name="chat-processing" size={30} color="#A2A2A2" />
            <Text style={{fontSize: 10}}>chat</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContentCentered}>
          <TouchableOpacity style={styles.footerCartContainer} onPress={() => this.goToHistoriqueScreen()}>
            <Icon name="history" size={30} color="#A2A2A2" />
            <Text style={{fontSize: 10}}>Historique</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BottomBar;
