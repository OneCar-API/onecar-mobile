import { View, TextInput, TouchableOpacity, Image, Text, Modal } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
    background-color: #F9F9F9;
    flex: 1;
    padding: 4px 0;
`;

export const Header = styled(View)`
  padding: 15px;
  background: transparent;
`;

export const SearchContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const Input = styled(TextInput)`
    background-color: rgba(255,255,255, 0.4);
    width: 80%;
    height: 50px;
    border-radius: 50px;
    border: 1px #b5b5b5;
    padding: 8px 15px;
    font-size: 18px;
    color: #383838;
    margin-top: 14px;
`;

export const SearchButton = styled(TouchableOpacity)`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 90px;
`;

export const UserButton = styled(TouchableOpacity)`
    width: 15%;
    height: 50px;
    border-radius: 35px;
    position: absolute;
    top: 5px;
    right: 1px;
    justify-content: center;
`;

export const Announcement = styled(TouchableOpacity)`
    margin-top: 20px;
    margin-left: 14px;
    background: transparent;
    border-radius: 7px;
    border: 1px #b5b5b5;
    height: auto;
    width: 44%;
`;

export const Photo = styled(Image)`
    height: 140px;
    width: 100%;
    border-radius: 5px;
`;

export const Informations = styled(Text)`
    margin-left: 16px;
    margin: 5px 10px;
    display: block;
`;

export const Name = styled(Text)`
    font-size: 20px;
    color: #383838;
`;

export const Year = styled(Text)`
    font-size: 12px;
    color: #808080;
`;

export const Price = styled(Text)`
    font-size: 18px;
    color: #383838;
    margin-top: 20px;
`;

export const Cars = styled(View)`
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
`;

export const UserModal = styled(Modal)`
    height: 100px;
`;

export const ModalBlock = styled(View)`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
`;

export const ModalContent = styled(View)`
    width: 300px;
    height: auto;
    background: white;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const CloseButton = styled(TouchableOpacity)`
    width: 80px;
    height: 30px;
    background: white;
    color: red;
    align-items: center;
    margin-top: 40px;
`;

export const CloseText = styled(Text)`
    color: red;
    font-size: 15px;
`;

export const Tip = styled(Text)`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const OptionsButton = styled(TouchableOpacity)`
    background: #5e9dbc;
    border-radius: 25px;
    padding: 5px 16px;
    margin-top: 6px;
    width: 200px;
    height: 40px;
    align-self: center;
    justify-content: center;
`;

export const OptionsText = styled(Text)`
    color: #ffffff;
    font-size: 17px;
    align-self: center;
`;