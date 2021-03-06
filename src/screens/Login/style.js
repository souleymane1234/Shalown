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

    textInput_form: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        margin: 10,
        height: 45,
        borderWidth: 1,
        borderColor: '#3ABDB7',
        marginBottom: 1,
        color: '#000'
    },
    customBtnBG: {
        backgroundColor: '#3ABDB7',
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 5,
        margin: 10,
        height: 53
    },
    customBtnBGText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        marginTop: 5
    }
});