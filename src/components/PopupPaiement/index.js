import React, {useState} from 'react';
import {
    View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, FlatList, ImageBackground
} from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Textarea from 'react-native-textarea';
import DatePicker from 'react-native-datepicker';
import { Modal, Portal,  Button, Provider, Switch  } from 'react-native-paper';

const ContactScreen = ({navigation}) => {
    const [date, setDate] = useState('09-10-2020');
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
