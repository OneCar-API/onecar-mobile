import React from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import {
    Container,
    Form,
    Input,
    Background
} from './styles';

const BackSvg = require("../../assets/backgroundImg.svg")

const SignIn: React.FC = () => {
    return (
        <Container>

            <Logo />
            <Form>
                <Input
                    placeholder='E-mail'
                    placeholderTextColor='#969696'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                />
                <Input
                    placeholder='Senha'
                    placeholderTextColor='#969696'
                    secureTextEntry={true}
                />
                <Button>
                    Login
                </Button>
            </Form>

        </Container>
    )
}
export default SignIn;