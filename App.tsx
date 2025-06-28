import React, { useEffect } from 'react';
import AppNavigator from './navigtion/AppNavigator';
import auth from '@react-native-firebase/auth';

const FinTrack = () => {
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      console.log('User state changed: ', user?.email || 'Logged out');
    });

    return () => unsubscribe(); // Clean up on unmount
  }, []);

  return <AppNavigator />;
};

export default FinTrack;
