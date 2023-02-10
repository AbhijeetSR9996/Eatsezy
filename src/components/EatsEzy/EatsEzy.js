import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fonts } from '../../global'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../global/constants'
import BookmarkSvg from '../../assets/svg/bookmark.svg'

const EatsEzy = ({ item, index }) => {
    const goToBlogUrl = () => {
        Linking.openURL(item?.blogURL)
    }
    return (
        <View>
            <TouchableOpacity

                style={styles.cardView}
                onPress={goToBlogUrl}
            >
                <Image
                    //source={{ uri: item.blogImage }}
                    source={require("../../assets/images/guideimage.png")}
                    style={styles.cardImage}
                    resizeMode="cover"
                />
                <View style={styles.cardTextContainer}>
                    {/* <Text numberOfLines={2} style={styles.cardText}>{item.blogTitle}</Text> */}
                    <Text numberOfLines={2} style={styles.cardText}>Nutrition Experts Reveals: Effective food habits</Text>
                    {/* <Text numberOfLines={2} style={styles.cardSmallText} //numberOfLines={4}
                    >{item.blogDesc}</Text> */}
                    <Text numberOfLines={2} style={styles.cardSmallText}>Welcome to the era where we do 
                    snacks,break-fast, lunch, and........</Text>
                    <TouchableOpacity style={{position:'absolute',zIndex:1,top:10,backgroundColor:'white',right:5}}>
                    <BookmarkSvg />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default EatsEzy

const styles = StyleSheet.create({
    cardImage: {
        // width: 352,
        width: "35%",
        //height: 200,
        height:SCREEN_HEIGHT / 6.5,        
        //borderRadius: 15,
        borderBottomLeftRadius:15,
        borderTopLeftRadius:15,
        position:'absolute',
        alignSelf:'flex-start'
    },
    cardTextContainer: {
        //paddingHorizontal: 15, 
        //paddingVertical: 19,
        //backgroundColor:'lime',
        position:'absolute',
        alignSelf:'flex-end',
        marginHorizontal:20,
        borderBottomRightRadius:15,
        borderTopRightRadius:15,
        //borderRadius:15
        height:SCREEN_HEIGHT / 5.5,
        width:SCREEN_WIDTH / 1.8,
        zIndex:1
    },
    cardSmallText: {
        fontSize: 13,
        color: "#161616",
        fontFamily: Fonts.LIGHT,
        // opacity: 0.45
        top:13
    },
    cardText: {
        //fontSize: 16,
        fontSize:15,
        color: "#161616",
        fontFamily: Fonts.MEDIUM,
        // opacity: 0.65
        top:10
    },
    cardView: {
        backgroundColor: '#fff',
        //backgroundColor:'grey',
        marginHorizontal: 20,
        borderRadius: 15,
        marginVertical: 15,
        //borderWidth: .3,
        height:SCREEN_HEIGHT / 6.5,
        position:'relative',
        elevation:10,
        zIndex:1
    },
})
