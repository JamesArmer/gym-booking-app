import {Navigation} from 'react-native-navigation';
import Home from './pages/Home';
import Settings from './pages/Settings';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';

Navigation.registerComponent('Login', () => UserLogin);
Navigation.registerComponent('Home', () => Home);
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
                  name: 'Settings',
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
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
  },
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(isLoggedIn() ? mainRoot : loginRoot);
});

function isLoggedIn() {
  return false;
}
