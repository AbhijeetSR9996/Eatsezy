import * as React from 'react';
import {StatusBar,Text,View,StyleSheet,FlatList,Image,Dimensions,Animated,Platform,TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');
import { getMovies } from './api';
import PinSvg from '../../assets/svg/PinSvg.svg';
import Dollar from '../../assets/svg/dollar-round.svg';

const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'android' ? width * 0.62 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;
const BACKDROP_HEIGHT = height * 0.65;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

const Backdrop = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.key + '-backdrop'}
        removeClippedSubviews={true}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                //height,
                overflow: 'hidden',
              }}
            >
              <Image
                //source={{ uri: item.backdrop }}
                //source={require('../../assets/images/restdish1.png')}
                style={{
                  width,
                  //height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default function Cuisines3New() {
  const [movies, setMovies] = React.useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setMovies([{ key: 'empty-left' }, ...movies, { key: 'empty-right' }]);
    };

    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);

  {/*if (movies.length === 0) {
    return <Loading />;
  }*/}

  return (
    <View style={styles.container}>
      <Backdrop movies={movies} scrollX={scrollX} />
      <StatusBar />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'android' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='center'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.poster) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [-100, -30, -100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{ width: ITEM_SIZE }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACING,
                  padding: SPACING * 2,
                  alignItems: 'center',
                  transform: [{ translateY }],
                  backgroundColor: 'white',
                  borderRadius: 20,
                  elevation:8,
                  height:280
                }}>
                <Image
                  source={require('../../assets/images/restdish1.png')}
                  style={styles.posterImage}
                />
                <Text style={styles.txt1} numberOfLines={1}>
                  Urban Tadka Dining
                </Text>
                <Text style={styles.txt2} numberOfLines={1}>
                  Nelson Bridge,Singapore
                </Text>
                <Text style={styles.txt3} numberOfLines={1}>
                  Chinese | Asian
                </Text>
                <Text style={styles.txt4} numberOfLines={1}>
                 3 km   
                </Text>
                <Text style={styles.txt5} numberOfLines={1}>
                 Free 
                </Text>
                <View style={styles.vw1}>
                 <Text style={styles.txt6} numberOfLines={1}>4.1/5
                 </Text>
                </View>
                <PinSvg style={styles.pin}/>
                <Image source={require('../../assets/images/doll.png')}
                            style={styles.img3} height={12} width={10}/>
                <View style={styles.vw2}>
                <TouchableOpacity style={styles.container2}>
                  <Image source={require('../../assets/images/blurbg.png')}
								 	style={styles.img1}/>
                  <Image source={require('../../assets/images/whiteheart.png')}
									style={styles.img2}/>
                </TouchableOpacity>
                
                </View>
              </Animated.View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  container: {
    flex: 1,
  },
  container2: {
    height:30,
    width:30,
    position:'relative',
    justifyContent:'center',
    alignContent:'center',
    bottom:15
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: 203,
    height: ITEM_SIZE / 1.2,
    resizeMode: 'cover',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    margin: 0,
    marginBottom: 10,
    right:0,
    bottom:20,       
  },
  txt1:{ 
    fontSize: 15,
    fontWeight:'bold',
    bottom:15 
  },
  txt2:{ 
    fontSize: 11,
    color:'grey',
    fontWeight:'bold',
    right:4,
    bottom:15 
  },
  txt3:{ 
    fontSize: 11,
    color:'darkgrey',
    fontWeight:'500',
    textAlign:'left',
    right:28,
    bottom:15 
  },
  txt4:{ 
    fontSize: 11,
    color:'darkgrey',
    fontWeight:'bold',
    bottom:15,
    right:35 
  },
  txt5:{ 
    fontSize: 11,
    color:'darkgrey',
    fontWeight:'bold',
    bottom:30,
    right:-20 
  },
  txt6:{ 
    fontSize: 11,
    color:'white',
    fontWeight:'bold',
    bottom:-2,
    right:-7 
  },
  vw1:{
    height:20,
    width:40,
    top:-47,
    left:65,
    borderRadius:8,
    backgroundColor:'#4EC33B'
  },
  vw2:{
    height:40,
    width:40,
    bottom:300,
    left:75,
    borderRadius:50
  },
  pin:{
    left:37,
    top:253,
    position:'absolute'
  },
  dollar:{
    left:90,
    top:247,
    position:'absolute'
  },
  img1:{
    height:30,
    width:30,
    position:'absolute'
  },
  img2:{
    height:15,
    width:15,
    //bottom:20,
    //left:0,
    //position:'absolute',
    alignSelf:'center'
  },
  img3:{
		bottom:65, 
		right:5,
		height:16,
		width:25
	},
});


