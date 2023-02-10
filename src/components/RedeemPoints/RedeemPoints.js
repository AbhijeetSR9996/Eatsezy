import React from 'react'
import { TextInput, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Colors, Fonts } from '../../global'
import CoinSvg from '../../assets/svg/coin.svg';

const RedeemPoints = ({ item, index }) => {
    return (
        <View>
            <View style={styles.sendContainer}>
               <View style={styles.vw1}></View>
               <View style={styles.vw2}></View>
               <View style={styles.vw3}></View>
               <View style={styles.vw4}></View>
               <View style={styles.vw5}></View>
               <View style={styles.vw6}></View>
               <View style={styles.vw7}></View>
               <View style={styles.vw8}></View>
                <View style={styles.vw9}>
                    {/* <Image source={item.imgUrl} style={{ height: 40, width: 40, marginHorizontal: 10 }} /> */}
                    <View style={styles.vw10}>

                        <Text style={[styles.font1,{right:40,paddingHorizontal:33}]}>{item.nameone}</Text>
                        <Text style={[styles.font1,{top:20,right:20}]}>{item.nametwo}</Text>


                    </View>
                </View>
                <View style={styles.vw11}>

                <TouchableOpacity style={styles.sendButton}>
                   
                    {/* <Text style={styles.sendText}>{"100"} Points</Text> */}
                    {/* <Text style={styles.sendText}>points</Text> */}
                    <Text style={[styles.sendText,{left:25,bottom:10}]}>Redeem</Text> 
                    <Text style={styles.txt}>20 March 2020</Text>           
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RedeemPoints

const styles = StyleSheet.create({
    sendContainer: {
        //borderWidth: 1,
        //borderColor: Colors.PRIMARY,
        //backgroundColor: `${Colors.PRIMARY}10`,
        backgroundColor:'#EF334047',
        //backgroundColor:'grey',
        //borderRadius: 10,
        //flexDirection: "row",
        flexDirection: "column",
        // marginHorizontal: 20,
        marginVertical: 10,
        marginBottom: 10,
        height:70,
        width:320,
        
    },
    sendButton: {
        //backgroundColor: Colors.PRIMARY,
        //backgroundColor:'transparent',
        //backgroundColor:'green',
        // width: 45,
        paddingHorizontal: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius:10,
        alignItems: "center", 
        justifyContent: "center",
        position:'absolute',
        paddingVertical:10
    },
    sendText: {
        //fontSize: 12,
        fontSize:15,
        fontFamily: Fonts.MEDIUM,
        //color: Colors.WHITE,
        //color:Colors.BLACK,
        color:'#EF3340',
        // marginTop: Platform.OS == "android" ? 5 : 0,
        position:'absolute',
        //left:57
    },
    font1: {
        //fontSize: 14,
        fontSize:13,
        fontFamily: Fonts.MEDIUM,
        color: Colors.BLACK,
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        position:'absolute'
    },
    vw1: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        left:-5,
        top:4
    },
    vw2: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        left:-5,
        top:20
    },
    vw3: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        left:-5,
        top:37
    },
    vw4: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        left:-5,
        top:54
    },
    vw5: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        right:-5,
        top:4
    },
    vw6: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        right:-5,
        top:20
    },
    vw7: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        right:-5,
        top:37
    },
    vw8: {
        height:12,
        width:12,
        backgroundColor:'white',
        position:'absolute',
        borderRadius:10,
        right:-5,
        top:54
    },
    vw9: { 
        flex: 1, 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "flex-start", 
        paddingVertical: 15, 
    },
    vw10: { 
        flex: 1, 
        backgroundColor:'lime', 
        paddingVertical:20,
        alignContent:'center',
        position:'relative' 
    },
    vw11: {
        position:'relative',
        backgroundColor:'transparent',
        height:70,
        width:100, 
        bottom:30,
        alignContent:"center",
        justifyContent:'center',
        alignSelf:'flex-end'
    },
    txt: {
        left:7,
        top:15,
        fontSize:12,
        fontFamily: Fonts.MEDIUM,
        color:Colors.GRAY_DARK,
        position:'absolute',
    },
})
