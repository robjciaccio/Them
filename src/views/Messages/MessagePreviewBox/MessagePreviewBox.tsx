import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/NavigationTypes';

interface Messages {
  profileName: string;
  date: string;
  profileImage: string;
  message: string;
}

type Props = NativeStackScreenProps<RootStackParamList>;

const MessagesPreviewBox = ({ navigation, route }: Props) => {
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
        setMessages(resData.messages);
      }
    } catch (error) {
      console.log('didnt work');
    }
  };

  //Make message preview a limit of 40 characters

  const renderMessages = () => {
    if (messages) {
      return messages.map((m, i) => {
        return (
          <TouchableOpacity
            style={styles.container}
            key={i}
            onPress={() => navigation.navigate('Message')}>
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
                  source={{ uri: m.profileImage }}
                  style={styles.userImgPreview}
                />
              </View>
              <View style={styles.messageBox}>
                <Text>
                  {m.message.length > 40
                    ? m.message.substring(0, 40) + '...'
                    : m.message}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      });
    }
  };

  return messages ? (
    renderMessages()
  ) : (
    <View style={styles.noMessages}>
      <Text style={styles.noMessagesText}>You need to make some friends</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // borderWidth: 0.7,
    borderBottomWidth: 0.3,
    marginHorizontal: 5,
    height: 80,
    flex: 1,
  },
  profileNameText: {
    fontWeight: '500',
    fontSize: 16,
    paddingLeft: 5.5,
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
  noMessages: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  noMessagesText: {
    fontSize: 20,
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

export default MessagesPreviewBox;
