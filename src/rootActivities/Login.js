import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import {
    GoogleSignin,
    GoogleSigninButton,
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
    },
    tinyLogo: {
        width: 66,
        height: 58,
    },
})
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            props.setUser(userInfo.user);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    React.useEffect(() => {
        GoogleSignin.configure();
    }, [])
    return (
        <View style={style.flex}>
            {/* <TextInput
                label="Email"
                style={style.input}
                value={email}
                type={'outlined'}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                style={style.input}
                label="Password"
                value={password}
                type={'outlined'}
                onChangeText={text => setPassword(text)} />
            <Button mode="contained-tonal" onPress={() => console.warn('Pressed')}>
                Login
            </Button> */}
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={false}
            />
        </View>
    );
};


export default Login;