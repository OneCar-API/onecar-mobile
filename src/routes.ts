import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './screens/SignIn';
import ListAnnouncement from './screens/Announcement/ListAnnouncement';
import ShowAnnouncement from './screens/Announcement/ShowAnnouncement';

const Routes = createAppContainer(
    createSwitchNavigator({
        
        ListAnnouncement,
        SignIn,                         //para alterar a tela inicial, basta
        ShowAnnouncement                //alterar a ordem das pages dentro do
    })                                  //SwitchNavigator
);

export default Routes;