import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './screens/SignIn';
import ListAnnouncement from './screens/Announcement/ListAnnouncement';
import ShowAnnouncement from './screens/Announcement/ShowAnnouncement';

const Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        ListAnnouncement,
        ShowAnnouncement
    })
);

export default Routes;