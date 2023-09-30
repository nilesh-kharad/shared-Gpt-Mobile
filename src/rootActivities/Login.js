import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


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
        backgroundColor:'red'
    }
})
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={style.flex}>
            <TextInput
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
            </Button>
        </View>
    );
};


export default Login;