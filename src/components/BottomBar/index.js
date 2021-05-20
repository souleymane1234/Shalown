import React, {Component} from 'react'
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style'

class BottomBar extends Component {
    goToRendezVousScreen = () => {
        this.props.navigation.navigate('RendezVousScreen');
      };
    render () {
        return(
                    
        <View style={styles.footerContainer}>
            <View style={styles.footerContentCentered}>
                <TouchableOpacity style={styles.footerFavContainer}>
                <Icon name='home' size={30} color="#A2A2A2"  pack= 'material'/>
                <Text style={{fontSize: 10}}>Accueil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContentCentered}>
                <TouchableOpacity style={styles.footerFavContainer}>
                    <Icon name='calendar-clock' size={30}  color="#A2A2A2"/>
                    <Text style={{fontSize: 10}}>Rendez-vous</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContentCentered}>
                <TouchableOpacity style={styles.footerVoiceContainer}>
                    <Icon name='microphone' size={30}  color="#FC5185"/>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContentCentered}>
                <TouchableOpacity style={styles.footerCartContainer}>
                    <Icon name='chat-processing' size={30}  color="#A2A2A2"/>
                    <Text style={{fontSize: 10}}>chat</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerContentCentered}>
                <TouchableOpacity style={styles.footerCartContainer}>
                    <Icon name='history' size={30}  color="#A2A2A2"/>
                    <Text style={{fontSize: 10}}>Historique</Text>
                </TouchableOpacity>
            </View>
        </View>

        )
    }
}

export default BottomBar