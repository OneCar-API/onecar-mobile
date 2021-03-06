import styled from "styled-components";
import { TouchableOpacity, Text } from 'react-native';


export const ButtonTouchable = styled(TouchableOpacity)`
    background: #5e9dbc;
    border-radius: 25px;
    padding: 5px 16px;
    margin-top: 16px;
    width: 173px;
    align-self: center;
    justify-content: center;
`;

export const ButtonText = styled(Text)`
    color: #ffffff;
    font-size: 26px;
    align-self: center;
`;