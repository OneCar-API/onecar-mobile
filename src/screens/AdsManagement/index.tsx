import React, { useEffect, useState } from "react";
import { Text, ScrollView, Modal, Linking } from "react-native";
import api from "../../services/api";

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
    OptionsButton,
    OptionsText,
    Tip,
    DetailsContainer,
    TrashContainer
} from './styles';


import { Feather, Ionicons } from '@expo/vector-icons'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { useAuth } from "../../hooks/auth";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ListAnnouncementProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IAds {
    id: string;
    price: string;
    created_at: string;
    views: string;
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
          id: string;
          image: string;
          car_id: string;
          image_url: string;
        },
      ];
    };
  }

const AdsManagement: React.FC<ListAnnouncementProps> = ({ navigation }) => {

    const [announcements, setAnnouncements] = useState<IAds[]>([]);
    const [search, setSearch] = useState<string>('')
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState('')
    const { user, signOut, token } = useAuth()

    useEffect(() => {
        loadCars()

        if (user) {
            const userString = JSON.stringify(user)
            const currentUser = JSON.parse(userString)
            setName(currentUser?.name)
        }
    }, [search])

    async function loadCars() {
        setSearch('')
        const response = await api.get('/ads/myAds/show', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setAnnouncements(response.data);

    }

    function viewAnnouncement(id: string) {
        navigation.navigate('ShowAnnouncement', { 'id': id })
    }

    async function deleteAnnouncement(id: string) {
        await api.delete(`/ads/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setSearch('deleted')
    }

    return (
        <Container>
            <Header>
                <SearchContainer>
                <Ionicons
                            name="arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.navigate('ListAnnouncement')}
                        />
                    <Tip>Meus Anúncios</Tip>
                    <UserButton onPress={() => setModalActive(true)}>
                        <Feather name={user ? 'user-check' : 'user'} size={30} color="#5E9DBC" />
                    </UserButton>
                </SearchContainer>
            </Header>


            <ScrollView>
                <Cars>
                    {announcements?.map(announcement => (
                        <Announcement
                            key={announcement.id}
                            activeOpacity={0.9}
                            
                        >
                            <Photo
                                resizeMethod="resize"
                                source={{ uri: announcement.car.carImages[0]?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU' }}
                            />


                            <Name>{`${announcement.car.brand} ${announcement.car.model}`}</Name>

                            <Year>{announcement.car.year_manufacture}</Year>

                            <Price>R$ {announcement.price},00</Price>
                            <DetailsContainer>
                               <Feather name='eye' size={15} color="#5E9DBC" />
                            <Text>{announcement?.views ? announcement?.views : 0}</Text>
                            <TrashContainer>
                                <TouchableOpacity onPress={() => deleteAnnouncement(announcement.id)}>
                                     <Feather name='trash-2' size={20} color="red" />
                                </TouchableOpacity>
                               
                            </TrashContainer> 
                            </DetailsContainer>
                            
                            
                        </Announcement>
                    ))}
                </Cars>

            </ScrollView>
            <Modal transparent={true} onRequestClose={() => setModalActive(false)} visible={modalActive} >
                <ModalBlock>
                    <ModalContent>
                        {
                            user ?
                                <>
                                    <Tip>Bem vindo(a), {name}</Tip>
                                    <OptionsButton onPress={() => {
                                        navigation.navigate('UserProfile')
                                    }} >
                                       <OptionsText>Perfil</OptionsText> 
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

        </Container>
    )

}
export default AdsManagement;