import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList117254Navigator from '../features/NotificationList117254/navigator';
import Settings117253Navigator from '../features/Settings117253/navigator';
import Settings117245Navigator from '../features/Settings117245/navigator';
import UserProfile117243Navigator from '../features/UserProfile117243/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList117254: { screen: NotificationList117254Navigator },
Settings117253: { screen: Settings117253Navigator },
Settings117245: { screen: Settings117245Navigator },
UserProfile117243: { screen: UserProfile117243Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
