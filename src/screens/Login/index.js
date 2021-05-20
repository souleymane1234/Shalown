import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput
} from 'react-native'
import styles from './style'
import SvgLogin from '../../assets/svg/SvgLogin'

class LoginScreen extends Component {
    goToRegisterScreen = () => {
        this.props.navigation.navigate('RegisterScreen');
      };
      goToValidationCompteScreen = () => {
        this.props.navigation.navigate('ValidationCompteScreen');
      };
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#3ABDB7'}}>
                <View style={{height: '50%'}}>
                    <View>
                        <SvgLogin style={{alignSelf: 'center'}}/>
                    </View>
                    <View style={{margin: 10}}>
                        <Text style={{ marginHorizontal: 30, color: '#fff', fontWeight: 'bold', fontSize: 25}}>
                            Se connecter
                        </Text>
                        <Text style={{ marginHorizontal: 30, color: '#fff'}}>Connectez-vous a votre compte</Text>
                    </View>


                </View>
                <View style={{ backgroundColor: '#fff', borderTopRightRadius: 30, borderTopLeftRadius: 30, height: '100%'}}>
                    <View style={styles.description_container}>
                    <TextInput
                        style={styles.textInput_form}
                        placeholder='Email/Numéro de telephone'
                    />
                    <TextInput
                        style={styles.textInput_form}
                        placeholder='Mot de passe' secureTextEntry
                    />
                    <View>
                        <TouchableOpacity onPress={() => console.log('ok')}>
                            <Text style={{textAlign: 'right', margin: 10, color: '#3ABDB7'}}>Mot de passe oublié ?</Text>
                        </TouchableOpacity>
                       
                    </View>
                    <View>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={() => this.goToValidationCompteScreen()}
                    >
                        <Text style={styles.customBtnBGText}>Se connecter</Text>

                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{flexDirection: 'row', alignSelf: 'center', top: 40}}>
                        <Text style={{fontWeight: 'bold'}}>Vous n'avez pas de compte ?</Text>
                        <TouchableOpacity onPress={() => this.goToRegisterScreen()}>
                            <Text style={{fontWeight: 'bold', color: '#3ABDB7'}}> Inscrivez-vous</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default LoginScreen