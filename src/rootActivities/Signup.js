import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';


const style = StyleSheet.create({
    flex: {
        display: 'flex',
        margin: 50,
        marginTop: 50,
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
const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    return (
        <View style={style.flex}>
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            </Card>
            <TextInput
                label="Name"
                style={style.input}
                value={name}
                type={'outlined'}
                onChangeText={text => setName(text)}
            />
            <TextInput
                label="Email"
                style={style.input}
                value={email}
                type={'outlined'}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                label="Mobile"
                style={style.input}
                value={mobile}
                type={'outlined'}
                onChangeText={text => setMobile(text)}
            />

            <Button mode="contained-tonal" onPress={() => console.warn('Pressed')}>
                Signup
            </Button>
        </View>
    );
};


export default Signup;