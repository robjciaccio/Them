import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { User } from '../../types/UserTypes';

const { height } = Dimensions.get('screen'); //if its broken the guy who wrote it used 'window'

export enum DrawerState {
  Open = height - 230,
  Peek = 230,
  Closed = 0,
}

const ProfileScreen = ({ route, navigation }) => {
  // const [user, setUser] = useState({
  //   image: '',
  //   id: '',
  //   age: '',
  //   profileName: '',
  // });

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onclose = () => {
    modalizeRef.current?.close();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modalize
        ref={modalizeRef}
        handleStyle={{ backgroundColor: 'red' }}
        withHandle={true}
        withOverlay={true}
        // snapPoint={35}
        modalStyle={{ marginTop: 60 }}
        alwaysOpen={360}
        z-index={1}>
        <View style={styles.infoSectionContainer}>
          <TouchableWithoutFeedback>
            <Text style={{ fontSize: 16, color: 'white' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit quibusdam sed amet
              tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
              temporibus enim commodi iusto libero magni deleniti quod quam
              consequuntur! Commodi minima excepturi repudiandae velit hic
              maxime doloremque. Quaerat provident commodi consectetur veniam
              similique ad earum omnis ipsum saepe, voluptas, hic voluptates
              pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
              excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              Voluptatem quaerat non architecto ab laudantium modi minima sunt
              esse temporibus sint culpa, recusandae aliquam numquam totam
              ratione voluptas quod exercitationem fuga. Possimus quis earum
              veniam quasi aliquam eligendi, placeat qui corporis! 1703
              loremHtml By Smoggy Skipper on Nov 16 2021 ThankCommentSugges
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </Modalize>

      <TouchableOpacity onPress={onOpen}>
        {image ? (
          <ImageBackground
            source={{ uri: image }}
            style={{
              height: '100%',
              width: '100%',
              paddingBottom: 200,
            }}
          />
        ) : null}
      </TouchableOpacity>

      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infoSectionContainer: {
    backgroundColor: 'purple',
    opacity: 0.6,
    height: '140%',
    // flexGrow: 1,
    // borderWidth: 1,
    // position: 'absolute',
    // height: '100%',
    // bottom: 0,
    // borderColor: 'red',
  },
});

export default ProfileScreen;
