import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList
} from 'react-native'
import styles from './style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HopitalItems from '../../components/HopitalItems'
import MesRendezVousItems from '../../components/MesRendezVousItems'


class FeedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          HopitalStores: [
            {
                date: '11 Avril 2021',
                heure: '15H30',
                image: require('../../assets/hopital.jpg'),
                name: 'Dr. Christina FRAZIER',
                spécialité: 'Medecin Généraliste',
                status: 'Rendez-vous effectuer',
                key: '1',
            },
            {
              date: '11 Avril 2021',
              heure: '15H30',
              image: require('../../assets/hopital.jpg'),
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
  
  function NotificationsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>hello</Text>
  
      </View>
    );
  }
  const Tab = createMaterialTopTabNavigator();

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
                        <Icon name='bell' size={20}  color="#fff"/>
                        <Text style={{marginHorizontal: 10, color:"#fff"}}>Mon historique</Text>
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