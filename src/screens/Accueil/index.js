import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  LogBox,
} from 'react-native';
import SvgLogin from '../../assets/svg/SvgLogin';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchBar} from 'react-native-elements';
import CategoryItems from '../../components/CategoryItems';
import RowTitle from '../../components/RowTitle';
import PharmacieItems from '../../components/PharmaciItems';
import HopitalItems from '../../components/HopitalItems';
import BottomBar from '../BottomBar';

class AccueilScreen extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  constructor(props) {
    super(props);
    this.state = {
      foodStores: [
        {
          image: require('../../assets/gyneco.png'),
          name: 'Gynécologie',
          key: '1',
        },
        {
          image: require('../../assets/ophtamo.png'),
          name: 'Ophtalmologie',
          key: '2',
        },
        {
          image: require('../../assets/ortho.png'),
          name: 'Orthopédie',
          key: '3',
        },
        {
          image: require('../../assets/cardio.png'),
          name: 'Cardiologie',
          key: '4',
        },
        {
          image: require('../../assets/gene.png'),
          name: 'Générale',
          key: '5',
        },
      ],
      pharmacieStores: [
        {
          image: require('../../assets/pharma1.jpg'),
          name: 'Pharmacie Las palmas',
          location: 'Carrefour Las palmas',
          adress: "Boulevard latrille, Abidjan",
          dispo: 'Disponible 24h/24',
          key: '1',
        },
        {
          image:  require('../../assets/pharma2.jpg'),
          name: 'Pharmacie du Vallon',
          location: 'Carrefour de l\'église Sainte Cecile ',
          adress: "Rue des jardins, Abidjan",
          dispo: 'Disponible 24h/24',
          key: '2',
        },
      ],
      HopitalStores: [
        {
          image: require('../../assets/chu.jpg'),
          name: 'CHU de Cocody',
          location: 'Cocody',
          adress: "Boulevard de l'université, Abidjan",
          dispo: 'Disponible 24h/24',
          key: '1',
        },
        {
          image: require('../../assets/pisam.jpg'),
          name: 'Pisam',
          location: 'Avenue Joseph Blohorn',
          adress: "Avenue Joseph Blohorn, Abidjan",
          dispo: 'Disponible 24h/24',
          key: '2',
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
  goToListMedicamentScreen = () => {
    this.props.navigation.navigate('ListMedicamentScreen');
  };
  goToListMedecinScreen = () => {
    this.props.navigation.navigate('ListMedecinScreen');
  };
  goToHistoriqueScreen = () => {
    this.props.navigation.navigate('HistoriqueScreen');
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#D8D8D8'}}>
        <View
          style={{
            backgroundColor: '#D8D8D8',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Image source={require('../../assets/1.png')} style={{top: -20}} />
          <View style={{flexDirection: 'row'}}>
            <Icon name="bell" size={30} color="#3ABDB7" />
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => this.goToProfileScreen()}>
              <Icon
                name="account-circle"
                size={30}
                color="#602873"
                pack="material"
              />
            </TouchableHighlight>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F3F3F3',
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
            top: -40,
          }}>
          <ScrollView>
            <View style={{margin: 20}}>
              <Text style={{fontSize: 18, color: '#602873'}}>
                Salut, Kenania
              </Text>
              <Text
                style={{fontSize: 16, color: '#602873', fontWeight: 'bold'}}>
                Bon retour
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                margin: 20,
                alignSelf: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <TextInput
                style={{marginLeft: 5, color: '#C2C1C1'}}
                keyboardType="default"
                placeholder="Rechercher"
                placeholderTextColor="#C2C1C1"
                selectionColor="#C2C1C1"
              />
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Icon style={{}} name="image" pack="material" size={40} />
                </TouchableOpacity>
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
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <RowTitle title={'Catégories'} />
                <TouchableOpacity onPress={() => this.goToListMedecinScreen()}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginHorizontal: 20,
                      top: 10,
                    }}>
                    <Text style={{color: '#000', fontSize: 12}}>Voir plus</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={item => item.key}
                data={this.state.foodStores}
                renderItem={({item, index}) => (
                  <CategoryItems name={item.name} image={item.image} />
                )}
              />
            </View>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <RowTitle title={'Pharmacies'} />
              <TouchableOpacity onPress={() => this.goToPharmacieScreen()}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    top: 10,
                  }}>
                  <Text style={{color: '#000', fontSize: 12}}>Voir plus</Text>
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={item => item.key}
              data={this.state.pharmacieStores}
              renderItem={({item, index}) => (
                <PharmacieItems
                  name={item.name}
                  image={item.image}
                  location={item.location}
                  adress={item.adress}
                  dispo={item.dispo}
                />
              )}
            />
            {/* hopital store */}

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <RowTitle title={'Hopitaux'} />
              <TouchableOpacity onPress={() => this.goToRendezVousScreen()}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    top: 10,
                  }}>
                  <Text style={{color: '#000', fontSize: 12}}>Voir plus</Text>
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              style={{marginBottom: 200}}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={item => item.key}
              data={this.state.HopitalStores}
              renderItem={({item, index}) => (
                <HopitalItems
                  name={item.name}
                  image={item.image}
                  location={item.location}
                  adress={item.adress}
                  dispo={item.dispo}
                />
              )}
            />
          </ScrollView>
        </View>
        <BottomBar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default AccueilScreen;
