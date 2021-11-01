import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
    background-color: #F9F9F9;
    flex: 1;
    padding: 4px 0;
`;

export const Header = styled(View)`
  padding: 15px;
  background: #e5e5e5;
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
    right: 90px
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
    background: #e5e5e5;
    border-radius: 5px;
    height: 280px;
    width: 180px;
`;

export const Photo = styled(Image)`
    height: 140px;
    width: 180px;
    border-radius: 5px;
`;

export const Informations = styled(Text)`
    margin-left: 16px;
    margin: 5px 10px;
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
