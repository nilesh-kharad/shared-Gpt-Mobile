import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={style.flex}>
            {/* <TextInput
                label="Name"
                value={name}
                type={'outlined'}
                onChangeText={text => setName(text)}
            /> */}
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
            <Button style={style.button} title={'Login'} />
        </View>
    );
};
const style = StyleSheet.create({
    flex: {
        display: 'flex',
        marginTop: 250,
        marginLeft: 45
    },
    input: {
        borderRadius: 10,
        width: 300,
        margin: 10,
    },
    button: {
        // borderRadius: 10,
        color:'red',
        width: 100,
        margin: 10,
    }
})

export default Login;