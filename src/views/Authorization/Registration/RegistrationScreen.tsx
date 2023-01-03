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
import AuthInputs from '../../../components/Input/AuthInputs';
// import photot from '../../../assets/248_heart_Non_Binary_Flag.jpg'

const signUpValues = ['Profile Name', 'Birthdate', 'other Data'];

const RegistrationScreen = () => {
  const [displayName, setDisplayName] = useState<string | null>();
  const [logIn, setLogIn] = useState<Boolean | null>(null);

  const renderAuthFields = () => {
    return signUpValues.map(name => (
      <View style={{alignItems: 'center'}}>
        <AuthInputs
          name={name}
          displayName={displayName}
          setDisplayName={setDisplayName}
        />
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.logo}
        resizeMode="cover"
        source={require('../../../../assets/regBack.jpg')}>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>

        {renderAuthFields()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkviolet',
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: -100,
  },
  signUpText: {
    fontFamily: 'Noteworthy-Bold',
    fontSize: 32,
    color: 'white',
  },
  logoContainer: {
    alignItems: 'center',
  },
  inputContainer: {alignItems: 'center'},
});

export default RegistrationScreen;
