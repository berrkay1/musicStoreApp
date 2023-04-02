import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstPage = (props) => {

    const toPageSecond = () => {
        console.log(props);
        props.navigation.navigate('SecondScreen');
    }

    return (
        <View>
            <Text>FirstPage</Text>
            <Button title='Go to Second page!' onPress={toPageSecond} />
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({})