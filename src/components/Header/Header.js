import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

//my imports
import { styles } from './styles'
// import EditProfileSvg from '../../assets/svg/EditProfile';
import { Colors, Constants } from '../../global/index';
import LeftArrow from "../../assets/svg/backArrow.svg";
import FilterSvg from "../../assets/svg/filter.svg";
import { useNavigation } from '@react-navigation/native'


// import Back from '../../assets/svg/Back';

const Header = ({
	name,
	activateLeftIcon = true,
	activateRightIcon,
	backgroundColor, onpress }) => {

	const navigation = useNavigation();

	const goBack = () => {
		navigation.pop();
	}

	return (
		// backgroundColor: true= white ,false=primary 
		<View style={[styles.container, { backgroundColor: backgroundColor ? Colors.WHITE : Colors.WHITE }]}>
			{/* header left */}

			{activateLeftIcon ?
				<View style={styles.headerLeftContainer}>
					<TouchableOpacity
						activeOpacity={Constants.BUTTON_OPACITY}
						onPress={goBack}
						style={styles.headerLeft}>

						<LeftArrow />
						{/* <Back /> */}

					</TouchableOpacity>
				</View>
				:
				null
			}


			{/* header center */}
			<View style={[styles.headerCenterContainer, { marginLeft: activateLeftIcon == false ? 20 : 0 }]}>

				<View style={styles.headerCenter}>
					<Text style={styles.headerText}>
						{name}
					</Text>
				</View>

			</View>

			{/* header right */}
			<View style={styles.headerRightContainer}>

				<TouchableOpacity
					onPress={onpress}
					activeOpacity={Constants.BUTTON_OPACITY}
					style={styles.headerRight}>

					{
						activateRightIcon
							?
							<FilterSvg />
							:
							null
					}

				</TouchableOpacity>


			</View>


		</View >
	);
}

export default React.memo(Header);
