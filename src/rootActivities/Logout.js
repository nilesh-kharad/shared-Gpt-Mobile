import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import {
    GoogleSignin,
    GoogleSigninButton,
    GoogleSignoutButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

const style = StyleSheet.create({
    flex: {
        display: 'flex',
        margin: 50,
        marginTop: 200,
        width: 300
    },
    input: {
        borderRadius: 10,
        margin: 10,
    },
    btn: {
        color: 'red',
        backgroundColor: 'red'
    }
})
const Logout = (props) => {

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            props.setUser(null); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };
    React.useEffect(() => {
        GoogleSignin.configure();
    }, [])
    return (
        <View style={style.flex}>
            <Button onPress={signOut} >Logout</Button>
        </View>
    );
};


export default Logout;