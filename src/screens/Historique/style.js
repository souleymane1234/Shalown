import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    // Footer
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    description_container:{
        margin: 10
    },
    header:{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        elevation: 3
    },

    textInput_form: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        margin: 10,
        height: 45,
        borderWidth: 1,
        borderColor: '#3ABDB7',
        marginBottom: 1
    },
    customBtnBG: {
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 10,
        height: 53,
        borderWidth: 1,
        borderColor: '#3ABDB7'
    },
    customBtnBGText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#3ABDB7',
        textAlign: 'center',
        marginTop: 5
    }
});