import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput,ScrollView
} from 'react-native'
import styles from './style'
import SvgLogin from '../../assets/svg/SvgLogin'

class RegisterScreen extends Component {
    render () {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{ flex: 1, backgroundColor: "#3ABDB7" }}>
                    <View style={{   margin: 20 }}>
                    <Text style={{ marginHorizontal: 30, color: '#fff', fontWeight: 'bold', fontSize: 25}}>S'inscrire</Text>
                    <Text style={{ marginHorizontal: 30, color: '#fff'}}>Créez votre compte</Text>
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: "green", backgroundColor: '#fff', borderTopRightRadius: 30, borderTopLeftRadius: 30, top: -30 }}>
                <View style={styles.description_container}>
                    <TextInput
                        style={styles.textInput_form}
                        placeholder='Email/Numéro de telephone'
                    />
                    <TextInput
                        style={styles.textInput_form}
                        placeholder='Mot de passe' secureTextEntry
                    />
                                        <TextInput
                        style={styles.textInput_form}
                        placeholder='Email/Numéro de telephone'
                    />
                    <TextInput
                        style={styles.textInput_form}
                        placeholder='Mot de passe' secureTextEntry
                    />
                                        <TextInput
                        style={styles.textInput_form}
                        placeholder='Email/Numéro de telephone'
                    />
                    <TextInput
                        style={styles.textInput_form}
                        placeholder='Mot de passe' secureTextEntry
                    />
                    <View>
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={() => this.goToValidationCompteScreen()}
                    >
                        <Text style={styles.customBtnBGText}>Se connecter</Text>

                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row', alignSelf: 'center', top: 40}}>
                        <Text style={{fontWeight: 'bold'}}>Vous n'avez pas de compte ?</Text>
                        <TouchableOpacity onPress={() => this.goToRegisterScreen()}>
                            <Text style={{fontWeight: 'bold', color: '#3ABDB7'}}> Inscrivez-vous</Text>
                        </TouchableOpacity>
                        
                    </View>
                    </View>
                </View>
                {/* <SafeAreaView style={{flex: 1, backgroundColor: '#3ABDB7'}}>
                <View style={{height: '20%'}}>
                    <View style={{margin: 10, top: 20}}>
                        <Text style={{ marginHorizontal: 30, color: '#fff', fontWeight: 'bold', fontSize: 25}}>
                            Se connecter
                        </Text>
                        <Text style={{ marginHorizontal: 30, color: '#fff'}}>Connectez-vous a votre compte</Text>
                    </View>
                    </View>
                    
            </SafeAreaView> */}
            </View>
        )
    }
}

export default RegisterScreen