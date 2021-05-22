import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground
} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rendezVousStores: [
            {
                date: 'Mardi 09 Avril',
                placeDispo: '3 plages horraires disponible',
                heureOuverture: '08:00',
                pause: '12:00',
                heureFermeture: '15:00',
                key: '1',
            },
            {
                date: 'Mardi 09 Avril',
                placeDispo: '3 plages horraires disponible',
                heureOuverture: '08:00',
                pause: '12:00',
                heureFermeture: '15:00',
                key: '2',
              },
          ],
          MedecinsStores: [
            {
                image: require('../../assets/ID.jpg'),
                name: 'Dr: Christina FRAZIER',
                specialité: 'Médecin Généraliste',
                key: '1',
            },
            {
                image: require('../../assets/ID.jpg'),
                name: 'Dr: Christina FRAZIER',
                specialité: 'Pédiatre',
                key: '2',
              },
              {
                image: require('../../assets/ID.jpg'),
                name: 'Dr: Christina FRAZIER',
                specialité: 'Pédiatre',
                key: '3',
              },
              {
                image: require('../../assets/ID.jpg'),
                name: 'Dr: Christina FRAZIER',
                specialité: 'Pédiatre',
                key: '4',
              },
              {
                image: require('../../assets/ID.jpg'),
                name: 'Dr: Christina FRAZIER',
                specialité: 'Pédiatre',
                key: '5',
              },
          ],
          CommentaireStores: [
            {
                commentaire: 'jfkjfkflfk fkfkfjfkfk ffkfkfjfjf fkfkffkf ffjfkfkfnf fkfkfkfkffkf fifjfirorle ffjflfifjdof fkfnfijff',
                name: 'jean Kouadio',
                date: 'il y\'a 1 semaine',
                key: '1',
            },
            {
                commentaire: 'jfkjfkflfk fkfkfjfkfk ffkfkfjfjf fkfkffkf ffjfkfkfnf fkfkfkfkffkf fifjfirorle ffjflfifjdof fkfnfijff',
                name: 'jean Kouadio',
                date: 'il y\'a 1 semaine',
                key: '2',
              },
              {
                commentaire: 'jfkjfkflfk fkfkfjfkfk ffkfkfjfjf fkfkffkf ffjfkfkfnf fkfkfkfkffkf fifjfirorle ffjflfifjdof fkfnfijff',
                name: 'jean Kouadio',
                date: 'il y\'a 1 semaine',
                key: '3',
              },
          ],
        };
      }
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <TouchableOpacity style={{}} onPress={() => this.props.navigation.goBack()}>
                        <Icon
                        style={{ color: '#3ABDB7'}}
                        size={30}
                        name="arrow-left-circle-outline"
                        pack="material"
                        />
                    </TouchableOpacity>
                    <Image source={require('../../assets/1.png')} style={{top: -20}}/>
                    <View style={{flexDirection: 'row'}}>
                    <Icon name='bell' size={30}  color="#3ABDB7"/>
                    <Icon name='account-circle' size={30}  color="#602873" pack="material"/>
                    </View>
                    

                </View>
                <ScrollView>
                    <View style={{margin: 10}}>

                        <View style={styles.container}>
                            <Text style={{margin: 10, fontSize: 18, fontWeight: 'bold'}}>
                                De quoi souffrez vous ?
                            </Text>
                            <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.textarea}
                                onChangeText={this.onChange}
                                defaultValue={this.state.text}
                                placeholder={'Laisser un commentaire'}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            />
                        </View>
                        <View style={{ alignContent: 'flex-end',  alignItems: 'flex-end', top: -20}}>
                            <View style={{flexDirection: 'row', margin: 10, marginHorizontal: 15}}>
                                <Text style={{alignSelf: 'flex-end', color: 'red', fontWeight: 'bold', fontSize: 17}}>-03 : 45</Text>
                                <Icon name='clock-time-five' size={20} color="red" style={{marginHorizontal: 10}}   pack= 'material'/>
                            </View>
                         </View>
                         <View style={styles.footerContentCentered}>
                                <TouchableOpacity style={styles.footerVoiceContainer}>
                                    <Icon name='microphone' size={30}  color="#fff"/>
                                </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ContactScreen