import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, PaperProvider, TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './Login';
import { BottomNavigation, Text } from 'react-native-paper';
import Profile from '../profile';
import Chatgpt from '../chatgpt';
import Logout from './Logout';


const HomeScreen = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
    const [user, setUser] = React.useState()
    const ProfileRoute = () => <Profile user={user} />

    const LogoutRoute = () => <Logout setUser={setUser} />;

    const ChatGptRoute = () => <Chatgpt setUser={setUser} user={user} />;

    const [routes] = React.useState([
        { key: 'MyProfile', title: 'My Profile', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'chatGpt', title: 'Chat-Gpt', focusedIcon: 'album' },
        { key: 'logout', title: 'Logout', focusedIcon: 'album' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        MyProfile: ProfileRoute,
        chatGpt: ChatGptRoute,
        logout: LogoutRoute
    });

    return (
        <SafeAreaProvider>
            <PaperProvider>
                {!user ?
                    <>
                        <Login setUser={setUser} />
                        {/* <Button style={{ width: 200, marginLeft: 100 }} mode="contained-tonal" onPress={() => navigation.navigate('Signup')}>
                        Register
                    </Button> */}
                    </>
                    : <BottomNavigation
                        setUser={setUser}
                        navigationState={{ index, routes }}
                        onIndexChange={setIndex}
                        renderScene={renderScene}
                    />}
            </PaperProvider>
        </SafeAreaProvider>
    );
};


export default HomeScreen;