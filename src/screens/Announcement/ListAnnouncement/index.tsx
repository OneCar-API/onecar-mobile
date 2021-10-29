import React, { useEffect } from "react";
import { View, Text } from "react-native";
import api from "../../../services/api";


import './styles'

const ListAnnouncement: React.FC = () => {

    useEffect(() => {
        loadCars()
    })

    async function loadCars() {
        const response = await api.get('/ads');
        console.log(response.data)
    
    }
    return <View><Text>Aqui</Text></View>
}
export default ListAnnouncement;