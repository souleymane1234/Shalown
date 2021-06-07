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
  ImageBackground,
  LogBox,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import RendezVousItems from '../../components/RendezVousItems';
import MedecinsItems from '../../components/MedecinsItems';
import {ProgressBar, Colors} from 'react-native-paper';
import Start from '../../components/Stars';
import CommentaireItems from '../../components/CommentaireItems';
import BottomBar from '../BottomBar';

class RendezVousScreen extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
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
          commentaire:
            'jfkjfkflfk fkfkfjfkfk ffkfkfjfjf fkfkffkf ffjfkfkfnf fkfkfkfkffkf fifjfirorle ffjflfifjdof fkfnfijff',
          name: 'jean Kouadio',
          date: "il y'a 1 semaine",
          key: '1',
        },
        {
          commentaire:
            'jfkjfkflfk fkfkfjfkfk ffkfkfjfjf fkfkffkf ffjfkfkfnf fkfkfkfkffkf fifjfirorle ffjflfifjdof fkfnfijff',
          name: 'jean Kouadio',
          date: "il y'a 1 semaine",
          key: '2',
        },
        {
          commentaire:
            'jfkjfkflfk fkfkfjfkfk ffkfkfjfjf fkfkffkf ffjfkfkfnf fkfkfkfkffkf fifjfirorle ffjflfifjdof fkfnfijff',
          name: 'jean Kouadio',
          date: "il y'a 1 semaine",
          key: '3',
        },
      ],
    };
  }
  goToListMedecinScreen = () => {
    this.props.navigation.navigate('ListMedecinScreen');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{}}
            onPress={() => this.goBack()}>
            <Icon
              style={{color: '#3ABDB7'}}
              size={30}
              name="arrow-left-circle-outline"
              pack="material"
            />
          </TouchableOpacity>
          <Image source={require('../../assets/1.png')} style={{top: -20}} />
          <View style={{flexDirection: 'row'}}>
            <Icon name="bell" size={30} color="#3ABDB7" />
            <Icon
              name="account-circle"
              size={30}
              color="#602873"
              pack="material"
            />
          </View>
        </View>
        <ScrollView>
          <View>
            <Image
              source={require('../../assets/hopital.jpg')}
              style={styles.imageBack}></Image>
          </View>
          <View
            style={{
              backgroundColor: '#3ABDB7',
              alignContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 20, color: '#fff', alignSelf: 'center'}}>
              Prendre un rendez-vous
            </Text>
            <Icon
              name="calendar-clock"
              size={50}
              color="#fff"
              style={{backgroundColor: '#602873'}}
            />
          </View>
          <View>
            <Image
              source={require('../../assets/carte.png')}
              style={styles.imageBack}></Image>
          </View>
          <View
            style={{
              backgroundColor: '#3ABDB7',
              alignContent: 'center',
              flexDirection: 'row',
            }}>
            <Icon
              name="chat-processing"
              size={50}
              color="#fff"
              style={{marginHorizontal: 10}}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                alignSelf: 'center',
                marginHorizontal: 20,
              }}>
              Prendre un rendez-vous
            </Text>
          </View>
          <View style={{margin: 10}}>
            <Text style={{margin: 10, fontSize: 18, fontWeight: 'bold'}}>
              Disponibilité
            </Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.key}
            data={this.state.rendezVousStores}
            renderItem={({item, index}) => (
              <RendezVousItems
                date={item.date}
                placeDispo={item.placeDispo}
                heureOuverture={item.heureOuverture}
                pause={item.pause}
                heureFermeture={item.heureFermeture}
              />
            )}
          />
          <View style={{margin: 10}}>
            <Text style={{fontSize: 20, color: '#000', marginHorizontal: 20}}>
              Heure et jour d'ouverture
            </Text>
            <Text style={{margin: 10}}>
              Lundi - Vendredi: 8h - 23h Samedi: 8h - 15h
            </Text>
            <View style={{margin: 10, marginHorizontal: 20}}>
              <Text style={{fontSize: 20, marginBottom: 20}}>Contacts</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="chat-processing"
                    size={20}
                    color="#000"
                    style={{}}
                  />
                  <Text style={{marginHorizontal: 10}}>+002366547898</Text>
                </View>
                <View style={{flexDirection: 'row', marginHorizontal: 15}}>
                  <Icon
                    name="chat-processing"
                    size={20}
                    color="#000"
                    style={{}}
                  />
                  <Text style={{marginHorizontal: 10}}>+002366547898</Text>
                </View>
              </View>
              <Text style={{fontSize: 20, marginBottom: 20}}>Services</Text>
              <View>
                <Text style={{fontSize: 18, marginBottom: 10}}>
                  - Kinésithérapie - Chirurgie - Orthopédie - Radiographie -
                  dentiste
                </Text>
                <TouchableOpacity onPress={() => console.log('ok')}>
                  <Text style={{textAlign: 'center', color: '#3ABDB7'}}>
                    Voir plus
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{margin: 10}}>
            <Text style={{margin: 10, fontSize: 18}}>Medecins</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.key}
              data={this.state.MedecinsStores}
              renderItem={({item, index}) => (
                <MedecinsItems
                  image={item.image}
                  name={item.name}
                  specialité={item.specialité}
                />
              )}
            />
          </View>
          <TouchableOpacity onPress={() => this.goToListMedecinScreen()}>
            <Text style={{textAlign: 'center', color: '#3ABDB7'}}>
              Voir plus
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', margin: 20, top: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>4.1</Text>
            <Text style={{marginHorizontal: 10, alignSelf: 'center'}}>
              Note moyenne
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ProgressBar
              progress={0.4}
              color={'#707070'}
              width={180}
              style={{height: 10, alignSelf: 'center', top: 7}}
            />
            <Start style={{marginHorizontal: 1}} />
            <Text>52%</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ProgressBar
              progress={0.3}
              color={'#707070'}
              width={180}
              style={{height: 10, top: 7}}
            />
            <Start style={{marginHorizontal: 1, top: -10}} />
            <Text>52%</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ProgressBar
              progress={0.2}
              color={'#707070'}
              width={180}
              style={{height: 10, top: 7}}
            />
            <Start style={{marginHorizontal: 1, top: -10}} />
            <Text>52%</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ProgressBar
              progress={0.1}
              color={'#707070'}
              width={180}
              style={{height: 10, top: 7}}
            />
            <Start style={{marginHorizontal: 1, top: -10}} />
            <Text>52%</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            data={this.state.CommentaireStores}
            renderItem={({item, index}) => (
              <CommentaireItems
                commentaire={item.commentaire}
                name={item.name}
                date={item.date}
              />
            )}
          />
          <TouchableOpacity onPress={() => console.log('ok')}>
            <Text style={{textAlign: 'center', color: '#3ABDB7'}}>
              Voir plus
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#3ABDB7',
              borderRadius: 20,
              width: '90%',
              margin: 20,
              alignSelf: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 150,
            }}>
            <TextInput
              style={{marginLeft: 15, color: '#C2C1C1', width: '70%'}}
              keyboardType="default"
              placeholder="Laisser un commentaire"
              placeholderTextColor="#fff"
              selectionColor="#C2C1C1"
            />
            <View style={{flexDirection: 'row', width: '20%'}}>
              <TouchableOpacity>
                <Icon
                  style={{}}
                  name="microphone"
                  pack="material"
                  size={40}
                  color={'#fff'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <BottomBar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

export default RendezVousScreen;
