import React, { useState } from "react";
import { Platform } from 'react-native';
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
  } from 'react-navigation';
  

import api from "../../services/api";

import {
    Container,
    Form,
    Input,
    Background
} from './styles';

const BackSvg = require("../../assets/backgroundImg.svg")

interface SignInProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }

interface SignInFormData {
    email: string;
    password: string;
  }

const SignIn: React.FC<SignInProps> = ({navigation}) => {

    
    
    const [email,setEmail] = useState<string>();
    const [password,setPassword] = useState<string>();

    async function handleSubmit(){
        console.log(email, password)

        // const response = await api.post('sessions', {
        //     email,
        //     password,
        //   });

        navigation.navigate('ListAnnouncement')
    }

    return (
        <Container
        behavior='padding'
        enabled={Platform.OS === 'ios'}
        >

            <Logo />
            <Form>
                <Input
                    placeholder='E-mail'
                    placeholderTextColor='#969696'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder='Senha'
                    placeholderTextColor='#969696'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button onPress={handleSubmit}>
                    Login
                </Button>
            </Form>

        </Container>
    )
}
export default SignIn;