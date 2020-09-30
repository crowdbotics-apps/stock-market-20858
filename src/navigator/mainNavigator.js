import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1117294Navigator from '../features/BlankScreen1117294/navigator';
import BlankScreen0117293Navigator from '../features/BlankScreen0117293/navigator';
import UserProfile117283Navigator from '../features/UserProfile117283/navigator';
import Tutorial117282Navigator from '../features/Tutorial117282/navigator';
import NotificationList117254Navigator from '../features/NotificationList117254/navigator';
import Settings117253Navigator from '../features/Settings117253/navigator';
import Settings117245Navigator from '../features/Settings117245/navigator';
import UserProfile117243Navigator from '../features/UserProfile117243/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1117294: { screen: BlankScreen1117294Navigator },
BlankScreen0117293: { screen: BlankScreen0117293Navigator },
UserProfile117283: { screen: UserProfile117283Navigator },
Tutorial117282: { screen: Tutorial117282Navigator },
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
