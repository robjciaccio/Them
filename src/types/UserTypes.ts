import React, { Dispatch, SetStateAction } from 'react';

export type ContextType = {
  localUsers: User[] | undefined;
  setLocalUsers: Dispatch<SetStateAction<User[] | undefined>>;
  getLocalusers: () => void;
};

export type User = {
  id: 1;
  profileName: string;
  age: string;
  Bio: string;
  oneLiner: string;
  image: string;
  navigation?: undefined;
};
