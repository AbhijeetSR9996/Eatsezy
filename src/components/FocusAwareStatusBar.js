import * as React from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets,SafeAreaView } from 'react-native-safe-area-context';

const FocusAwareStatusBar = ({ isLightBar, isTopSpace, isTransparent }) => {
	const insets = useSafeAreaInsets();
	const isFocused = useIsFocused();
	const isAndroid = Platform.OS === 'android';

	return <>
		<StatusBar translucent={true} />
		{
			isFocused
				?
				isAndroid
					?
					<SafeAreaView style={{ paddingTop: isTopSpace ? insets.top : 0, backgroundColor: isTransparent ? 'transparent' : 'white' }} 
					 edges={['bottom']}>
						<StatusBar
							backgroundColor={isTransparent ? 'transparent' : 'white'}
							barStyle={isLightBar ? 'light-content' : 'dark-content'}
						 //hidden  
						 //translucent={true} 
						/>
					</SafeAreaView>
					:
					<View style={{ paddingTop: isTopSpace ? insets.top : 0, backgroundColor: isTransparent ? 'transparent' : 'white' }}>
						<StatusBar
							barStyle={isLightBar ? 'light-content' : 'dark-content'}
						/>
					</View >
				:
				null
		}
	</>
};

export default FocusAwareStatusBar;