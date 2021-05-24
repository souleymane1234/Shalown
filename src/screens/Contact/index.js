import React, {useState} from 'react';
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground
} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-datepicker';
import { Modal, Portal,  Button, Provider, Switch  } from 'react-native-paper';

const ContactScreen = () => {
    const [date, setDate] = useState('09-10-2020');
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
                    <View style={styles.container}>
        <Text style={styles.title}>
          Date et heures
        </Text>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <View
            style={{
                height: 'auto',
                marginHorizontal: 10,
                marginVertical: 5,
                backgroundColor: '#fff',
                borderRadius: 10,
                elevation: 5,
                padding: 9,
                margin: 10
              }}
      >
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
              <View style={{width: 60,  borderRadius: 10, backgroundColor: 'red', height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>08:00</Text>
              </View>
              <View style={{width: 60,  borderRadius: 10, backgroundColor: 'red', height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>08:30</Text>
              </View>
              <View style={{width: 60,  borderRadius: 10, backgroundColor: 'red', height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>09:00</Text>
              </View>
          </View>
          {/* ligne 2 */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15}}>
              <View style={{width: 60,  borderRadius: 10, height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>09:30</Text>
              </View>
              <View style={{width: 60,  borderRadius: 10, height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>10:00</Text>
              </View>
              <View style={{width: 60,  borderRadius: 10, height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>10:30</Text>
              </View>   
          </View>
          {/* ligne 3 */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{width: 60,  borderRadius: 10, height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>11:00</Text>
              </View>
              <View style={{width: 60,  borderRadius: 10, height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>11:30</Text>
              </View>
              <View style={{width: 60,  borderRadius: 10, height: 30}}>
                  <Text style={{alignItems: 'center', alignSelf: 'center', top: 5}}>15:00</Text>
              </View>
          </View>
      </View>
      <View style={{}}>
          <View>
            <TouchableOpacity
                style={styles.customBtnBGConnecter}
                onPress={() => console.log('ok')}
            >
                <Text style={styles.customBtnTextConnecter}>Maintenant</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
                style={styles.customBtnBGDisable}
                onPress={() => console.log('ok')}
            >
                <Text style={styles.customBtnTextConnecter}>En presentiel</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.customBtnBGDisable}
                onPress={() => console.log('ok')}
            >
                <Text style={styles.customBtnTextConnecter}>En ligne</Text>
            </TouchableOpacity>

          </View>
      </View>
      <Text style={{margin: 20, color: '#3ABDB7', fontSize: 16}}>Ajouter des pièces jointes</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, borderBottomWidth: 1, borderBottomColor: '#3ABDB7'}}>
          <Text>Télécharger des images</Text>
          <TouchableOpacity>
            <Icon style={{}} name="image"pack="material"size={25}/>
            </TouchableOpacity>
      </View>
      <View style={{ width: '100%'}}>
          <TouchableOpacity
                style={styles.customBtnBGRendezVous}
                onPress={showModal}
            >
                <Text style={styles.customBtnTextConnecter}>Demander un rendez-vous</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.customBtnBGAnnuler}
                onPress={() => console.log('ok')}
            >
                <Text style={styles.customBtnTextConnecter}>Annuler</Text>
            </TouchableOpacity>

          </View>

                </ScrollView>
                <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Icon name='checkbox-marked-circle' size={30} color="#3ABDB7"   pack= 'material' style={{alignSelf: 'center'}}/>
            <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20}}>Rendez-vous confirmé !</Text>
            <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'center', marginBottom: 10}}>Dr. Christina FRAZIER  </Text>
            <Text style={{textAlign: 'center', marginBottom: 20}}>Médécin Généraliste</Text>
            <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 10}}>Mercredi 09 Avril à <Text style={{color: '#3ABDB7'}}>08:00 </Text></Text>
            <Text style={{textAlign: 'center', marginBottom: 30}}>2 Rue de Ermesinde {'\n'}Frisange - Luxembourg 3 km</Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 10}}>Me rappeller le rendez-vous</Text>
            </View>
            
        </Modal>
      </Portal>
    </Provider>
            </SafeAreaView>
        )
    }

export default ContactScreen
