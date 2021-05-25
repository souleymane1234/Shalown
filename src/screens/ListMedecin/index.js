import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, TouchableHighlight
} from 'react-native'
import styles from './style'
import SvgLogin from '../../assets/svg/SvgLogin'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SearchBar } from 'react-native-elements';
import CategoryItems from '../../components/CategoryItems'
import RowTitle from '../../components/RowTitle'
import PharmacieItems from '../../components/PharmaciItems'
import HopitalItems from '../../components/HopitalItems'
import BottomBar from '../BottomBar'
import ListMedicamentsItems from '../../components/ListMedicamentItems'
import ListMedecinItems from '../../components/ListMedecinItems'

class ListMedecinScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pharmacieStores: [
            {
                image: require('../../assets/ID.jpg'),
                name: 'Dr. Christina Frazer',
                spécialité: 'Généraliste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                key: '1',
            },
            {
                image: require('../../assets/ID.jpg'),
                name: 'Perdofemina',
                spécialité: 'Généraliste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                key: '2',
              },
              {
                image: require('../../assets/ID.jpg'),
                name: 'Maalox',
                spécialité: 'Généraliste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                key: '3',
            },
            {
                image: require('../../assets/ID.jpg'),
                name: 'Perdofemina',
                spécialité: 'Généraliste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                key: '4',
              },
              {
                image: require('../../assets/ID.jpg'),
                name: 'Maalox',
                spécialité: 'Généraliste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                key: '5',
            },
            {
                image: require('../../assets/ID.jpg'),
                name: 'Perdofemina',
                spécialité: 'Généraliste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                key: '6',
              },
          ],
        };
      }
      goToRendezVousScreen = () => {
        this.props.navigation.navigate('RendezVousScreen');
      };
      goToPharmacieScreen = () => {
        this.props.navigation.navigate('PharmacieScreen');
      };
      goToContactScreen = () => {
        this.props.navigation.navigate('ContactScreen');
      };
      goToProfileScreen = () => {
        this.props.navigation.navigate('ProfileScreen');
      };
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
                <View style={{}}>
                        <View style={{backgroundColor: '#fff',width: '90%',margin: 20,alignSelf: 'center',justifyContent: 'space-between',flexDirection: 'row',alignItems: 'center',marginLeft: 10, elevation: 10}}>
                        <TextInput
                            style={{   marginLeft: 5,color: '#C2C1C1'}}
                            keyboardType="default"
                            placeholder='Rechercher'
                            placeholderTextColor='#C2C1C1'
                            selectionColor= '#C2C1C1'
                           
                        />
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                            <Icon
                                style={{backgroundColor: '#602873', height: 45}}
                                name="microphone"
                                pack="material"
                                color={'#fff'}
                                size={40}
                            />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <FlatList
                        style={{marginBottom: 200}}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.key}
                        data={this.state.pharmacieStores}
                        renderItem={({item, index}) => (
                            <ListMedecinItems
                            name={item.name}
                            image={item.image}
                            spécialité={item.spécialité}
                            hopital={item.hopital}
                            dispo={item.dispo}
                            />
                        )}
                        />
  

                    
                    

                </View>
                
                
            </SafeAreaView>
        )
    }
}

export default ListMedecinScreen