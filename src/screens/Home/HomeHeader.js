import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, TouchableOpacity, View,Image } from 'react-native';
//import { connect } from 'react-redux';
//import BellSvg from "../../assets/svg/bell.svg";
//import Bell from '../../assets/images/Bell.png';
import { Colors, Fonts, } from '../../global';


const HomeHeader = ({ name }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.HeaderContainer} >
            <Image source={require('../../assets/images/pasta.jpg')} 
            style={[styles.HeaderContainer,{height:'100%',width:'100%',}]}
            />
            
            {/* <View >
                <Text style={styles.font2}>{name ? "Hi " + name : "Hi Guest"}</Text>
                   <Text style={styles.font3}>Let's see, what's new!</Text>
            </View> */}
   
            <View>
                {/* <View style={styles.smallCircle}>
                    <Text style={styles.font1}>3</Text>
                </View> */}
                <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreen')}}
                style={styles.notifyiconstyle} >
                    {/* <Bell /> */}
                    {/* <BellSvg style={styles.bell}/> */}
                    <Image source={require('../../assets/images/notifybell.png')} 
                    style={styles.bell} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
// const mapStateToProps = state => ({
//     name: state.user.name
// });

//const mapDispatchToProps = dispatch => ({ dispatch });
// export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
export default HomeHeader;

const styles = StyleSheet.create({
    smallCircle: {
        height: 15,
        width: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.WHITE,
        backgroundColor: Colors.PRIMARY,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1
    },
    font1: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 9,
        color: Colors.WHITE
    },
    font2: {
        fontFamily: Fonts.BOLD,
        fontSize: 23,
        color: Colors.BLACK
    },
    font3: {
        fontFamily: Fonts.LIGHT,
        fontSize: 13,
        color: Colors.GRAY_DARK
    },
    HeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        //marginHorizontal: 5,
        //backgroundColor: Colors.ALERT,
        //borderRadius:15,
        height:120,
        borderTopLeftRadius:2,
        borderTopRightRadius:2,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        width:'100%'
    },
    bell:{
        //right:40,
        //top:25,
        //backgroundColor:'transparent',
        //borderColor:'white',
    },
    notifyiconstyle:{
        backgroundColor:'transparent',
        right:40,
        top:25,
    },
});
