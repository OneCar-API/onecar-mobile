import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    let token;
    AsyncStorage.getItem('@OneCar:token').then(result => {
      token = result;
    });
    let user;
    AsyncStorage.getItem('@OneCar:user').then(result => {
      user = result;
    });

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    console.log('aqui5')

    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    AsyncStorage.setItem('@OneCar:token', token);
    AsyncStorage.setItem('@OneCar:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    AsyncStorage.removeItem('@OneCar:token');
    AsyncStorage.removeItem('@OneCar:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ token: data.token, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };