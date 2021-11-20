import React, { useEffect, useState } from "react";
import { Text, ScrollView, Modal, Linking } from "react-native";
import api from "../../../services/api";

import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Header,
    UserButton,
    Announcement,
    Photo,
    Informations,
    Name,
    Year,
    Price,
    Cars,
    ModalBlock,
    ModalContent,
    CloseButton,
    CloseText,
    Tip
} from './styles';


import { Feather } from '@expo/vector-icons'
import { NavigationProvider } from "react-navigation";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { useAuth } from "../../../hooks/auth";
import Button from "../../../components/Button";

interface ListAnnouncementProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IAds {
    id: string;
    price: number;
    created_at: string;
    car: {
        id: string;
        manufacturer: string;
        brand: string;
        model: string;
        year_manufacture: string;
        year_model: string;
        fuel: string;
        gearbox_type: string;
        km: string;
        color: string;
        carImages: [
            {
                id: string,
                image: string,
                car_id: string,
                image_url: string,
            }
        ];
    }
}

const ListAnnouncement: React.FC<ListAnnouncementProps> = ({ navigation }) => {

    const [announcements, setAnnouncements] = useState<IAds[]>([]);
    const [search, setSearch] = useState<string>('')
    const [modalActive, setModalActive] = useState(false);

    const { user } = useAuth()


    useEffect(() => {
        loadCars()
    }, [])

    async function loadCars() {
        setSearch('')
        const response = await api.get('/ads');
        console.log(response.data)

        setAnnouncements(response.data.results)

    }

    function viewAnnouncement(id: string) {
        navigation.navigate('ShowAnnouncement', { 'id': id })
    }

    async function searchCars(search: string) {

        setSearch(search)
        const response = await api.get(`/ads?car=${search}`)

        setAnnouncements(response.data.results)

    }

    return (
        <Container>
            <Header>
                <SearchContainer>
                    <Input
                        value={search}
                        placeholder="Pesquisar:"
                        placeholderTextColor="#ddd"
                        keyboardType='web-search'
                        onChangeText={text => searchCars(text)}
                    />


                    {search !== '' ?
                        <SearchButton onPress={() => loadCars()}>
                            <Feather name="x-circle" size={20} color="#5E9DBC" />
                        </SearchButton>
                        :
                        <SearchButton onPress={() => searchCars(search)}>
                            <Feather name="search" size={30} color="#5E9DBC" />
                        </SearchButton>
                    }



                    <UserButton onPress={() => setModalActive(true)}>
                        <Feather name="user" size={30} color="#5E9DBC" />
                    </UserButton>
                </SearchContainer>
            </Header>


            <ScrollView>
                <Cars>
                    {announcements?.map(announcement => (
                        <Announcement
                            key={announcement.id}
                            activeOpacity={0.9}
                            onPress={() => viewAnnouncement(announcement.id)}
                        >
                            <Photo
                                resizeMethod="resize"
                                source={{ uri: announcement.car.carImages[0]?.image }}
                            />


                            <Name>{`${announcement.car.brand} ${announcement.car.model}`}</Name>

                            <Year>{announcement.car.year_manufacture}</Year>

                            <Price>R$ {announcement.price},00</Price>

                        </Announcement>
                    ))}
                </Cars>

            </ScrollView>
            <Modal transparent={true} onRequestClose={() => setModalActive(false)} visible={modalActive} >
                <ModalBlock>
                    <ModalContent>
                        {
                    user?
                    'logout'
                    :
                    <>
                    <Tip>Acesse sua conta</Tip>
                    <Button onPress={()=> navigation.navigate('SignIn')} >Entrar</Button>
                    </>
                    
                }
                <CloseButton onPress={()=> setModalActive(false)}>
                    <CloseText>
                        Fechar
                    </CloseText>
                </CloseButton>
                    </ModalContent>
                </ModalBlock>
            </Modal>
                
        </Container>
    )
    
}
export default ListAnnouncement;