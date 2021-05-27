import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList, ScrollView
} from 'react-native'
import styles from './style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HopitalItems from '../../components/HopitalItems'
import MesRendezVousItems from '../../components/MesRendezVousItems'
import AchatMedicamentItems from '../../components/AchatMedicament'
import { Modal, Portal,  Button, Provider, Switch  } from 'react-native-paper';


class FeedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          HopitalStores: [
            {
                date: '11 Avril 2021',
                heure: '15H30',
                image: require('../../assets/ID.jpg'),
                name: 'Dr. Christina FRAZIER',
                spécialité: 'Medecin Généraliste',
                status: 'Rendez-vous effectuer',
                key: '1',
            },
            {
              date: '11 Avril 2021',
              heure: '15H30',
              image: require('../../assets/ID.jpg'),
              name: 'Dr. Christina FRAZIER',
              spécialité: 'Medecin Généraliste',
              status: 'Rendez-vous effectuer',
              key: '2',
          },
        ],
        };
      }
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                                        <FlatList
                        style={{}}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.key}
                        data={this.state.HopitalStores}
                        renderItem={({item, index}) => (
                            <MesRendezVousItems
                            name={item.name}
                            image={item.image}
                            spécialité={item.spécialité}
                            date={item.date}
                            heure={item.heure}
                            status={item.status}
                            />
                        )}
                        />
            </SafeAreaView>
        )
    }
}
  
class NotificationsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          HopitalStores: [
            {
                namePharma: 'Pharmacie Las Palmas',
                image: require('../../assets/rapidene.jpg'),
                nameMedicament: 'Rapidene',
                quantité: 'Quantité',
                prix: '2.700 F CFA',
                key: '1',
            },
            {
              namePharma: 'Pharmacie Las Palmas',
              image: require('../../assets/rapidene.jpg'),
              nameMedicament: 'Rapidene',
              quantité: 'Quantité',
              prix: '2.700 F CFA',
              key: '2',
          },
          {
            namePharma: 'Pharmacie Las Palmas',
            image: require('../../assets/malox.jpg'),
            nameMedicament: 'Rapidene',
            quantité: 'Quantité',
            prix: '2.700 F CFA',
            key: '3',
        },
        {
            namePharma: 'Pharmacie Las Palmas',
            image: require('../../assets/malox.jpg'),
            nameMedicament: 'Rapidene',
            quantité: 'Quantité',
            prix: '2.700 F CFA',
            key: '4',
        },
        {
            namePharma: 'Pharmacie Las Palmas',
            image: require('../../assets/malox.jpg'),
            nameMedicament: 'Rapidene',
            quantité: 'Quantité',
            prix: '2.700 F CFA',
            key: '5',
        },
        ],
        visible: false
        };
      }

      showModal = () => this.setState({visible: true});
      hideModal = () => this.setState({visible: false});


    render () {
        return (
            <SafeAreaView>
                <ScrollView>
                
                                                            <FlatList
                        style={{}}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.key}
                        data={this.state.HopitalStores}
                        renderItem={({item, index}) => (
                            <AchatMedicamentItems
                            namePharma={item.namePharma}
                            image={item.image}
                            nameMedicament={item.nameMedicament}
                            quantité={item.quantité}
                            prix={item.prix}
                            />
                        )}
                        
                        />
                        
                        <View style={{width: '84%', alignSelf: 'center', backgroundColor: 'red'}}>
                            <TouchableOpacity 
                                style={styles.customBtnBG}
                                onPress={() => console.log('pressed')}
                            >   
                                <Text style={styles.customBtnBGText}>Poursuivre mes achats</Text>

                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.customBtnBG}
                                onPress={this.showModal}
                            >   
                                <Text style={styles.customBtnBGText}>Finaliser ma commande</Text>

                            </TouchableOpacity>
                        </View>
                        </ScrollView>



            <Provider>
      <Portal>
        <Modal visible={this.state.visible} onDismiss={this.hideModal} contentContainerStyle={containerStyle}>
        <Icon name='checkbox-marked-circle' size={30} color="#3ABDB7"   pack= 'material' style={{alignSelf: 'center'}}/>
            <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Rendez-vous confirmé !</Text>
            <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>Dr. Christina FRAZIER  </Text>
            <Text style={{textAlign: 'center', marginBottom: 20}}>Médécin Généraliste</Text>
            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 10}}>Mercredi 09 Avril à <Text style={{color: '#3ABDB7'}}>08:00 </Text></Text>
            <Text style={{textAlign: 'center', marginBottom: 30}}>2 Rue de Ermesinde {'\n'}Frisange - Luxembourg 3 km</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 10}}>Me rappeller le rendez-vous</Text>
            </View>
            
        </Modal>
      </Portal>
            </Provider>
            </SafeAreaView>
        )
    }
}
  const Tab = createMaterialTopTabNavigator();
  const containerStyle = {backgroundColor: 'white', padding: 20};

class HistoriqueScreen extends Component {
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.header}>
                        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
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
                <View style={{backgroundColor: '#3ABDB7'}}>
                    <View style={{flexDirection: 'row',  margin: 10}}>
                        <Icon name='chat-processing' size={30}  color="#fff"/>
                        <Text style={{marginHorizontal: 10, color:"#fff", fontSize: 20, fontWeight: 'bold'}}>Mon historique</Text>
                    </View>
                
                </View>
                                    <Tab.Navigator  tabBarOptions={{ indicatorStyle: { backgroundColor: '#fff', height: 3},
                    labelStyle: { fontSize: 12   },
                    style:{backgroundColor: '#3ABDB7', color: '#fff'}
                }}>

                    <Tab.Screen name="Mes rendez-vous" component={FeedScreen} />
                    <Tab.Screen name="Mes achats" component={NotificationsScreen} />
                </Tab.Navigator>

            </SafeAreaView>
        )
    }
}

export default HistoriqueScreen