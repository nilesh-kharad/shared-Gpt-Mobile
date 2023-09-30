import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './Login';
import { BottomNavigation, Text } from 'react-native-paper';
import Profile from '../profile';

const ProfileRoute = () => <Profile />

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const HomeScreen = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
    const [user, setUser] = React.useState(false)
    const [routes] = React.useState([
        { key: 'MyProfile', title: 'My Profile', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        MyProfile: ProfileRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });
    return (
        <SafeAreaProvider>
            {!user ?
                <>
                    <Login />
                    <Button style={{ width: 200, marginLeft: 100 }} mode="contained-tonal" onPress={() => navigation.navigate('Signup')}>
                        Register
                    </Button>
                </>
                : <BottomNavigation
                    setUser={setUser}
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                />}
        </SafeAreaProvider>
    );
};


export default HomeScreen;