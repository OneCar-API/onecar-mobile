/* eslint-disable import/order */
import React, { useState } from 'react';
import { Text, Modal } from 'react-native'

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Header,
    Tip,
    SearchContainer,
    UserButton,
    Circle,
    Info,
    DeleteButton,
    DeleteLabel,
    ModalBlock,
    ModalContent,
    ConfirmButton,
    ConfirmLabel,
    ButtonsContainer,
    OptionsButton,
    OptionsText,
    CloseButton,
    CloseText
} from './styles';
import { Feather, Ionicons } from '@expo/vector-icons';

const User = ({ navigation }) => {
    const { token, user, signOut } = useAuth();
    const [deleteUser, setDeleteUser] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState('')


    async function deletingUser() {
        await api.delete(`/user/${user?.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        signOut()
        navigation.navigate('ListAnnouncement');
    }

    return (
        <>
            <Header>
                <SearchContainer>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color="black"
                        onPress={() => navigation.navigate('ListAnnouncement')}
                    />
                    <Tip>Perfil</Tip>
                    <UserButton onPress={() => setModalActive(true)}>
                        <Feather name={user ? 'user-check' : 'user'} size={30} color="#5E9DBC" />
                    </UserButton>
                </SearchContainer>
            </Header>
            <Container>
                <Circle>
                    <Feather name='user' size={80} color="#5E9DBC" />
                </Circle>
                <Info>{user?.name}</Info>
                <Info>{user?.email}</Info>

                <DeleteButton onPress={() => setDeleteUser(true)}>
                    <DeleteLabel>Excluir</DeleteLabel>
                </DeleteButton>
            </Container>
            <Modal transparent={true} onRequestClose={() => setDeleteUser(false)} visible={deleteUser} >
                <ModalBlock>
                    <ModalContent>
                        <Tip>Tem certeza? Isso irá deletar sua conta.</Tip>
                        <ButtonsContainer>
                            <DeleteButton onPress={() => setDeleteUser(false)}>
                                <DeleteLabel>Cancelar</DeleteLabel>
                            </DeleteButton>
                            <ConfirmButton onPress={() => deletingUser()}>
                                <ConfirmLabel>Deletar</ConfirmLabel>
                            </ConfirmButton>
                        </ButtonsContainer>

                    </ModalContent>
                </ModalBlock>
            </Modal>
            <Modal transparent={true} onRequestClose={() => setModalActive(false)} visible={modalActive} >
                <ModalBlock>
                    <ModalContent>
                        {
                            user ?
                                <>
                                    <Tip>Bem vindo(a), {name}</Tip>
                                    <OptionsButton onPress={() => {
                                        navigation.navigate('AdsManagement')
                                    }} >
                                       <OptionsText>Meus Anúncios</OptionsText> 
                                    </OptionsButton>
                                    <OptionsButton onPress={() => {
                                        signOut()
                                        navigation.navigate('SignIn')
                                    }} >
                                       <OptionsText>Sair</OptionsText> 
                                    </OptionsButton>
                                </>

                                :
                                <>
                                    <Tip>Acesse sua conta</Tip>
                                    <Button onPress={() => navigation.navigate('SignIn')} >Entrar</Button>
                                </>

                        }
                        <CloseButton onPress={() => setModalActive(false)}>
                            <CloseText>
                                Fechar
                            </CloseText>
                        </CloseButton>
                    </ModalContent>
                </ModalBlock>
            </Modal>
        </>
    );
};

export default User;
