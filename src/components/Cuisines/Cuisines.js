import { View, Text,Image,StyleSheet,FlatList,ScrollView } from 'react-native'
import React from 'react'
//import { quickLink } from '../../Dummy/Dummy';

// const Item = ({text}) => {
// 	<View >
// 		<Text>{text}</Text>
// 	</View>
// };


const Cuisines = () => {

  return (<>
    <View style={styles.vw}>
		<Text style={styles.txthead}>Cuisine</Text>
     
     {/* <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.text}	style={{height:50,backgroundColor:'lime'}}/> */}
     
        <ScrollView horizontal style={styles.sv} showsHorizontalScrollIndicator={false}>
        <Image source={require('../../assets/images/dish1.png')} style={styles.img1}/>
        <Text style={styles.txt1}>Chinese</Text>
        <Image source={require('../../assets/images/dish2.png')} style={styles.img2}/>
        <Text style={styles.txt2}>Indian</Text>
        <Image source={require('../../assets/images/dish3.png')} style={styles.img2}/>
        <Text style={styles.txt3}>Arabic</Text>
        <Image source={require('../../assets/images/italian.png')} style={styles.img2}/>
        <Text style={styles.txt4}>Italian</Text>
        <Image source={require('../../assets/images/dish4.png')} style={styles.img2}/>
        <Text style={styles.txt5}>Asian</Text>
        </ScrollView>
	</View>
 {/* <View style={{ marginHorizontal: 20,bottom:-230 }} >
		<Text style={{fontSize:20,fontWeight:'900'}}>Cuisine</Text>
        <ScrollView horizontal style={{height:140}} showsHorizontalScrollIndicator={false}>
        <Image source={require('../../assets/images/pagerimg1.jpeg')} style={{height:120,width:200,top:20,marginLeft:15,borderRadius:10}}/>
        <Image source={require('../../assets/images/pagerimg1.jpeg')} style={{height:120,width:200,top:20,marginLeft:15,borderRadius:10}}/>
        <Image source={require('../../assets/images/pagerimg1.jpeg')} style={{height:120,width:200,top:20,marginLeft:15,borderRadius:10}}/>
        </ScrollView>
	</View>*/}
  </>
  )
}

const styles = StyleSheet.create({
    vw:{ 
      marginHorizontal: 20,
      bottom:30 
    },
    sv:{
      height:140
    },
    img1:{
      height:60,
      width:60,
      marginLeft:5,
      top:20,
    },
    img2:{
      height:60,
      width:60,
      marginLeft:15,
      top:20,
    },
    txthead:{
      fontSize:20,
      fontWeight:'900'
    },
    txt1:{
      fontSize:13,
      fontWeight:'500',
      position:'absolute',
      top:92,
      left:13
    },
    txt2:{
      fontSize:13,
      fontWeight:'500',
      position:'absolute',
      top:92,
      left:95
    },
    txt3:{
      fontSize:13,
      fontWeight:'500',
      position:'absolute',
      top:92,
      left:165
    },
    txt4:{
      fontSize:13,
      fontWeight:'500',
      position:'absolute',
      top:92,
      left:245
    },
    txt5:{
      fontSize:13,
      fontWeight:'500',
      position:'absolute',
      top:92,
      left:320
    },
});

export default Cuisines;

