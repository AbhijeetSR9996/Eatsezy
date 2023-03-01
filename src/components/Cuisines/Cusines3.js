import { View, Text,Image,StyleSheet,Animated,Dimensions,ScrollView } from 'react-native'
import React from 'react'
//import { quickLink } from '../../Dummy/Dummy';
import { Colors, Constants, Fonts, ScreenNames, Server } from '../../global';
//import PinSvg from '../../assets/svg/PinSvg.svg';
//import PinSvgWhite from '../../assets/svg/PinSvgWhite.svg';
//import Dollar from '../../assets/svg/dollar-round.svg';

const Cuisines3 = () => { 
  return (
  <>	
 <View style={styles.view1} >
        <ScrollView horizontal style={styles.scrollview} showsHorizontalScrollIndicator={false} bouncesZoom={true}>
        
                                <View style={styles.view2}>	
									 <Image source={require('../../assets/images/restdish1.png')}
									 style={styles.image1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.svg1}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.svg2}/> */}
									 <Text style={styles.txt5}> Free</Text>
									<View style={styles.view3}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									</View>
									<View style={styles.view4}>
										<Image source={require('../../assets/images/blurbg.png')}
									 style={styles.image2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									 style={styles.image3}/>
									</View>
								</View>

                               <View style={styles.view5}>	
									 <Image source={require('../../assets/images/restdish1.png')}
									 style={styles.image4}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.svg1}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.svg2}/> */}
									 <Text style={styles.txt5}> Free</Text>
									<View style={styles.view6}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									</View>
									<View style={styles.view7}>
										<Image source={require('../../assets/images/blurbg.png')}
									 style={styles.image5}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									 style={styles.image6}/>
									</View>
								</View>

                                <View style={styles.view8}>	
									 <Image source={require('../../assets/images/restdish1.png')}
									 style={styles.image7}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.svg1}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.svg2}/> */}
									 <Text style={styles.txt5}> Free</Text>
									<View style={styles.view9}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									</View>
                                    <View style={styles.view10}>
										<Image source={require('../../assets/images/blurbg.png')}
									 style={styles.image8}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									 style={styles.image9}/>
									</View>
                                </View>
        </ScrollView>
	</View>
  </>
  )
}

const styles = StyleSheet.create({
	view1:{ 
		marginHorizontal:0,
		top:-20,
		height:300, 
	},
	view2:{
		top:10,width:180,height:240,elevation:8,borderRadius:20,backgroundColor:'white',left:5
	},
	view3:{
		backgroundColor:'#4EC33B',height:20,width:38,bottom:30,left:115,top:-17,borderRadius:8
	},
	view4:{
		left:140,top:-240,height:30,width:30,backgroundColor:'#fff',borderRadius:50
	},
	view5:{
		top:50,width:180,height:240,elevation:8,borderRadius:20,backgroundColor:'white',left:30
	},
	view6:{
		backgroundColor:'#4EC33B',height:20,width:38,bottom:30,left:115,top:-17,borderRadius:8
	},
	view7:{
		left:140,top:-240,height:30,width:30,backgroundColor:'white',borderRadius:50
	},
	view8:{
		top:10,width:180,height:240,elevation:8,borderRadius:20,backgroundColor:'white',left:60,marginRight:65
	},
	view9:{
		backgroundColor:'#4EC33B',height:20,width:38,bottom:30,left:115,top:-17,borderRadius:8
	},
	view10:{
		left:140,top:-240,height:30,width:30,backgroundColor:'white',borderRadius:50
	},
    image1:{
		height:150,width:180,borderTopLeftRadius:20,borderTopRightRadius:20,left:-10,top:0,marginHorizontal:10,
	},
	image2:{
		height:30,width:30,
	},
	image3:{
		height:15,width:15,top:-22,left:8
	},
	image4:{
		height:150,width:180,borderTopLeftRadius:20,borderTopRightRadius:20,left:-10,top:0,marginHorizontal:10,
	},
	image5:{
		height:30,width:30,
	},
	image6:{
		height:15,width:15,top:-22,left:8
	},
	image7:{
		height:150,width:180,borderTopLeftRadius:20,borderTopRightRadius:20,left:-10,top:0,marginHorizontal:10,
	},
	image8:{
		height:30,width:30,
	},
	image9:{
		height:15,width:15,top:-22,left:8
	},
    scrollview:{
		height:400
	},
	svg1:{
		left:17,top:213,position:'absolute'
	},
	svg2:{
		left:65,top:208,position:'absolute'
	},
    txt1:{
		fontSize: 13,color: Colors.BLACK,position:'relative',top:10,left:20,fontWeight:'bold',
	},
	txt2:{
		fontSize: 11,color: Colors.GRAY_DARK,position:'relative',top:10,left:20,fontWeight:'bold'
	},
	txt3:{
		fontSize: 11,color: Colors.GRAY_DARK,position:'relative',top:10,left:20,fontWeight:'500'
	},
	txt4:{
		fontSize: 11,color: Colors.GRAY_DARK,position:'relative',top:15,left:30,fontWeight:'bold'
	},
	txt5:{
		fontSize: 11,color: Colors.GRAY_DARK,position:'relative',top:0,left:80,fontWeight:'500'
	},
	txt6:{
		fontSize: 11,color: Colors.GRAY_DARK,position:'relative',top:2,left:3,fontWeight:'500',color:'white'
	},
})

export default Cuisines3;
