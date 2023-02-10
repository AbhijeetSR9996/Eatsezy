import moment from 'moment';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../global'

const CommentCard = ({ item }) => {
    const reviewImages = {
        "1": require(`../../assets/images/1.png`),
        "2": require(`../../assets/images/2.png`),
        "3": require(`../../assets/images/3.png`),
        "4": require(`../../assets/images/4.png`),
        "5": require(`../../assets/images/5.png`),

    }
    return (
        <View style={styles.parent}>
            <View style={styles.info}>
                <View style={styles.first}>
                    <View style={styles.image}>
                        <Image source={reviewImages[Math.round(item.starRating)]} style={{ height: "100%", width: "100%" }} />
                    </View>
                    <View>
                        <Text style={styles.name}>{item.userName}</Text>
                        <Text style={styles.age}>{moment(item.date.toString()).startOf('minutes').fromNow()}</Text>
                    </View>
                </View>
                <View style={styles.rating}>
                    <Text style={styles.ratingTxt}>{item.starRating.toFixed(1)}/5.0</Text>
                </View>
            </View>
            <Text style={styles.desc}>{item.reviewMessage}</Text>
            <View style={styles.underline}></View>
        </View>

        
    )
}

export default CommentCard

const styles = StyleSheet.create({
    parent: {
        marginTop: 20,
        //backgroundColor:'lime',
        borderRadius:10
    },
    info: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    },
    first: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 5,
        marginRight: 15,
    },
    rating: {
        backgroundColor: '#4EC43B',
        borderRadius: 8,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingTxt: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 12,
        color: '#fff',
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 4,
    },
    name: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 14,
        color: '#161616',
        opacity: 0.85,
        marginBottom: -5
    },
    age: {
        fontSize: 10,
        marginTop: 5,
        color: '#161616',
        opacity: 0.45
    },
    desc: {
        fontSize: 12,
        color: '#161616',
        opacity: 0.65,
        marginTop: 13
    },
    underline: {
        height: 1.5,
        width: '100%',
        backgroundColor: '#16161610',
        marginTop: 20,
    }
})

