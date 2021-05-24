import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    // Footer
    header:{
        backgroundColor: '#fff',
        height: 60,
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
          alignItems: 'center',
          height: 50
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
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
    customBtnTextConnecter: {
      fontSize: 20,
      fontWeight: "400",
      color: "#fff",
      textAlign:'center',
      marginTop:5
      },
      customBtnBGConnecter: {
        backgroundColor: "#3ABDB7",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        margin:10,
        height:53,
        },
        customBtnBGDisable: {
          backgroundColor: "#D8D8D8",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderRadius: 5,
          margin:10,
          height:53,
          width: '44%'
          },
          customBtnBGRendezVous: {
            backgroundColor: "#3ABDB7",
            paddingHorizontal: 20,
            paddingVertical: 5,
            borderRadius: 5,
            margin:10,
            height:53,
            width: '80%',
            alignSelf: 'center'
            },
            customBtnBGAnnuler: {
              backgroundColor: "red",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 5,
              margin:10,
              height:53,
              width: '80%',
              alignSelf: 'center'
              },
  
}); 