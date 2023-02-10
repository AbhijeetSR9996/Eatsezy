import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { TabBarItem } from 'react-native-tab-view'
import { Colors, Fonts } from '../../global'

const TransactionHistory = ({ }) => {
    return (
        // <View style={{ flex: 1 }}>
        //     <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
        //         <View style={{}}>
        //             <Text style={styles.font1}>Straits Teriyaki (12345566)</Text>
        //             <Text style={styles.font2}>20 March 2020, 05:00 PM</Text>
        //         </View>
        //         <View style={{}}>
        //             <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
        //                 <Text style={styles.font3}>$50.00</Text>
        //             </TouchableOpacity>
        //             <Text style={styles.font4} >Visa — 5342</Text>
        //         </View>
        //     </View>
        // </View>

        <View style={styles.vw}>
             <View style={styles.vw2}>
                 
                 <View style={styles.vw3}>
                     <TouchableOpacity style={styles.container1}>
                         <Text style={[styles.font3,{position:'absolute',alignSelf:'center',top:15}]}>-$50.00</Text>
                     </TouchableOpacity>
                     <Text style={[styles.font2,{position:'absolute',bottom:15}]}>20 March 2020,</Text>
                     <Text style={[styles.font2,{position:'absolute',bottom:0}]}>05:00 PM</Text>
                 </View>
                 <View style={styles.vw4}>
                     <Image source={require("../../assets/images/transactionimage.png")}
                     style={styles.img}/>
                 </View>
                 <View style={styles.vw5}>
                     <Text style={[styles.font1,{position:'absolute'}]}>Straits Teriyaki (12345566)</Text>
                     <Text style={[styles.font4,{position:'absolute',bottom:20,left:20,marginVertical:-20}]} >Visa — 5342</Text>
                 </View>
             </View>
         </View>

    )
}

export default TransactionHistory

const styles = StyleSheet.create({
    font1: {
        //fontSize: 12,
        fontSize:14,
        fontFamily: Fonts.SEMIBOLD,
        color: Colors.BLACK,
    },
    font2: {
        fontSize: 12,
        fontFamily: Fonts.LIGHT
        , color: Colors.BLACK,
    },
    font3: {
        //fontSize: 13,
        fontSize:19,
        fontFamily: Fonts.MEDIUM
        , //color: Colors.PRIMARY,
        color:'#ef3340',
        fontWeight:'bold'
    },
    font4: {
        fontSize: 11,
        fontFamily: Fonts.LIGHT
        , color: Colors.BLACK,
    },
    vw: { 
        flex: 1, 
        backgroundColor:'white',
        paddingVertical:0, 
    },
    vw2: { 
        backgroundColor:'white',
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginVertical: 5, 
        position:'relative',
        display:'flex', 
        paddingVertical:0 
    },
    vw3: {
        backgroundColor:'white',
        height:75,
        width:130,
        position:'relative',
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",  
    },
    vw4: {
        backgroundColor:'white',
        height:75,
        width:50,
        position:'relative',
        alignItems: "center", 
        justifyContent: "center",
        flexDirection: "column"
    },
    vw5: {
        backgroundColor:'white',
        height:75,
        width:130,
        position:'relative',
        flexDirection: "column",
        display:'flex', 
        alignItems: "center", 
        justifyContent: "center"
    },
    container1: { 
        flex: 1, 
        position:'relative',
        width:70,
        paddingVertical:10,
        backgroundColor:'white', 
    },
    img: {
        height:50,
        width:50,
        position:'absolute'
    },

})
