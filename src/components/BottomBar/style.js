import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const fulWidth = width / 1;
const f105Width = width / 1.05;
const l22Width = width / 2.2;
const equalWidth = width / 2;
const tierWidth = width / 3;
const fulHeight = height / 1;
const equalHeight = height / 2;
const tierHeight = height / 3;

export default StyleSheet.create({

    // Footer

    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginHorizontal: 20,
        marginVertical: 20,
        flex: 1,
        elevation: 3,
        backgroundColor: '#FC5185',
        borderRadius: 18,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 10,
        height:90,
        // marginTop: 100,
        
    },

    footerContentCentered: 
    {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    footerFavContainer: {
        height: 46,
        width: 46,
        backgroundColor: 'white',
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerCartContainer: {
        height: 46,
        width: 46,
        backgroundColor: 'white',
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerVoiceContainer: {
        // elevation: 3,
        height: 70,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 60,
    },

});