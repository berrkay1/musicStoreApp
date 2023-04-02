import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'


const SongCart = (props) => {

    // console.log('props', props.item.imageUrl)
    return (
        <View style={styles.cartCol}>

            <Image style={styles.image} source={{ uri: props.item.imageUrl }} />

            <View style={styles.sagCol}>
                <Text style={styles.title}>{props.item.title}</Text>
                <View style={styles.sagAltCol}>
                    <View style={styles.artistYearView}>
                        <Text style={styles.textArtist}>{props.item.artist}</Text>
                        <Text style={styles.textYear}>{props.item.year}</Text>
                    </View>
                    {props.item.isSoldOut && <View style={styles.stokView}>
                        <Text style={styles.stokTitle}>Tükendi</Text>
                    </View>}
                </View>
            </View>
        </View>
    )
}

export default SongCart

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width / 3,
        borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
    },
    cartCol: {
        display: 'flex',

        flexDirection: 'row',
        padding: 10

    },
    sagCol: {
        display: 'flex',

        flex: 1,
        marginLeft: 10,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        display: 'flex',
        marginLeft: 4,
        alignContent: 'flex-end'

    },
    sagAltCol: {
        padding: 4,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between'

    }, stokView: {
        borderColor: 'red',
        borderWidth: 1,
        color: 'red',
        fontSize: 15,

    },
    stokTitle: {
        padding: 4,
        color: 'red',
        fontSize: 15,

    },
    artistYearView: {
        display: 'flex',

    },
    textArtist: {
        fontSize: 14,
        flexWrap: 'wrap'
    },
    textYear: {
        fontSize: 12,
        opacity: 0.6
    }

})