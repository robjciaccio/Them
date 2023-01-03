import React, {Dispatch, SetStateAction} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

interface Props {
  name?: string | null;
  displayName: string;
  setDisplayName: Dispatch<SetStateAction<string | null>>;
}

const AuthInputs = ({name, displayName, setDisplayName}: Props) => {
  return (
    <View style={styles.inputBox}>
      <View style={styles.iconContainer}>
        <Icon name="body" color="black" />
      </View>
      <View style={styles.deeperInputContainer}>
        <TextInput
          onChangeText={text => setDisplayName(text)}
          placeholder={`${name}`}
          value={displayName as string}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 15,
    height: 50,
    borderRadius: 30,
    width: 350,
  },
  iconContainer: {
    zIndex: 1,
    paddingTop: 8,
    paddingLeft: 5,
  },
  deeperInputContainer: {
    paddingTop: 15,
    paddingLeft: 10,
  },
});

export default AuthInputs;
