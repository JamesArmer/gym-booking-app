import {Navigation} from 'react-native-navigation';
import Home from './pages/Home';
import Settings from './pages/Settings';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import ClassSchedule from './pages/ClassSchedule';
import Workout from './pages/Workout';
import Profile from './pages/Profile';

Navigation.registerComponent('Login', () => UserLogin);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Schedule', () => ClassSchedule);
Navigation.registerComponent('Workout', () => Workout);
Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Settings', () => Settings);
Navigation.registerComponent('SignUp', () => UserSignup);

export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Schedule',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Workout',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Profile',
                },
              },
            ],
          },
        },
      ],
    },
  },
};
export const loginRoot = {
  root: {
    component: {
      name: 'Login',
    },
  },
};

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTabs: {
    animate: false,
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    selectedIconColor: '#4d089a',
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

function isLoggedIn() {
  return true;
}
