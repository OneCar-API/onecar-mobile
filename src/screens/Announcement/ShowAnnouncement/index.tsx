import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Linking } from "react-native";
import api from "../../../services/api";
import Calendar from '../../../assets/year.svg';
import Km from '../../../assets/km.svg';
import Color from '../../../assets/color.svg';
import GearboxType from '../../../assets/shift.svg';
import Motor from '../../../assets/motor.svg';
import Direction from '../../../assets/direction.svg';
import Fuel from '../../../assets/fuel.svg';
import Door from '../../../assets/door.svg';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


import { ButtonBack, Container, Informations, Name, Photo, Price, Description, DescBox, CarContainer, CarGrid, DescGrid, Label, ChatLink, ChatLinkText } from './styles'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { useAuth } from "../../../hooks/auth";
import { StatusBar } from "expo-status-bar";
import Button from "../../../components/Button";

interface ShowAnnouncementProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IAds {
    description: string;
    id: string;
    price: string;
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
    user: {
        name: string;
        phone: string;
    }
}

const ShowAnnouncement: React.FC<ShowAnnouncementProps> = ({ navigation }) => {

    const id = navigation.getParam('id')
    const [announcement, setAnnouncement] = useState<IAds>();
    const { user, token } = useAuth();

    useEffect(() => {
        showAnnouncement()
    }, [id])

    async function showAnnouncement() {

        const response = await api.get(`ads/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data)
        setAnnouncement(response.data)
    }

    async function openWhatsApp(phone:string) {
        let msg = 'Olá'
        let mobile = phone
        if(mobile) {
            if(msg) {
                let url = "whatsapp://send?phone=55"+mobile
                Linking.openURL(url).then(() => {
                    console.log('WhatsApp acessado')
                })
                .catch(() => {
                    alert("Tenha certeza de que o WhatsApp está instalado em seu dispositivo")
                })
            }
        }
    }


    return (

        <Container>
            <StatusBar style='inverted' />
            <Photo
                resizeMode='cover'
                source={{ uri: announcement?.car.carImages[0]?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU' }}
            />
            <ScrollView>

                <Informations>

                    <Name>
                        <Ionicons
                            name="arrow-back"
                            size={24}
                            color="black"
                            onPress={() => navigation.navigate('ListAnnouncement')}
                        />
                        {` ${announcement?.car.brand || ''} ${announcement?.car.model || ''}`}
                    </Name>
                    <Price>R$ {announcement?.price},00</Price>
                    <DescBox>
                        <Description>{announcement?.description || 'Sem descrição...'}</Description>
                    </DescBox>
                    <CarContainer>
                        <CarGrid>
                            <Calendar width={30} />
                            <Color width={30} />
                            <Motor width={30} />
                            <Fuel width={30} />
                        </CarGrid>
                        <DescGrid>
                            <Label>Ano:</Label>
                            <Text>{announcement?.car.year_manufacture || ''}</Text>
                            <Label>Cor:</Label>
                            <Text>{announcement?.car.color || ''}</Text>
                            <Label>Motor:</Label>
                            <Text>{''}</Text>
                            <Label>Combustível:</Label>
                            <Text>{announcement?.car.fuel || ''}</Text>
                        </DescGrid>
                        <CarGrid>
                            <Km width={30} />
                            <GearboxType width={30} />
                            <Direction width={30} />
                            <Door width={30} />
                        </CarGrid>
                        <DescGrid>
                            <Label>Quilometragem:</Label>
                            <Text>{announcement?.car.km || ''}</Text>
                            <Label>Câmbio:</Label>
                            <Text>{announcement?.car.gearbox_type || ''}</Text>
                            <Label>Direção:</Label>
                            <Text>{''}</Text>
                            <Label>Portas:</Label>
                            <Text>{''}</Text>
                        </DescGrid>
                    </CarContainer>

                    <ChatLink onPress={() => openWhatsApp(announcement?.user.phone || '')}>
                        <ChatLinkText>
                            <MaterialCommunityIcons name='whatsapp' size={24} color="white" />
                            Ir para WhatsApp
                        </ChatLinkText>
                    </ChatLink>


                </Informations>

            </ScrollView>
        </Container>




    )
}
export default ShowAnnouncement;