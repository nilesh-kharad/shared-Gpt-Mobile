import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, TextInput, Button, Text, ProgressBar, Divider, MD3Colors, Menu } from 'react-native-paper';
import { getChatGptResponse } from './apiRepository/openai';

const Chatgpt = (props) => {
    console.log('user', props.user.name);
    const [text, setText] = useState()
    const [response, setResponse] = useState()
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const [selectedModel, setSelectedModel] = useState('')
    const style = StyleSheet.create({
        promtInput: {
            position: 'absolute',
            bottom: 10,
            left: 40,
            width: '80%'
        },
        flex: {
            flex: 1,
        }
    })

    const handleSearch = async () => {
        setLoading(true)
        if (!text || text === '') {

        } else {
            const objToPush = {
                "model": selectedModel,
                "messages": [
                    {
                        "role": "system",
                        "content": text
                    }
                ]
            }
            const result = await getChatGptResponse(objToPush)
            console.log('result', result.choices[0].message.content);
            setResponse(result.choices[0].message.content)
        }
        setLoading(false)
    };

    const handleModelMenu = () => {
        setVisible(true);
    }
    const closeMenu = () => setVisible(false);

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title={`Hello ${props?.user?.givenName} !`} />
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Appbar.Action icon="dots-vertical" onPress={handleModelMenu} />}
                >
                    <Menu.Item onPress={() => { setSelectedModel('gpt-3.5-turbo') }} title="gpt-3.5-turbo" />
                    <Menu.Item onPress={() => { setSelectedModel('gpt-3.5-turbo-16k') }} title="gpt-3.5-turbo-16k" />
                    <Divider />
                    <Menu.Item style={{ backgroundColor: 'red' }} onPress={() => { }} title={selectedModel} />
                </Menu>
            </Appbar.Header>
            <View>
                {loading ? <ProgressBar indeterminate={loading} color={MD3Colors.error50} /> :
                    <ScrollView style={{padding:20}}>
                        <Text variant="headlineSmall">{response}</Text>
                    </ScrollView>}
            </View>
            <View style={{ ...style.flex, ...style.promtInput }}>
                <View >
                    <TextInput
                        label="Type here"
                        value={text}
                        onChangeText={text => setText(text)} />
                </View>
                <View>
                    <Button onPress={handleSearch}>Search</Button>
                </View>
            </View>
        </>
    );
};

export default Chatgpt;

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