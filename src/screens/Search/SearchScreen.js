import axios from 'axios';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Header from '../../components/Header/Header';
//import RestaurantMapCard from '../../components/RestaurantMapCard/RestaurantMapCard';
import Search from '../../components/Search/Search';
import {SearchData,quickLink} from '../../Dummy/Dummy';
import {Colors, Fonts, Server} from '../../global';

const SearchScreen = ({route}) => {
   const [search, setSearch] = React.useState('');
   const [nearByRestaurants, setNearByRestaurants] = React.useState(null);
   const [selected, setSelected] = React.useState();
  // // const [selected, setSelected] = React.useState(route.params.id)
  // const [Restaurants, setRestaurants] = React.useState(null);
  // const [TrendingItem, setTrendingItem] = React.useState();
   const [TrendingArray, setTrendingArray] = React.useState();

  // const getRestaurantsNearBy = async () => {
  //   const response = await axios.get(
  //     `${Server.BASE_URL}/restaurant/search-restaurants/?restaurantLetter=${search}`,
  //   );
  //   setNearByRestaurants(response.data.data);
  // };

  // const getRestaurants = async () => {
  //   if (search != '') {
  //     const response = await axios.get(
  //       `${Server.BASE_URL}/restaurant/search-restaurants/?restaurantLetter=${search}`,
  //     );
  //     setRestaurants(response.data.data);
  //   } else {
  //     setRestaurants([]);
  //   }
  // };

   const [refreshing, setRefreshing] = React.useState(false);

  // React.useEffect(() => {
  //   getRestaurantsNearBy();
  // }, []);

  // React.useEffect(() => {
  //   getRestaurants();
  // }, [search]);

  // const renderRestaurantCard = (item, index) => {
  //   return (
  //     <RestaurantMapCard
  //       // item={item}
  //       key={item._id}
  //       restaurantId={item._id}
  //       // navigation={navigation}
  //       coverImage={item.restaurantThumbnail}
  //       rating={item.restaurantRating}
  //       likeStatus={false}
  //       show={true}
  //       restaurantName={item.restaurantName}
  //     />
  //   );
  // };

//   const TrendingShow = async () => {
//     let responseData = null;
//     responseData = await axios.get(
//       `${Server.BASE_URL}/${Server.END_POINT.ALL_CUISINE}`,
//     );
//     console.log(responseData.data, 'THE DATA FOR NAME');
//     setTrendingItem(responseData.data);
//     setTrendingArray(
//       responseData.data.data.map((item) => ({name: item.cuisineName})),
//     );
//   };

// //   useEffect(() => {
// //     TrendingShow();
// //   }, []);

  const renderQuickLinks = ({ item, idx }) => {
    return <View key={idx} style={styles.bubbleContainer}>
        <TouchableOpacity

            style={[styles.borderQuicklink, {
                borderWidth: selected == item.id ? 0 : 1,
                //borderColor: selected == item.id ? "#ffffff" : "#44444450",
                //backgroundColor: selected == item.id ? Colors.BLACK : "#44444410",
                backgroundColor: selected == item.id ? "#44444450" : "#44444410",
                borderRadius: selected == item.id ? 10:5,

            }]} onPress={() => {
                if (selected == item.id) {

                } else {
                    setSubData(null)
                    setFilterData({
                        ...defaultFilterData,
                    })
                    // navigation.navigate(ScreenNames.RESTAURANTS_SCREEN, { id: item.id, })
                    setSelected(item.id)
                }
            }}>

            <View style={styles.vw}>
                {selected == item.id ?
                    item.UnfillSvg
                    :
                    item.fillSvg
                }
             </View>
             <Text style={[styles.font1, { color: selected == item.id ? Colors.WHITE : Colors.BLACK }]}>{item.name}</Text>
         </TouchableOpacity>
     </View>
 }

//   const getAllCusine = async () => {
//     let response = null;
//     if (selected == 0) {
//       response = await axios.get(
//         `${Server.BASE_URL}/${Server.END_POINT.ALL_CUISINE}`,
//       );
//       setSubData(response.data.data);
//     } else if (selected == 1) {
//       response = await axios.get(
//         `${Server.BASE_URL}/${Server.END_POINT.RECOMMENDATION}`,
//       );
//       setSubData(response.data.data);
//     } else if (selected == 2) {
//       response = await axios.get(
//         `${Server.BASE_URL}/${Server.END_POINT.COOL_AREAS}`,
//       );
//       setSubData(response.data.data);
//     } else if (selected == 3) {
//       setSubData([
//         {
//           _id: 1,
//           name: '😫',
//         },
//         {
//           _id: 2,
//           name: '☹️',
//         },
//         {
//           _id: 3,
//           name: '😕',
//         },
//         {
//           _id: 4,
//           name: '🙂',
//         },
//         {
//           _id: 5,
//           name: '🥰',
//         },
//       ]);
//     }
//   };

//   React.useEffect(() => {
//     getAllCusine();
//   }, [selected]);

  return (
    <View style={styles.vw1}>
      {console.log(route, 'ROUTE')}
      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} />
      <Header
        name="Search"
        activateLeftIcon={false}
        activateRightIcon={false}
      />
      <View style={styles.vw2}>
        <Search
          data={nearByRestaurants}
          searchBy="restaurantName"
          placeHolder="Restaurant name, Cuisine or a dish"
          search={search}
          setSearch={setSearch}
          inputText={true}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl 
        refreshing={refreshing} 
        />}>
        <View style={styles.vw3}>
          <View>
            {/* {Restaurants && Restaurants.map(renderRestaurantCard)} */}
            <View style={styles.vw2}>
              <Text style={styles.quickLink}>Trending Near You</Text>
            </View>
            {TrendingArray && (
              <FlatList
                numColumns={2}
                data={TrendingArray}
                contentContainerStyle={[styles.flat,]}
                keyExtractor={(item, idx) => `${idx}-restaurant`}
                renderItem={({item, idx}) => {
                  return (
                    <View key={idx} style={styles.bubbleContainer}>
                      <SearchCard
                        item={item}
                        id={idx}
                        setSearch={setSearch}
                        search={search}
                      />
                    </View>
                  );
                }}
              />
            )}

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    //data={quickLink}
                    data={SearchData}
                    contentContainerStyle={{paddingHorizontal:20,backgroundColor:'white',}}
                    horizontal
                    keyExtractor={(item, idx) => `${idx}-restaurant`}
                    renderItem={renderQuickLinks}
                />
                
                
          </View>

          <View style={styles.vw}>
            <View style={styles.vw2}>
              <Text style={styles.quickLink}>Quick Search</Text>
            </View>
            <View>
              <ScrollView
                horizontal
                style={styles.sv}
                showsHorizontalScrollIndicator={false}>
                <Image
                  source={require('../../assets/images/chinese.png')}
                  style={styles.img1}
                />
                <Text style={styles.txt1}>Chinese</Text>
                <Image
                  source={require('../../assets/images/indian.png')}
                  style={styles.img2}
                />
                <Text style={styles.txt2}>Indian</Text>
                <Image
                  source={require('../../assets/images/italian.png')}
                  style={styles.img2}
                />
                <Text style={styles.txt3}>Italian</Text>
                <Image
                  source={require('../../assets/images/arabic.png')}
                  style={styles.img3}
                />
                <Text style={styles.txt4}>Arabic</Text>
              </ScrollView>

              <ScrollView
                horizontal
                style={styles.sv}
                showsHorizontalScrollIndicator={false}>
                <Image
                  source={require('../../assets/images/chinese.png')}
                  style={styles.img1}
                />
                <Text style={styles.txt1}>Chinese</Text>
                <Image
                  source={require('../../assets/images/indian.png')}
                  style={styles.img2}
                />
                <Text style={styles.txt2}>Indian</Text>
                <Image
                  source={require('../../assets/images/italian.png')}
                  style={styles.img2}
                />
                <Text style={styles.txt3}>Italian</Text>
                <Image
                  source={require('../../assets/images/arabic.png')}
                  style={styles.img3}
                />
                <Text style={styles.txt4}>Arabic</Text>
              </ScrollView>
            </View>

            {
                            nearByRestaurants
                            &&
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={nearByRestaurants}
                                contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
                                horizontal
                                keyExtractor={(item, idx) => `${idx}-restaurant`}
                                renderItem={({ item, idx }) => {
                                    return <RestaurantByArea
                                        item={item}
                                    />

                                }}
                            />}
          </View>

          <View style={{ marginHorizontal: 0, marginVertical: 10 }}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={styles.quickLink}>Recommended Restaurants</Text>
                        </View>
                        {
                            nearByRestaurants
                            &&
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={nearByRestaurants}
                                contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
                                horizontal
                                keyExtractor={(item, idx) => `${idx}-restaurant`}
                                renderItem={({ item, idx }) => {
                                    return <RestaurantByArea
                                        item={item}
                                    />
                                }}
                            />}
                    </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  quickLink: {
    fontSize: Fonts.SIZE_19,
    fontFamily: Fonts.BOLD,
    color: Colors.BLACK,
  },
  bubbleContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  sv: {
    height: 140,
    //backgroundColor:'grey'
  },
  vw: {
    marginHorizontal: 0,
    marginVertical: 10,
  },
  vw1: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  vw2: {
    marginHorizontal: 20,
  },
  vw3: {
    flex: 1,
  },
  img1: {
    height: 70,
    width: 70,
    top: 20,
    marginLeft: 20,
  },
  img2: {
    height: 70,
    width: 70,
    top: 20,
    marginLeft: 10,
  },
  img3: {
    height: 70,
    width: 70,
    top: 20,
    marginLeft: 10,
    marginRight: 30,
  },
  txt1: {
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    top: 100,
    left: 30,
  },
  txt2: {
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    top: 100,
    left: 115,
  },
  txt3: {
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    top: 100,
    left: 195,
  },
  txt4: {
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    top: 100,
    left: 275,
  },
  flat: {
    paddingHorizontal: 10,
    
  },
});
