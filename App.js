import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Profile from './src/profile';
import Login from './Login';

const ProfileRoute = () => <Profile />

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [user, setUser] = React.useState(!false)
  const [routes] = React.useState([
    { key: 'MyProfile', title: 'My Profile', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    MyProfile: ProfileRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
      {!user?<Login />:<BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />}
    </SafeAreaProvider>
  );
};

export default App;