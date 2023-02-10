import React from 'react'
import { TextInput, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Colors, Fonts } from '../../global'
import CoinSvg from '../../assets/svg/coin.svg';

const EarnPoints = ({ item, index }) => {
    return (
        <View >
            <View style={styles.sendContainer}>

                <View style={styles.vw}>
                    <Image source={item.imgUrl} style={styles.img} />
                    <View style={{ flex: 1, }}>

                        <Text style={styles.font1}>{item.name}</Text>
                    </View>
                </View>
                {/* <View > */}

                <TouchableOpacity style={styles.sendButton}>
                    
                    <CoinSvg style={{right:35}}/>
                    <Text style={styles.sendText}>{"100"} Points</Text>
                    {/* <Text style={styles.sendText}>points</Text> */}
                </TouchableOpacity>
                {/* </View> */}
            </View>
        </View>
    )
}

export default EarnPoints

const styles = StyleSheet.create({
    sendContainer: {
        // borderWidth: 1,
        //borderColor: Colors.PRIMARY,
        backgroundColor: `${Colors.PRIMARY}10`,
        //backgroundColor:'grey',
        borderRadius: 10,
        //flexDirection: "row",
        flexDirection: "column",
        // marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 10,
        height:150,
        width:150,
        marginHorizontal:5,
        position:'relative',
        zIndex:1
    },
    sendButton: {
        //backgroundColor: Colors.PRIMARY,
        backgroundColor:'transparent',
        // width: 45,
        paddingHorizontal: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius:10,
        alignItems: "center", 
        justifyContent: "center",
        position:'relative',
        paddingVertical:10
    },
    sendText: {
        //fontSize: 12,
        fontSize:15,
        fontFamily: Fonts.MEDIUM,
        //color: Colors.WHITE,
        color:Colors.BLACK,
        // marginTop: Platform.OS == "android" ? 5 : 0,
        position:'absolute',
        left:57
    },
    font1: {
        //fontSize: 14,
        fontSize:13,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        //color:'blue',
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        
        
    },
    vw: { 
        flex: 1, 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "flex-start", 
        paddingVertical: 15,
        //backgroundColor:'lime',
        //position:'relative', 
    },
    img: { 
        height: 40, 
        width: 40, 
        marginHorizontal: 10,
        //position:'absolute' 
    },

})
