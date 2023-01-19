import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { getLocalusers } from './src/helper/api';
import { User } from './src/types/UserTypes';

interface ContextType {
  localUsers: User[] | undefined;
  setLocalUsers: Dispatch<SetStateAction<User[] | undefined>>;
  getLocalusers: () => void;
}

const Context = React.createContext<ContextType | null>(null);

const ContextProvider = ({ children }: any) => {
  const [localUsers, setLocalUsers] = useState<User[] | undefined>();

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
    setLocalUsers(resData.users);
  };
  return (
    <Context.Provider value={{ localUsers, setLocalUsers, getLocalusers }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
