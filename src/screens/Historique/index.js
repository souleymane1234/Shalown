import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HopitalItems from '../../components/HopitalItems';
import MesRendezVousItems from '../../components/MesRendezVousItems';
import AchatMedicamentItems from '../../components/AchatMedicament';
import {Modal, Portal, Button, Provider, Switch} from 'react-native-paper';
import RadioButtonRN from 'radio-buttons-react-native';

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
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <FlatList
          style={{}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.key}
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
    );
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
      Data: [
        {
          label: 'Me faire livré mes médicaments',
        },
        {
          label: 'Aller les chercher a la pharmacie',
        },
      ],
      DataPaie: [
        {
          label: 'Par Mobile Money',
        },
        {
          label: 'Carte de crédit',
        },
        {
          label: 'En espèce',
        },
      ],
      visible: false,
    };
  }

  showModal = () => this.setState({visible: true});
  hideModal = () => this.setState({visible: false});

  goToTypePaimentOrg = () => {
    this.props.navigation.navigate('TypePaimentOrgScreen');
  };

  render() {
    return (
      <SafeAreaView style={{}}>
        <ScrollView>
          <FlatList
            style={{}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
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

          <View style={{width: '84%', alignSelf: 'center'}}>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => console.log('pressed')}>
              <Text style={styles.customBtnBGText}>Poursuivre mes achats</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={this.showModal}>
              <Text style={styles.customBtnBGText}>Finaliser ma commande</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Provider style={{}}>
          <Portal>
            <Modal
              visible={this.state.visible}
              onDismiss={this.hideModal}
              contentContainerStyle={containerStyle}>
              <Icon
                name="checkbox-marked-circle"
                size={30}
                color="#3ABDB7"
                pack="material"
                style={{alignSelf: 'center', marginBottom: 10}}
              />
              <View style={{margin: 10}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#3ABDB7',
                    fontSize: 20,
                  }}>
                  Je souhaite
                </Text>
                <RadioButtonRN
                  data={this.state.Data}
                  selectedBtn={e => console.log(e)}
                  box={false}
                  activeColor="#000"
                  style={{
                    marginBottom: 20,
                    margin: 10,
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#3ABDB7',
                    fontSize: 20,
                  }}>
                  Je paie:
                </Text>
                  <RadioButtonRN
                    data={this.state.DataPaie}
                    selectedBtn={() =>this.goToTypePaimentOrg()}
                    box={false}
                    activeColor="#000"
                  />
              </View>
            </Modal>
          </Portal>
        </Provider>
      </SafeAreaView>
    );
  }
}
const Tab = createMaterialTopTabNavigator();
const containerStyle = {backgroundColor: 'white', padding: 20};

class HistoriqueScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.header}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
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
        <View style={{backgroundColor: '#3ABDB7'}}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Icon name="chat-processing" size={30} color="#fff" />
            <Text
              style={{
                marginHorizontal: 10,
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Mon historique
            </Text>
          </View>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {backgroundColor: '#fff', height: 3},
            labelStyle: {fontSize: 12},
            style: {backgroundColor: '#3ABDB7', color: '#fff'},
          }}>
          <Tab.Screen name="Mes rendez-vous" component={FeedScreen} />
          <Tab.Screen name="Mes achats" component={NotificationsScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}

export default HistoriqueScreen;
