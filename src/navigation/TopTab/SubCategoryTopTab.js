
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
//import Animated from 'react-native-reanimated';
import { Colors, Fonts } from '../../global/index';
import LinearGradient from 'react-native-linear-gradient';
import UpcomingScreen from '../../screens/Upcoming/UpcomingScreen';
import CompletedScreen from '../../screens/Completed/CompletedScreen';
import CancelledScreen from '../../screens/Cancelled/CancelledScreen';

//Global Variables
const Tab = createMaterialTopTabNavigator();
let width = [];
let offset = [];

function MyTabBar({ state, descriptors, navigation, position, scrollOffset }) {
	//Variables
	const ref = React.useRef(null)

	//States
	const [testOffset, settestOffset] = React.useState(0)

	//UseEffects

	return (
		<LinearGradient
			colors={[Colors.GRAY_LIGHT + "00", '#fff',]}
			style={{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor: Colors.WHITE }}>
			<FlatList
				ref={ref}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				data={state.routes}
				renderItem={({ item, index }) => {
					const route = item;
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
								? options.title
								: route.name;

					const isFocused = state.index === index;

					const onPress = (native) => {
						ref.current.scrollToIndex({ animated: true, index: index, viewPosition: 0.5 })
						settestOffset(native.pageX)
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}

					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					const inputRange = state.routes.map((_, i) => i);
					// const opacity = Animated.interpolate(position, {
					// 	inputRange,
					// 	outputRange: inputRange.map(i => (i === index ? 1 : 1)),
					// });

					return (
						<View style={{
							backgroundColor: Colors.WHITE,
							paddingHorizontal: 15,
							paddingTop: 10

						}}>

							<TouchableOpacity
								activeOpacity={1}
								key={index}
								accessibilityRole="button"
								accessibilityStates={isFocused ? ['selected'] : []}
								accessibilityLabel={options.tabBarAccessibilityLabel}
								testID={options.tabBarTestID}
								onPress={({ nativeEvent }) => onPress(nativeEvent)}
								onLongPress={onLongPress}
								style={{
									flexGrow: 1, alignItems: 'center',
									marginRight: 10, marginTop: 10, marginLeft: 10,

								}}
								onLayout={({ nativeEvent }) => { width.push(nativeEvent.layout.width); offset.push(nativeEvent.layout.x) }}

							>
								<Text style={{
									// opacity: state.routes.length > 1 ?
									// 	Animated.interpolate(position, {
									// 		inputRange,
									// 		outputRange: inputRange.map(i => (i === index ? 1 : 1)),
									// 	}) : 1,
									// fontFamily: sanfrancisco,
									fontSize: Fonts.SIZE_13,
									color: isFocused ? Colors.PRIMARY : Colors.BLACK,
									// paddingHorizontal: 15,
									paddingVertical: 1,
									fontFamily: Fonts.MEDIUM,

									// opacity: isFocused ? 1 : 0
								}}>
									{label}
								</Text>
								{/* <Animated.View style={{
								opacity: state.routes.length > 1 ?
									Animated.interpolate(position, {
										inputRange,
										outputRange: inputRange.map(i => (i === index ? 1 : 0)),
									}) : 1,
								height: 2.5,
								width: "100%",
								borderRadius: 2.25,
								backgroundColor: Colors.PRIMARY,
								// opacity: isFocused ? 1 : 0
							}}>
							</Animated.View> */}
							</TouchableOpacity>
							<View style={{ height: isFocused ? 1 : 0, width: isFocused ? 35 : 0, backgroundColor: isFocused ? Colors.PRIMARY : Colors.BLACK, marginBottom: 20, marginRight: 10, marginLeft: 10, }}></View>
						</View>

					);
				}}
			/>
		</LinearGradient>
	);
}

function SubCategoryTopTab({ categories, brandId }) {



	return (

		// shopName.length > 0
		// &&

		<Tab.Navigator
			tabBar={props => <MyTabBar {...props} />}
			swipeEnabled={true}
			sceneContainerStyle={{ backgroundColor: "#ffffff" }}
			lazy={true}
		>
			{/* {
				categories.map((item, index) => {

					return (
						<Tab.Screen key={index} name={item} component={ProductList} initialParams={{ categoryName: item, brandId: brandId }} />

					)

				})
			} */}

			<Tab.Screen key={1} name="Upcoming" component={UpcomingScreen} />
			<Tab.Screen key={2} name="Completed" component={CompletedScreen} />
			<Tab.Screen key={3} name="Cancelled" component={CancelledScreen} />

		</Tab.Navigator>
	)
}
export default SubCategoryTopTab;