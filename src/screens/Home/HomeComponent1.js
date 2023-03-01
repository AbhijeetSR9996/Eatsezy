import { View, Text,Image,ScrollView,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import React from 'react';
//mport PinSvg from '../../assets/svg/PinSvg.svg';
//import Dollar from '../../assets/svg/dollar-round.svg';
import { Colors } from '../../global';



// const Item = ({text1}) => {
// 	<View >
// 		<Text>{text1}</Text>
// 	</View>
// };

const HomeComponent1 = () => {

//     const renderItem = ({item}) => {
// 		<Item title={item.text1} />
// 	}

// 	const Images = [
// 		{image: require('../../assets/images/RestaurantImage.png')},
// 		{image: require('../../assets/images/RestaurantImage.png')}
// 	  ];

//      const DATA = [
//  	  {
// 		  "image1" : Images[0].image,
// 		  "image2" : Images[1].image,
// 		  "image3" : Images[0].image,
//        "text1" : 'Urban Tadka Dining',
// 		  "text2" : 'Nelson Bridge, Singapore',
// 		  "text3" : 'Chinese | Asian',
// 		  "text4" : '3 km',
// 		  "text5" : 'Free',
// 		  "text6" : '4.1/5',
//  	  },
//  	  {
// 		"image1" : Images[0].image,
// 		"image2" : Images[1].image,
// 		"image3" : Images[0].image,
// 		"text1" : 'Urban Tadka Dining',
// 		"text2" : 'Nelson Bridge, Singapore',
// 		"text3" : 'Chinese | Asian',
// 		"text4" : '3 km',
// 		"text5" : 'Free',
// 		"text6" : '4.1/5',
// 	 },
// 	 {
// 		"image1" : Images[0].image,
// 		"image2" : Images[1].image,
// 		"image3" : Images[0].image,
// 		"text1" : 'Urban Tadka Dining',
// 		"text2" : 'Nelson Bridge, Singapore',
// 		"text3" : 'Chinese | Asian',
// 		"text4" : '3 km',
// 		"text5" : 'Free',
// 		"text6" : '4.1/5',
// 	 },
// 	 {
// 		"image1" : Images[0].image,
// 		"image2" : Images[1].image,
// 		"image3" : Images[0].image,
// 		"text1" : 'Urban Tadka Dining',
// 		"text2" : 'Nelson Bridge, Singapore',
// 		"text3" : 'Chinese | Asian',
// 		"text4" : '3 km',
// 		"text5" : 'Free',
// 		"text6" : '4.1/5',
// 	 },
//    ];

  return (
    <View style={styles.mainvw}>

        {/* <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.text1}	style={{height:50,backgroundColor:'lime'}}/> */}

                    <ScrollView style={styles.sv} nestedScrollEnabled showsVerticalScrollIndicator={false}> 
                           
									<View style={styles.vw1}>
									 <Image source={require('../../assets/images/RestaurantImage.png')} style={styles.img1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.pin}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.doll}/> */}
									 <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.img4} height={12} width={10}
                        />
									 <Text style={styles.txt5}> Free</Text>
									 <View style={styles.vw2}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									 </View>
									 <View style={styles.vw3}>
										<TouchableOpacity >
										<Image source={require('../../assets/images/blurbg2.png')}
									  style={styles.img2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									  style={styles.img3}/>
									  </TouchableOpacity> 
									 </View>
									</View>
									
                                    <View style={styles.vw4}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.pin}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.doll}/> */}
									 <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.img4} height={12} width={10}
                        />
									 <Text style={styles.txt5}> Free</Text>
									 <View style={styles.vw2}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									 </View>
									 <View style={styles.vw3}>
										 <TouchableOpacity>
										<Image source={require('../../assets/images/blurbg2.png')}
									 style={styles.img2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									 style={styles.img3}/>
									  </TouchableOpacity>
									 </View>
									</View>

                                    <View style={styles.vw5}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.pin}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.doll}/> */}
									 <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.img4} height={12} width={10}
                        />
									 <Text style={styles.txt5}> Free</Text>
									 <View style={styles.vw2}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									 </View>
									 <View style={styles.vw3}>
									 <TouchableOpacity>
										<Image source={require('../../assets/images/blurbg2.png')}
									 style={styles.img2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									 style={styles.img3}/>
									 </TouchableOpacity>
									 </View>
									</View>

                                    
                                    <View style={styles.vw4}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.pin}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.doll}/> */}
									 <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.img4} height={12} width={10}
                        />
									 <Text style={styles.txt5}> Free</Text>
									 <View style={styles.vw2}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									 </View>
									 <View style={styles.vw3}>
									 <TouchableOpacity>
										<Image source={require('../../assets/images/blurbg2.png')} style={styles.img2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')} style={styles.img3}/>
										</TouchableOpacity>
									 </View>
									</View>

                                    <View style={styles.vw5}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.pin}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.doll}/> */}
									 <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.img4} height={12} width={10}
                        />
									 <Text style={styles.txt5}> Free</Text>
									 <View style={styles.vw2}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									 </View>
									 <View style={styles.vw3}>
									 <TouchableOpacity>
										<Image source={require('../../assets/images/blurbg2.png')}
									 style={styles.img2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')}
									 style={styles.img3}/>
									 </TouchableOpacity>
									 </View>
									</View>

                                    
                                    <View style={styles.vw4}>
									 <Image source={require('../../assets/images/RestaurantImage.png')}
									 style={styles.img1}/>
									 <Text style={styles.txt1}>Urban Tadka Dining</Text>
									 <Text style={styles.txt2}>Nelson Bridge, Singapore</Text>
									 <Text style={styles.txt3}>Chinese | Asian</Text>
									 {/* <PinSvg style={styles.pin}/> */}
									 <Text style={styles.txt4}> 3 km</Text>
                                     {/* <Dollar style={styles.doll}/> */}
									 <Image
                            source={require('../../assets/images/doll.png')}
                            style={styles.img4} height={12} width={10}
                        />
									 <Text style={styles.txt5}> Free</Text>
									 <View style={styles.vw2}>
									  <Text style={styles.txt6}> 4.1/5 </Text>
									 </View>
									 <View style={styles.vw3}>
									 <TouchableOpacity>
										<Image source={require('../../assets/images/blurbg2.png')} style={styles.img2}/>
                                        <Image source={require('../../assets/images/whiteheart.png')} style={styles.img3}/>
										</TouchableOpacity>
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
	   width:330,
	   left:-380,
	   top:665
	},	
   sv:{
	   height:250,
	   backgroundColor:'white'
	},
   vw1:{
	   width:155,
	   height:240,
	   elevation:8,
	   borderRadius:10,
	   backgroundColor:'white',
	   marginTop:20, 
	   left:5,
	},
   vw2:{
	   backgroundColor:'#4EC33B',
	   height:20,
	   width:38,
	   bottom:30,
	   left:113,
	   top:-33,
	   borderRadius:8
	},
   vw3:{
	   left:110,
	   top:-250,
	   height:30,
	   width:30,
	   backgroundColor:'transparent',
	   borderRadius:50
	},
   vw4:{
	   width:155,
	   height:240,
	   elevation:8,
	   borderRadius:10,
	   backgroundColor:'white',
	   marginTop:-240,
	   left:170,
	},
   vw5:{
	   width:155,
	   height:240,
	   elevation:8,
	   borderRadius:10,
	   backgroundColor:'white',
	   marginTop:20,
	   left:5
	},
   img1:{
	   height:150,
	   width:155,
	   borderTopLeftRadius:10,
	   borderTopRightRadius:10,
	   left:-10,
	   top:0,
	   marginHorizontal:10,
	},
   img2:{
	   height:30,
	   width:30,
	}, 
   img3:{
	   height:15,
	   width:15,
	   top:-22,
	   left:8
	}, 
	img4:{
		top:0, 
		left:58,
		height:16,
		width:25
	},
   txt1:{
	   fontSize: 13,
	   color: Colors.BLACK,
	   position:'relative',
	   top:10,
	   left:20,
	   fontWeight:'bold',
	},
   txt2:{
	   fontSize: 11,
	   color: Colors.GRAY_DARK,
	   position:'relative',
	   top:10,
	   left:20,
	   fontWeight:'bold'
	},
   txt3:{
	   fontSize: 11,
	   color: Colors.GRAY_DARK,
	   position:'relative',
	   top:10,
	   left:20,
       fontWeight:'500'
    },
   txt4:{
	   fontSize: 11,
	   color: Colors.GRAY_DARK,
	   position:'relative',
	   top:15,
	   left:30,
	   fontWeight:'bold'
	},
   txt5:{
	   fontSize: 11,
	   color: Colors.GRAY_DARK,
	   position:'relative',
	   top:-17,
	   left:80,
	   fontWeight:'500'
	},   
   txt6:{
	   fontSize: 11,
	   color: Colors.GRAY_DARK,
	   position:'relative',
	   top:2,
	   left:3,
	   fontWeight:'500',
	   color:'white'
	},
   pin:{
	   left:17,
	   top:213,
	   position:'absolute'
	},
   doll:{
	   left:65,
	   top:208,
	   position:'absolute'
	},

});

export default HomeComponent1;