import React from 'react';
import { ContextProvider } from './Context';

import BottomNavBar from './src/routes/BottomNavBar/BottomNavBar';
import LandingScreen from './src/views/Landing/LandingScreen';
import RegistrationScreen from './src/views/Authorization/Registration/RegistrationScreen';

const App = () => {
  return (
    <ContextProvider>
      <BottomNavBar />
    </ContextProvider>
  );
  // return <RegistrationScreen />;
};

export default App;
