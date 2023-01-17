import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';

interface LocalUsers {
  id: string;
  profileName: string;
  age: string;
  Bio: string;
  oneLiner: string;
  image: string;
}

const HomeScreen = () => {
  const [localUsers, SetLocalUsers] = useState<LocalUsers[] | null>();

  useEffect(() => {
    getLocalusers();
  }, []);

  const getLocalusers = async () => {
    const getUsers = await fetch(
      '/Users/robertciaccio/Them/src/helper/dummyUsers.json',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    );
    const resData = await getUsers.json();
    SetLocalUsers(resData.users);
  };

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
