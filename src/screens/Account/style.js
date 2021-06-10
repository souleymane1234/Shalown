import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    // Footer
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
        customBtnTextConnecter: {
            fontSize: 20,
            fontWeight: "400",
            color: "#fff",
            textAlign:'center',
            marginTop:5
            },
        customBtnTextInscrire: {
            fontSize: 20,
            fontWeight: "400",
            color: "#3ABDB7",
            textAlign:'center',
            marginTop:5
            },
        
        /* Here style the background of your button */
        customBtnBGConnecter: {
        backgroundColor: "#3ABDB7",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        margin:10,
        height:53,
        width: '45%'
        },
        customBtnBGInscrire:{
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        margin:10,
        height:53,
        width: '45%',
        borderWidth: 1,
        borderColor: '#3ABDB7'
        },
        button:{
            flexDirection: 'row',
            width: '100%',
            top: 10
        },
        textBienvenueView: {
            top: 10
        },
        textBienvenue:{
            textAlign: 'center',
            fontSize: 40,
        },
        textConnexion: {
            textAlign: 'center',
            fontSize: 16
        },
        MainContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: Platform.OS === 'ios' ? 0 : 0,
          },
          Logo: {
            flexDirection: 'row',
          
            alignItems: 'center'
          },
           TextLogo: {
            fontSize: 28,
          },
          SplashScreen_RootView: {
            justifyContent: 'center',
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
            alignItems: 'center',
          },

});