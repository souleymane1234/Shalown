import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    // Footer
    header:{
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
      },
      textareaContainer: {
        height: 'auto',
        padding: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#3ABDB7'
      },
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 'auto',
        fontSize: 14,
        color: '#333',
      },
      footerContentCentered: 
      {
          justifyContent: 'center', 
          alignItems: 'center'
      },
      footerVoiceContainer: {
        // elevation: 3,
        height: 70,
        width: 70,
        backgroundColor: '#3ABDB7',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 60,
        top: -20
    },
  
}); 