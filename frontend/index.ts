import {Navigation} from 'react-native-navigation';
import Home from './pages/Home/Home';
import Settings from './pages/Profile/Settings';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/Home/UserSignup';
import ClassSchedule from './pages/Schedule/ClassSchedule';
import Workout from './pages/Workout';
import Profile from './pages/Profile/Profile';
import axios from 'axios';
import ProfileDetails from './pages/Profile/ProfileDetails';
import MembershipDetails from './pages/Profile/MembershipDetails';
import BookingHistory from './pages/Profile/BookingHistory';
import PaymentDetails from './pages/Profile/PaymentDetails';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AdminPanel from './pages/Profile/AdminPanel';
import BookClass from './pages/Schedule/BookClass';

Navigation.registerComponent('Login', () => UserLogin);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Schedule', () => ClassSchedule);
Navigation.registerComponent('BookClass', () => BookClass);
Navigation.registerComponent('Workout', () => Workout);
Navigation.registerComponent('Profile', () => Profile);
Navigation.registerComponent('Settings', () => Settings);
Navigation.registerComponent('AdminPanel', () => AdminPanel);
Navigation.registerComponent('SignUp', () => UserSignup);
Navigation.registerComponent('MembershipDetails', () => MembershipDetails);
Navigation.registerComponent('BookingHistory', () => BookingHistory);
Navigation.registerComponent('ProfileDetails', () => ProfileDetails);
Navigation.registerComponent('PaymentDetails', () => PaymentDetails);

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
  Navigation.setRoot((await isLoggedIn()) ? mainRoot : loginRoot);
});

async function isLoggedIn() {
  const userId = await AsyncStorage.getItem('user-id');
  if (userId != null) {
    return true;
  } else {
    return false;
  }
}

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
