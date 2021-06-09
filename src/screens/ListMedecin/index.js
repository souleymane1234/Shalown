import React, {Component} from 'react'
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, TouchableHighlight, LogBox
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
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}
    constructor(props) {
        super(props);
        this.state = {
          pharmacieStores: [
            {
                image: require('../../assets/coul.jpg'),
                name: 'Dr. Myriam Coulibaly',
                spécialité: 'Orthopédiste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                image2: require('../../assets/anais.jpg'),
                name2: 'Dr. Marie Kobenan',
                spécialité2: 'Gynécologue',
                hopital2: 'CHU de Angre',
                dispo2: 'Disponible 24h/24',
                key: '1',
            },
            {
                image: require('../../assets/koffi.jpg'),
                name: 'Dr. Siméon Koffi',
                spécialité: 'Pédiatre',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                image2: require('../../assets/kote.jpg'),
                name2: 'Dr. Fanta Koté',
                spécialité2: 'Médécin Généraliste',
                hopital2: 'CHU de Angre',
                dispo2: 'Disponible 24h/24',
                key: '2',
              },
              {
                image: require('../../assets/aka.jpg'),
                name: 'Dr. Dr. Fakhral ANLIMOUDINE',
                spécialité: 'Dentiste',
                hopital: 'CHU de Angre',
                dispo: 'Disponible 24h/24',
                image2: require('../../assets/facral.jpg'),
                name2: 'Dr. Flacel AKA',
                spécialité2: 'Gynécologue',
                hopital2: 'CHU de Angre',
                dispo2: 'Disponible 24h/24',
                key: '3',
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
      goBack = () => {
        this.props.navigation.goBack();
      };
    render () {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={styles.header}>
                        <TouchableOpacity style={{}} onPress={() => this.goBack()}>
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
                            name2={item.name2}
                            image2={item.image2}
                            spécialité2={item.spécialité2}
                            hopital2={item.hopital2}
                            dispo2={item.dispo2}
                            />
                        )}
                        />
  

                    
                    

                </View>
                
                
            </SafeAreaView>
        )
    }
}

export default ListMedecinScreen