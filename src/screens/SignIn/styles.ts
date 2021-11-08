import styled from 'styled-components';
import {KeyboardAvoidingView, View, TextInput, ImageBackground, Text} from 'react-native';
import BackSvg from "../../assets/backgroundImg.svg"


export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    background: #e5e5e5;
    justify-content: center;
    align-items: center;
`;

export const Background = styled(ImageBackground)`
    flex: 1;
    justify-content: center;
`;

export const Form = styled(View)`
    align-self: stretch;
    padding: 0px 30px;
    margin-top: 30px;
    text-align: center;
`;

export const Input = styled(TextInput)`
    background: white;
    border-radius: 8px;
    padding: 8px;
    margin: 10px;
    font-size: 18px;
`;

export const Message = styled(Text)`
    color: red;
    font-size: 13px;
    text-align: center;
`;

