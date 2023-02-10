//react components 
import React from 'react';
import {
	Modal, View,
	Text, TouchableOpacity,
	Dimensions
} from 'react-native';
//css
import { styles } from "./CustomAlertStyle";
//import { BlurView } from "@react-native-community/blur";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CustomAlert = ({ customAlertVisible, toggleCustomAlertVisibility, leftButtonFunction, rightButtonFunction, title, desc, leftButtonText, rightButtonText }) => {

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={customAlertVisible}
			onRequestClose={toggleCustomAlertVisibility}
		>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#00000020" }}>

				<View
					style={styles.centeredView}
				>


					{/* <BlurView
						style={styles.blurView}
						blurType="light"
						blurAmount={5}
						reducedTransparencyFallbackColor="white"
					/> */}
					<View style={styles.modalView}>
						<View style={styles.ModalHeader}>
							{
								typeof title != "undefined"
								&&
								<Text style={styles.modalTitle}>{title}</Text>
							}
							{
								typeof desc != "undefined"
								&&
								<Text style={styles.modalDesc}>{desc}</Text>
							}
						</View>
						<View
							style={{
								borderBottomColor: '#000000aa',
								borderBottomWidth: 0.5,
							}}
						/>
						<View style={styles.buttonStyleView}>
						</View>
						<View style={{
							flexDirection: "row",
							justifyContent: "center", alignItems: "center",
						}}>
							{
								leftButtonText
								&&
								<TouchableOpacity
									hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
									onPress={leftButtonFunction}
									style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
								>
									<Text style={{ fontSize: 18, color: "#0096FF", fontWeight: "bold", marginTop: 10, marginBottom: 10 }} >{leftButtonText}</Text>
								</TouchableOpacity>
							}
							{rightButtonText ?
								<View
									style={{
										height: "100%",
										alignItems: "center",
										borderBottomColor: '#000000aa',
										borderLeftWidth: 0.5,
									}}
								/>
								:
								null
							}
							{
								rightButtonText
								&&
								<TouchableOpacity onPress={rightButtonFunction} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
									<Text style={{ fontSize: 18, color: "black", fontWeight: "bold", }} >{rightButtonText}</Text>
								</TouchableOpacity>}
						</View>
					</View>
				</View>
			</View>
		</Modal>

	);
}

export default CustomAlert;


