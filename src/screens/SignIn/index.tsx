import React, { useCallback, useRef, useState } from "react";
import { ActivityIndicator, Platform } from 'react-native';
import * as Yup from 'yup';
import { FormHandles } from "@unform/core";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

import Button from "../../components/Button";
import Logo from "../../components/Logo";
import api from "../../services/api";
import { useAuth } from '../../hooks/auth';
import getValidationErrors from "../../utils/getValidationErrors";
import {
    Container,
    Form,
    Input,
    Message,
    Background,
    CloseButton,
    CloseText
} from './styles';

const BackSvg = require("../../assets/backgroundImg.svg")

interface SignInProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC<SignInProps> = ({ navigation }) => {

    const formRef = useRef<FormHandles>(null);
    const [credentials, setCredentials] = useState<SignInFormData>({ email: '', password: '' });
    const [message, setMessage] = useState<string>();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const { signIn } = useAuth();

    const handleSubmit = useCallback(async(data: SignInFormData) => {
        console.log('aqui')
        setIsSubmitting(true)
        setMessage('')
        console.log('aqui2')

        try {

            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            console.log('aqui4')
            console.log(data)
            await signIn({
                email: data.email,
                password: data.password,
              });
            setIsSubmitting(false)
            navigation.navigate('ListAnnouncement')

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrors(error);
                console.log(error)
                formRef.current?.setErrors(errors);
            }
            console.log(error)
            console.log('aqui3')

            setMessage('Ocorreu um erro ao fazer login, cheque as credenciais.')
            setIsSubmitting(false)
        }
    },[signIn],)


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
                    value={credentials?.email}
                    onChangeText={text => setCredentials({ ...credentials, ['email']: text })}
                />
                <Input
                    placeholder='Senha'
                    placeholderTextColor='#969696'
                    secureTextEntry={true}
                    value={credentials?.password}
                    onChangeText={text => setCredentials({ ...credentials, ['password']: text })}
                />

                <Message>{message}</Message>

                {!isSubmitting && <Button disabled={false} onPress={() => handleSubmit(credentials)}>
                    Login
                </Button>}
                {isSubmitting && <Button disabled={true}>
                    <ActivityIndicator size='large' color='#fff' />
                </Button>}
            </Form>
            <CloseButton onPress={() => navigation.navigate('ListAnnouncement')}>
                <CloseText>
                    Home
                </CloseText>
            </CloseButton>
        </Container>
    )
}
export default SignIn;