import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import SvgLogin from '../../assets/svg/SvgLogin'

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 96, // Add padding to offset large buttons and pagination in bottom of page
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  text:{
    textAlign: 'center',
    top: 10,
    color: '#707070'
  },
});

const slides = [
  {
    key: 'one',
    title: 'Télémédecine',
    text: 'Faites-vous consulter autrement\n grace a notre application',
    image: require('../../assets/b.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Marketplace',
    text: 'Tous vos médicaments en un clique\n sans vous déplacer',
    image: require('../../assets/c.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Livraison',
    text: "Nous livrons vos médicaments\n avec un service spécialisé",
    image: require('../../assets/d.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },

];

// slides = [...]

class SlidesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('AccueilScreen');
  };
  render() {
    if (this.state.showRealApp) {
      return <SlidesScreen />;
    } else {
      return (
        <AppIntroSlider
          bottomButton
          showSkipButton
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

export default SlidesScreen;
