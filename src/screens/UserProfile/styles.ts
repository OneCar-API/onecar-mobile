import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  display: flex;
  align-items: center;
  
  flex-direction: column;
  height: 100%;
  width: 100%;

 

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

export const UserButton = styled(TouchableOpacity)`
    width: 15%;
    height: 50px;
    border-radius: 35px;
    position: absolute;
    top: 5px;
    right: 1px;
    justify-content: center;
`;

export const Tip = styled(Text)`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

export const Circle = styled(View)`
    border: 7px #5E9DBC;
    border-radius: 75px;
    height: 150px;
    width: 150px;
    align-items: center;
    justify-content: center;

`;

export const Info = styled(Text)`
    padding-top: 20px;
    font-size: 20px;
`;

export const DeleteButton = styled(TouchableOpacity)`
    background: #fff;
  border-radius: 25px;
  width: 128px;
  height: 40px;
  border: 1px solid #787878;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const DeleteLabel = styled(Text)`
    color: #787878;
    font-size: 20px;
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
    padding: 5px;
`;

export const ConfirmButton = styled(TouchableOpacity)`
    background: #fff;
  border-radius: 25px;
  width: 128px;
  height: 40px;
  border: 1px solid red;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ConfirmLabel = styled(Text)`
    color: red;
    font-size: 20px;
`;

export const ButtonsContainer = styled(View)`
    display: flex;
    flex-direction: row;
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

export const OptionsButton = styled(TouchableOpacity)`
    background: #5e9dbc;
    border-radius: 25px;
    padding: 5px 16px;
    margin-top: 6px;
    width: 153px;
    height: 40px;
    align-self: center;
    justify-content: center;
`;

export const OptionsText = styled(Text)`
    color: #ffffff;
    font-size: 17px;
    align-self: center;
`;