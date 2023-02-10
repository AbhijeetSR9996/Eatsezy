import { StyleSheet } from 'react-native'
import { Constants, Fonts } from '../../global'
export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        width: Constants.SCREEN_WIDTH,
        height: 120,
        paddingHorizontal:25,
        marginVertical:-5,
    },
    first: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        width:300,
        margin:3,
        borderRadius:15,
        right:0,
        elevation:8,
        // shadowColor:'#000',
        // shadowOffset:{width:0,height:0},
        // shadowOpacity:0.5,
        // shadowRadius:2,
        // padding:-20,
    },
    second: {
        marginLeft: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        //backgroundColor:'lightgrey'
    },
    coverImage: {
        width: 100,
        height: 95,
        bottom:8,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    restaurantName: {
        color: '#161616',
        fontSize: 13,
        left:15,
        top:10,
        // marginTop: 15
        fontFamily: Fonts.SEMIBOLD
    },
    coverImageContainer: {
        height: 80,
        width: 80,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        width: (Constants.SCREEN_WIDTH / 2) - 40
    },
    infoTxt1: {
        fontSize: 12,
        color: '#161616',
        opacity: 0.5,
        marginLeft: 8.11,
        width: (Constants.SCREEN_WIDTH / 2) - 40,
        top:5,
        left:7
    },
    infoTxt2: {
        fontSize: 11,
        color: '#161616',
        opacity: 0.65,
        marginLeft: 8.11,
        top:20,
        right:140
    },
    infoTxt3: {
        fontSize: 11,
        color: '#161616',
        opacity: 0.65,
        marginLeft: 8.11,
        top:40,
        left:-210
    },
    infoTxt4: {
        fontSize: 11,
        color: '#161616',
        opacity: 0.65,
        marginLeft: 8.11,
        top:40,
        left:-183
    },
    rating: {
        backgroundColor: '#4EC43B',
        borderRadius: 10,
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        left:130, 
        height:23
    },
    ratingTxt: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 12,
        color: '#fff',
        paddingHorizontal: 10,
        paddingTop: 6,
        paddingBottom: 4,
        bottom:3
    },
    like: {
        marginTop: 7,
        left:5
    },
    view2:{
        backgroundColor:'white',
        height:25,
        width:25,
        borderRadius:50,
        bottom:20,
        left:20,
        elevation:8
    },
    vw:{ 
        flex: 1, 
    },
    mappin:{ 
        color: '#16161690',
        top:25, 
        left:15 
    },
    dollar:{ 
        top:25, 
        left:55,
        height:17,
        width:25 
    },
});

