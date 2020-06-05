import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const HomeScreen = () => {
	const [weight, setWeight] = useState(0);
	const [reps, setReps] = useState(0);

	return (
		<>
			<View>
				<Text>Weight:</Text>
				<TextInput
					style={styles.inputStyle}
					onChangeText={(value) => setWeight(+value)}
					keyboardType="numeric"
				/>
				<Text>{weight}</Text>
			</View>

			<View>
				<Text>Reps:</Text>
				<TextInput
					style={styles.inputStyle}
					onChangeText={(value) => setReps(+value)}
					keyboardType="numeric"
				/>
				<Text>{reps}</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	inputStyle: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default HomeScreen;
