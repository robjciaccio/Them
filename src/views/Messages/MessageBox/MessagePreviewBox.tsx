import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

interface Messages {
  profileName: string;
  date: string;
  profileImage: string;
  message: string;
}

const MessagesBox = () => {
  const [messages, setMessages] = useState<Messages[] | null>();

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {}, [messages]);
  const getMessages = async () => {
    try {
      const response = await fetch(
        '/Users/robertciaccio/Them/src/helper/dummyMessage.json',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const resData = await response.json();
      if (resData) {
        console.log(resData.messages);
        setMessages(resData.messages);
      }
    } catch (error) {
      console.log('didnt work');
    }
  };

  const displayMessages = () => {
    if (messages) {
      return messages.map(m => {
        return (
          <TouchableOpacity style={styles.container}>
            <View style={styles.nameAndDate}>
              <View style={styles.profileNameBox}>
                <Text style={styles.profileNameText}>{m.profileName}</Text>
              </View>
              <View style={styles.dateBox}>
                <Text>{m.date}</Text>
              </View>
            </View>
            <View style={styles.MessageBoxContainer}>
              <View>
                <Image
                  source={{uri: m.profileImage}}
                  style={styles.userImgPreview}
                />
              </View>
              <View style={styles.messageBox}>
                <Text>{m.message}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };

  return messages ? displayMessages() : null;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderWidth: 0.7,
    borderBottomWidth: 0.7,
    marginHorizontal: 5,
    height: 80,
    flex: 1,
  },
  profileNameText: {
    fontWeight: '500',
    fontSize: 16,
  },
  messageBox: {
    marginTop: 10,
    marginLeft: 8,
    paddingTop: 5,
  },
  userImgPreview: {
    height: 50,
    width: 50,
    borderRadius: 400 / 2,
    borderWidth: 0.5,
  },
  profileNameBox: {
    marginLeft: 50,
    paddingTop: 4,
  },
  MessageBoxContainer: {
    flexDirection: 'row',
    marginTop: -8,
  },
  nameAndDate: {
    flexDirection: 'row',
  },
  dateBox: {
    position: 'absolute',
    right: 0,
    paddingRight: 20,
    paddingTop: 5,
  },
});

export default MessagesBox;
