import styled from 'styled-components';
import {View, TextInput, ImageBackground} from 'react-native';
import BackSvg from "../../assets/backgroundImg.svg"


export const Container = styled(View)`
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
`;

export const Input = styled(TextInput)`
    background: white;
    border-radius: 8px;
    padding: 8px;
    margin: 10px;
    font-size: 18px;
`;

