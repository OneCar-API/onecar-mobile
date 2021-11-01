import React, { useEffect } from "react";
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
    Price
} from './styles';


import { Feather } from '@expo/vector-icons'


import './styles'

const ListAnnouncement: React.FC = () => {

    useEffect(() => {
        loadCars()
    })

    async function loadCars() {
        const response = await api.get('/ads');
        console.log(response.data)
    
    }

    return(
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
                <Announcement activeOpacity={0.9} onPress={ () => alert("TESTE") }>
                    <Photo
                        resizeMethod="resize"
                        source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMlO2PxSWuyDUKRnzbi-qpoBDzdK4MRZ3Kw&usqp=CAU` }}
                    />

                    <Informations>
                        <Name>Chevrolet Corsa</Name>

                        <Year>2012</Year>
                        
                        <Price>R$20000,00</Price>
                    </Informations>
                </Announcement>
                
            </ScrollView>

            <Text>teste teste teste</Text>
        </Container>
    ) 
}
export default ListAnnouncement;