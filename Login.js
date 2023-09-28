import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View class={style.flex}>
            {/* <TextInput
                label="Name"
                value={name}
                type={'outlined'}
                onChangeText={text => setName(text)}
            /> */}
            <TextInput
                label="Email"
                value={email}
                type={'outlined'}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Password"
                value={password}
                type={'outlined'}
                onChangeText={text => setPassword(text)} />
        </View>
    );
};
const style = StyleSheet.create({
    flex: {
        display: 'flex',
        justifyContent: 'center',
        width:10,
        alignContent: 'center'

    }
})

export default Login;