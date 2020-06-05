import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.backgroundColor}>
			<TouchableOpacity onPress={() => navigation.navigate("RepMax")}>
				<Text style={styles.buttonStyle}>Go to Rep Max Screen</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "white",
	},
	buttonStyle: {
		fontSize: 20,
		padding: 20,
		margin: 30,
		borderWidth: 1,
		borderColor: "black",
		backgroundColor: "#64ad6a",
	},
});

export default HomeScreen;
