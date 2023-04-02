import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const SearchBar = ({handleSearch}) => {

   


    return (
        <View>
            <TextInput
                placeholder='Ara...'
                style={styles.bar}
                onChangeText={handleSearch}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    bar: {
        marginTop: 30,
        backgroundColor: '#eceff1',
        padding: 9,
        margin: 5,
        borderRadius: 5
    }
})