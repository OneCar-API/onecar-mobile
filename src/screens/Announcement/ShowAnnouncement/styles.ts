import { TouchableOpacity, View, Image, Text } from "react-native";
import styled from "styled-components";

export const ButtonBack = styled(TouchableOpacity)`
    height: 30px;
`;

export const Container = styled(View)`
    
    flex: 1;
 
   
`;

export const Informations = styled(View)`
    background: white;
    flex: 1;
    min-height: 500px;
    bottom: 0;
    right: 0;
    left: 0;
    margin-top: 250px;
    padding: 25px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Photo = styled(Image)`
    height: 40%;
    width: 100%;
    border-radius: 5px;
    position: absolute;
    
`;

export const Name = styled(Text)`
    font-size: 30px;
    color: #383838;
`;

export const Year = styled(Text)`
    font-size: 12px;
    color: #808080;
`;

export const Price = styled(Text)`
    font-size: 25px;
    color: white;
    background: #5e9dbc;
    padding: 5px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    /* width: min-content; */
    margin-top: 20px;
`;

export const DescBox = styled(View)`
    margin-top: 50px;
    border: 1px solid #a1a1a1;
    justify-content: center;
    min-height: 70px;
    border-radius: 10px;
`;

export const Description = styled(Text)`
    font-size: 17px;
    color: #b5b5b5;
    
`;

export const CarContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
`;

export const CarGrid = styled(View)`
    flex-direction: column;
    width: 10%;

`;

export const DescGrid = styled(View)`
    flex-direction: column;
    width: 35%;
    margin-left: 5px;

`;

export const Label = styled(Text)`
    font-size: 14px;
    color: #b5b5b5;
    margin-top: 2px;
`;

export const ChatLink = styled(TouchableOpacity)`
    background: #5e9dbc;
    border-radius: 12px;
    padding: 5px 16px;
    margin-top: 50px;
    width: auto;
    align-self: center;
    justify-content: center;
`;

export const ChatLinkText = styled(Text)`
    color: #ffffff;
    font-size: 20px;
    align-self: center;
`;