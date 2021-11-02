import React, { useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
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
    Cars
} from './styles';


import { Feather } from '@expo/vector-icons'
import { NavigationProvider } from "react-navigation";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

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

    useEffect(() => {
        loadCars()
    })

    async function loadCars() {
        const response = await api.get('/ads');
        console.log(response.data)

        setAnnouncements(response.data.results)
    }

    function viewAnnouncement(id:string){
        navigation.navigate('ShowAnnouncement', { id })
    }

    return (
        <Container>
            <Header>
                <SearchContainer>
                    <Input
                        placeholder="Pesquisar:"
                        placeholderTextColor="#ddd"
                    />
                    <SearchButton>
                        <Feather name="search" size={30} color="#5E9DBC" />
                    </SearchButton>

                    <UserButton>
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

            <Text>teste teste teste</Text>
        </Container>
    )
}
export default ListAnnouncement;