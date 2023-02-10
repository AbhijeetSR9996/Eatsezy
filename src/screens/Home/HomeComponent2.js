import { View, Text,Image,ScrollView,StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../global';

const HomeComponent2 = () => {
  return (
    <View style={styles.mainvw}>

            <ScrollView style={styles.sv} nestedScrollEnabled showsVerticalScrollIndicator={false}>

                                    <View style={styles.vw1}>
									 <Image source={require('../../assets/images/restdish2.png')}
									 style={styles.img1}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Snacks to </Text>
									  <Text style={styles.txt1}> enjoy! </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>
                                   
                                   <View style={styles.vw3}>
									 <Image source={require('../../assets/images/infra.png')}
									 style={styles.img2}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Newly Opened </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>
                                    

                                    <View style={styles.vw4}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Best of </Text>
									  <Text style={styles.txt1}> singapore </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>

									<View style={styles.vw5}>
									 <Image source={require('../../assets/images/infra.png')}
									 style={styles.img2}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Newly Opened </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>

                                    <View style={styles.vw6}>
									 <Image source={require('../../assets/images/infra.png')}
									 style={styles.img2}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Newly Opened </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>

                                    <View style={styles.vw7}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Best of </Text>
									  <Text style={styles.txt1}> singapore </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>                             

                                    <View style={styles.vw8}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <View style={styles.vw2}>
									  <Text style={styles.txt1}> Best of </Text>
									  <Text style={styles.txt1}> singapore </Text>
									  <Text style={styles.txt2}> 30 Places </Text>
									 </View>
									</View>

            </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
   mainvw:{
	   backgroundColor:'grey',
	   height:550,
	   width:320,
	   left:-650,
	   top:1370
	},
   sv:{
	   height:250,
	   backgroundColor:'white'
	},
   vw1:{
	   width:140,
	   height:210,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'white',
	   left:170,
	   marginTop:20,
	   left:10,
	},
   vw2:{
		backgroundColor:'transparent',
		opacity:0.8,
		height:70,
		width:140,
		bottom:40,
		left:0,
		top:-70,
		borderBottomLeftRadius:20,
		borderBottomRightRadius:20
	 },	
   vw3:{
	   width:140,
	   height:240,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'grey',
	   marginTop:-210,
	   left:170
	},
   vw4:{
	   width:140,
	   height:210,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'grey',
	   marginTop:-20,
	   left:10
	},
   vw5:{
	   width:140,
	   height:240,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'grey',
	   marginTop:-180,
	   left:170
	},
   vw6:{
	   width:140,
	   height:240,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'grey',
	   marginTop:10,
	   left:170
	},
   vw7:{
	   width:140,
	   height:210,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'grey',
	   marginTop:-300,
	   left:10
	},
   vw8:{
	   width:140,
	   height:210,
	   elevation:8,
	   borderRadius:20,
	   backgroundColor:'grey',
	   marginTop:10,
	   left:10
	},
   img1:{
	   height:210,
	   width:140,
	   left:-10,
	   top:0,
	   marginHorizontal:10,
	   borderRadius:20
	},
   img2:{
	   height:240,
	   width:140,
	   left:-10,
	   top:0,
	   marginHorizontal:10,
	   borderRadius:20
	},
   txt1:{
	   fontSize: 15,
	   color: Colors.WHITE,
	   position:'relative',
	   top:2,
	   left:3,
	   fontWeight:'500',
	   color:'white',
	   textTransform:'none',
	   fontWeight:'bold'
	},
   txt2:{
	   fontSize: 11,
	   color: Colors.WHITE,
	   opacity:0.7,
	   position:'relative',
	   top:3,
	   left:3,
	   fontWeight:'500',
	   color:'white',
	   fontWeight:'700'
	}, 
   
});

export default HomeComponent2;