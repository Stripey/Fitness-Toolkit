import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import RMCalculation from "../calculations/maxCalculation";
const HomeScreen = () => {
	const [weight, setWeight] = useState(0);
	const [reps, setReps] = useState(0);

	// Create Repmax class to hold the values
	return (
		<>
			<View>
				<Text>Weight:</Text>
				<TextInput
					style={styles.inputStyle}
					onChangeText={(value) => {
						setWeight(+value);
					}}
					keyboardType="numeric"
				/>
				<Text>{weight}</Text>
			</View>

			<View>
				<Text>Reps:</Text>
				<TextInput
					style={styles.inputStyle}
					onChangeText={(value) => {
						setReps(+value);
					}}
					keyboardType="numeric"
				/>
				<Text>{reps}</Text>
			</View>

			<Text>Epley Rep Max = {RMCalculation.Epley({ weight, reps })}</Text>
			<Text>
				Bryzcki Rep Max = {RMCalculation.Bryzcki({ weight, reps })}
			</Text>
			<Text>
				McGlothin Rep Max = {RMCalculation.McGlothin({ weight, reps })}
			</Text>
			<Text>
				Lombardi Rep Max = {RMCalculation.Lombardi({ weight, reps })}
			</Text>
			<Text>
				Mayhew Rep Max = {RMCalculation.Mayhew({ weight, reps })}
			</Text>
			<Text>
				O'Conner Rep Max = {RMCalculation.OConner({ weight, reps })}
			</Text>
			<Text>
				Wathen Rep Max = {RMCalculation.Wathen({ weight, reps })}
			</Text>
			<Text>
				Wendler Rep Max = {RMCalculation.Wendler({ weight, reps })}
			</Text>
			<Text>
				Average Rep Max = {RMCalculation.Average({ weight, reps })}
			</Text>
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
