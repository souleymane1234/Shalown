import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput
} from 'react-native'
import styles from './style'
import SvgConfimationScreen from '../../assets/svg/SvgConfimationScreen'
import CodeValidator from '../../components/CodeValidator'

class ValidationCompteScreen extends Component {
    goToAccueilScreen = () => {
        this.props.navigation.navigate('AccueilScreen');
      };
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{ flex: 3 }}>
                    <SvgConfimationScreen style={{alignSelf: 'center', top: 20}}/>

                </View>
                <View style={{ flex: 2, margin: 20 }}>
                    <Text style={{fontSize: 28}}>Verifiez votre Email</Text>
                    <Text style={{marginBottom: 20}}>Nous vous avons envoyé le code a 4 chiffres</Text>
                    <Text>Entrez le code</Text>
                    <View style={{backgroundColor: 'white', width: '70%', alignSelf: 'center'}}>
                        <CodeValidator/>
                        <Text style={{textAlign:'center', top: 25}}>00:50</Text>
                        <TouchableOpacity
                            style={styles.customBtnBG}
                            onPress={() => this.goToAccueilScreen()}
                        >   
                            <Text style={styles.customBtnBGText}>Continuer</Text>

                        </TouchableOpacity>
                    </View>

                    

                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', top: 40 }}>
                    <Text style={{fontWeight: 'bold'}}>Vous n'avez pas recu le code ?</Text>
                    <Text style={{fontWeight: 'bold', color: '#3ABDB7'}}> Renvoyer</Text>

                </View>
            </SafeAreaView>
        )
    }
}

export default ValidationCompteScreen