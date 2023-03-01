import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, RefreshControl, Platform, PermissionsAndroid, ToastAndroid, Image, Modal } from 'react-native';
//import AreaCard from '../../components/AreaCard/AreaACard';
import Card from '../../components/Card/Card';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import InformationModal from '../../components/InformationModal/InformationModal';
//import Offer from '../../components/Offer/Offer';
import QuickFilter from '../../components/QuickFilter/QuickFilter';
import RecommendCard from '../../components/RecommendCard/RecommendCard';
import RestaurantByArea from '../../components/RestaurantByArea/RestaurantByArea';
//import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import Search from '../../components/Search/Search';
import { quickLink } from '../../Dummy/Dummy';
import { Colors, Constants, Fonts, ScreenNames, Server } from '../../global';
import HomeHeader from './HomeHeader';
import { styles } from "./HomeStyle";
//import NearMeSvg from '../../assets/svg/NearMe.svg';
import PinSvg from '../../assets/svg/PinSvg.svg';
import PinSvgWhite from '../../assets/svg/PinSvgWhite.svg';
import Dollar from '../../assets/svg/dollar-round.svg';
import Heart from '../../assets/svg/heartActive.svg';
import Dollars from '../../assets/svg/dollarsvg.svg';
//import { connect } from 'react-redux';
//import { PERMISSIONS, request } from 'react-native-permissions';
//import Geolocation from 'react-native-geolocation-service';
import Filter from '../../assets/svg/filter.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cuisines from '../../components/Cuisines/Cuisines';
import Cuisines2 from '../../components/Cuisines/Cuisines2';
import Cuisines3 from '../../components/Cuisines/Cusines3';
import Cuisines3Pro from '../../components/Cuisines/Cuisines3Pro';
//import Cuisines3New from '../../components/Cuisines/Cuisines3New';
import HomeComponent1 from './HomeComponent1';
import HomeComponent2 from './HomeComponent2';
import RestaurantsScreen from '../Restaurants/RestaurantsScreen';
//import HomeComponent3 from './HomeComponent3';
//import { InformationData } from '../../Dummy/Dummy';
//import CrossSvg from "../../assets/svg/closecopy.svg"


const HomeScreen = ({ userId, toggleModal, isSignedIn, }) => {

	const navigation = useNavigation();

	const [isInformationModalVisible, setIsInformationModalVisible] = React.useState(false);
	const [featuredRestaurant, setFeaturedRestaurant] = React.useState(null)
	const [nearByRestaurants, setNearByRestaurants] = React.useState(null)
	const [ads, setAds] = React.useState(null)
	const [refreshing, setRefreshing] = React.useState(false);
	const [recommendations, setRecommendations] = React.useState(null)
	const [coolAreas, setCoolAreas] = React.useState(null)

	const seeAll = () => {
		navigation.navigate('RestaurantsScreen', { id: null })
	}
	// const toggleIsInformationModalVisible = () => {
	// 	setIsInformationModalVisible(!isInformationModalVisible)
	// }

	// const [indicatorIndex, setIndicatorIndex] = React.useState(0)

	// const goToMaps = () => {
	// 	navigation.navigate('FindRestaurantMap')
	// }

	// const _onMomentumScrollEnd = ({ nativeEvent }) => {
	// 	const index = Math.round(nativeEvent.contentOffset.x / Constants.SCREEN_WIDTH);
	// 	setIndicatorIndex(index)
	// }
	// const renderIndicator = (item, index) => {
	// 	return (
	// 		<View style={{ width: index == indicatorIndex ? 25 : 14, height: index == indicatorIndex ? 8 : 5, borderRadius: 10, backgroundColor: index == indicatorIndex ? Colors.PRIMARY : Colors.GRAY_LIGHT, marginLeft: 5, marginRight: 5 }}>

	// 		</View>
	// 	)
	// }

	// const goRestaurantsDetail = () => {
	// 	navigation.navigate(ScreenNames.RESTAURANTDETAIL_SCREEN, { restaurant_id: item._id })
	// }

	return (
		<View style={styles.mainvw} >

			<FocusAwareStatusBar isLightBar={true} isTopSpace={false} isTransparent={true} />

			<ScrollView contentContainerStyle={styles.sv}
				showsVerticalScrollIndicator={false}
				refreshControl={<RefreshControl
					refreshing={refreshing}
				/>}>

				<HomeHeader />

				{/* <PinSvgWhite style={styles.pin}/> */}
				<Image source={require('../../assets/images/mappin.png')}
					style={styles.mappin} />
				<Text style={styles.txt1}> China Town</Text>

				<View style={styles.vw1}>
					<Search placeHolder={"Search"} inputText={false} />
					<TouchableOpacity>
						<Image source={require('../../assets/images/filtericon.png')} style={styles.filter} />
					</TouchableOpacity>
					{/* <Filter style={styles.filter} onPress={seeAll}/> */}
				</View>

				<View style={styles.vw5}>
					<View >
						<View>
							<Cuisines />


						</View>
						<View style={styles.vw6}>
							{
								// featuredRestaurant
								// &&
								// featuredRestaurant.length > 0
								// &&
								<View style={styles.vw7}>
									<View>
										<Text style={styles.quickLink}>Featured Restaurants</Text>
										<Text style={styles.font1}>Restaurant Features you may interest in !</Text>
										<TouchableOpacity onPress={seeAll}
											style={styles.seeAllStyle}>
											<Text style={styles.font2}>See All</Text>
										</TouchableOpacity>

										<TouchableOpacity
											onPress={seeAll}
											style={styles.seeAllStyle2}>
											<Text style={styles.font2} 
											>See All</Text>
										</TouchableOpacity>

										<TouchableOpacity onPress={seeAll} 
											style={styles.seeAllStyle3}>
											<Text style={styles.font2}>See All</Text>
										</TouchableOpacity>

										{/* <Cuisines3/> */}
										<Cuisines3Pro />
										{/* <View style={styles.vw2}><Cuisines3New /></View> */}

										<Cuisines2 />

										<View style={{ top: '1%', alignItems: 'flex-start', justifyContent: "center" }}>
											<Text style={styles.txthead1}>Restaurants by Areas</Text>
											<Text style={styles.txtheadsmall1}>New Restaurants nearby your Area!</Text>
										</View>
									</View>

									<HomeComponent1 />

									<HomeComponent2 />

									<Text style={styles.txthead2}>Recommendations</Text>
									<Text style={styles.txtheadsmall2}>Some of the best recommendations for you!</Text>

								</View>}

							<FlatList
								showsHorizontalScrollIndicator={false}
								//data={featuredRestaurant}
								style={{ marginVertical: 10 }}
								//extraData={featuredRestaurant}
								contentContainerStyle={{ paddingHorizontal: 10 }}
								horizontal
								keyExtractor={(item, idx) => `${idx}-restaurant`}
								renderItem={({ item, idx }) => {
									return <RestaurantCard
										// restaurant_id={item._id}
										cuisineNames={item.cuisineNames.join(" | ")}
										// navigation={navigation}
										// coverImage={item.restaurant_images[0]}
										// rating={item.current_rating}
										// // likeStatus={item.likeStatus} 
										// likeStatus={false}
										// restaurantName={item.restaurant_name}
										// restaurantLocality={item.address}
										// restaurantType={item.cuisines}
										item={item}
									/>
								}}
							/>

						</View>

						<View style={{ marginHorizontal: 0 }}>
							{
								// ads
								// &&
								// <FlatList
								// 	horizontal
								// 	contentContainerStyle={{ paddingHorizontal: 10 }}
								// 	data={ads}
								// 	showsHorizontalScrollIndicator={false}
								// //renderItem={renderItemOffer}
								// />
							}
						</View>


						{
							// recommendations
							// &&
							// recommendations.length > 0
							// &&
							<View style={{ justifyContent: "space-between", marginHorizontal: 10 }}>
								<View style={{ marginHorizontal: 10, marginVertical: 20, flexDirection: "row" }}>
									{/* <View style={{ flex: 1 }}>
										<Text style={styles.quickLink}>Recommendations</Text>
										<Text style={styles.font1}>Some of the best recommendations for you !</Text>
									</View> */}
									{/* <TouchableOpacity
										onPress={seeAll}
										style={styles.seeAllStyle}>
										<Text style={styles.font2}>See All</Text>
									</TouchableOpacity> */}
								</View>
								<FlatList
									showsHorizontalScrollIndicator={false}
									//data={recommendations}
									horizontal
									contentContainerStyle={{}}
									keyExtractor={(item, idx) => `${idx}-restaurant`}
									renderItem={({ item, idx }) => {
										return <RecommendCard
											item={item}
										/>

									}}
								/>
							</View>
						}

						{
							// coolAreas
							// &&
							// coolAreas.length > 0
							// &&
							<View style={{ marginHorizontal: 0, marginVertical: 10 }}>
								<View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20 }}>
									<View style={{ flex: 1 }}>
										<Text style={styles.quickLink}>Cool Areas</Text>
										<Text style={styles.font1}>Some cool areas for dining out !</Text>
									</View>
									<TouchableOpacity
										//onPress={seeAll}
										style={styles.seeAllStyle}>
										<Text style={styles.font2}>See All</Text>
									</TouchableOpacity>
								</View>

								<FlatList
									showsHorizontalScrollIndicator={false}
									data={coolAreas}
									//extraData={coolAreas}
									contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
									horizontal
									keyExtractor={(item, idx) => `${item.name}-restaurant`}
									renderItem={({ item, index }) => {
										return <AreaCard item={item} index={index} />
									}}
								/>

							</View>


							//{
							//nearByRestaurants
							&&
							//nearByRestaurants.length > 0
							//&&
							<View style={styles.vw8}>
								<View style={styles.vw9}>
									{/* <View style={styles.vw10}>
										<Text style={styles.quickLink}>Restaurants by Area</Text>
										<Text style={styles.font1}>Trending Restaurants near you !</Text>
									</View> */}
									{/* <TouchableOpacity
										onPress={seeAll}
										style={styles.seeAllStyle}>
										<Text style={styles.font2}>See All</Text>
									</TouchableOpacity> */}
								</View>

								{/* <FlatList
									showsHorizontalScrollIndicator={false}
									data={nearByRestaurants}
									contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
									horizontal
									keyExtractor={(item, idx) => `${idx}-restaurant`}
									renderItem={({ item, idx }) => {
										return <RestaurantByArea
											item={item}
										/>
									}
									}
								/> */}


								<FlatList
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={{ marginHorizontal: 20 }} data={[1, 2, 4]}
								//renderItem={renderCard} 
								/>

							</View>}
					</View>

				</View>
				{/* <InformationModal
					toggleIsInformationModalVisible={toggleIsInformationModalVisible}
					isInformationModalVisible={isInformationModalVisible}
				/> */}


				<View style={styles.vw3}>
					<TouchableOpacity //onPress={goToMaps} 
						style={styles.nearme}>
						<Text style={styles.txtnearme}>
							Near me
						</Text>
						{/* <NearMeSvg /> */}
					</TouchableOpacity>
				</View>
			</ScrollView>

			<View style={styles.vw4}>

				{
					// bookingsNotReviewed
					// &&
					// bookingsNotReviewed.length > 0
					// &&
					<ScrollView
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						//onMomentumScrollEnd={_onMomentumScrollEnd}
						contentContainerStyle={{ alignItems: "center" }}>
						{/* {

							bookingsNotReviewed.map(renderCard)

						} */}

					</ScrollView>}
			</View>
		</View>
	)

};

// const mapStateToProps = state => ({
// 	isSignedIn: state.user.isSignedIn,
// 	userId: state.user.userId,
// 	toggleModal: state.user.toggleModal

// });

//export default connect(mapStateToProps, null)(HomeScreen);
export default HomeScreen;