import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
//import { quickLink } from '../../Dummy/Dummy';

const Cuisines = () => {
  return (<>	
 <View style={styles.vw} >
        <ScrollView horizontal style={styles.sv} showsHorizontalScrollIndicator={false}>
        <Image source={require('../../assets/images/cuisine2Image1.png')} style={styles.img1}/>
        <Image source={require('../../assets/images/indiandishes.png')} style={styles.img2}/>
        <Image source={require('../../assets/images/cuisine2Image2.png')} style={styles.img3}/>
        </ScrollView>
	</View>
  </>
  )
}

const styles = StyleSheet.create({
  vw:{ 
    marginHorizontal:0,
    bottom:0, 
  },
  sv:{
    height:140,
  },
  img1:{
    height:120,
    //width:200,
    top:20,
    marginLeft:1,
    borderRadius:10,
  },
  img2:{
    height:120,
    width:200,
    top:20,
    marginLeft:15,
    borderRadius:10
  },
  img3:{
    height:120,
    //width:200,
    top:20,
    marginLeft:15,
    borderRadius:10
  },
});

export default Cuisines;