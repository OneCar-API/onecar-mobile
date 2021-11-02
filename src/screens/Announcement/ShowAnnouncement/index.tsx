import React from "react";
import { View, Text } from "react-native";


import {ButtonBack, Container} from './styles'
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

interface ShowAnnouncementProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    id: string;
}

const ShowAnnouncement: React.FC<ShowAnnouncementProps> = ({id, navigation}) => {
    return (
        <Container>
            <ButtonBack onPress={() => navigation.navigate('ListAnnouncement')}>
                <Text>Back</Text>
            </ButtonBack>
            <Text>
                {id}
            </Text>
        </Container>
    )
}
export default ShowAnnouncement;