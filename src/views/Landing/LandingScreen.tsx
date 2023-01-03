import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import FastImage from 'react-native-fast-image';
// import photot from '../../../assets/248_heart_Non_Binary_Flag.jpg'

const LandingScreen = () => {
  const [displayName, setDisplayName] = useState<string | null>();
  const [logIn, setLogIn] = useState<Boolean | null>(null);
  //   const LandingInput = () => {
  //     return <TextInput style={styles.inputs} />;
  //   };
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        style={styles.logo}
        resizeMode="cover"
        source={require('../../../assets/NBFlag.png')}> */}
      <View style={styles.inputContainer}>{/* <LandingInput /> */}</View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkviolet',
  },
  inputBox: {
    marginTop: 30,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  inputContainer: {alignItems: 'center'},
  inputs: {
    borderWidth: 0.6,
    backgroundColor: 'white',
    paddingLeft: 7,
    height: 35,
    borderRadius: 9,
    width: 300,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default LandingScreen;
