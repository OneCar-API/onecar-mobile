import styled from 'styled-components';
import { KeyboardAvoidingView, View, TextInput, ImageBackground, Text, TouchableOpacity } from 'react-native';
import BackSvg from "../../assets/backgroundImg.svg"


export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    background: #fff;
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
    border: 1px #b5b5b5;
    padding: 8px;
    margin: 10px;
    font-size: 18px;
`;

export const Message = styled(Text)`
    color: red;
    font-size: 13px;
    text-align: center;
`;

export const CloseButton = styled(TouchableOpacity)`
    width: 80px;
    height: 40px;
    background: rgba(0,0,0,0.0);
    align-items: center;
    margin-top: 40px;
`;

export const CloseText = styled(Text)`
    color: #5e9dbc;
    font-size: 15px;
`;