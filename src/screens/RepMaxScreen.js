import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import RMCalculation from "../calculations/maxCalculation";
import DismissKeyboard from "../components/DismissKeyboard";

const HomeScreen = () => {
	const [calc, setCalc] = useState({ weight: 0, reps: 0 });

	// Create Repmax class to hold the values
	return (
		<>
			<DismissKeyboard>
				<View>
					<Text style={styles.textStyle}>Weight:</Text>
					<TextInput
						style={styles.inputStyle}
						onChangeText={(value) => {
							setCalc({ weight: +value, reps: calc.reps });
						}}
						keyboardType="numeric"
					/>
				</View>
			</DismissKeyboard>

			<DismissKeyboard>
				<View>
					<Text style={styles.textStyle}>Reps:</Text>
					<TextInput
						style={styles.inputStyle}
						onChangeText={(value) => {
							setCalc({ weight: calc.weight, reps: +value });
						}}
						keyboardType="number-pad"
					/>
				</View>
			</DismissKeyboard>

			<DismissKeyboard>
				<View style={styles.maxStyle}>
					<Text style={styles.textStyle}>
						Epley Rep Max = {RMCalculation.Epley(calc)}
					</Text>
					<Text style={styles.textStyle}>
						Bryzcki Rep Max = {RMCalculation.Bryzcki(calc)}
					</Text>
					<Text style={styles.textStyle}>
						McGlothin Rep Max = {RMCalculation.McGlothin(calc)}
					</Text>
					<Text style={styles.textStyle}>
						Lombardi Rep Max = {RMCalculation.Lombardi(calc)}
					</Text>
					<Text style={styles.textStyle}>
						Mayhew Rep Max = {RMCalculation.Mayhew(calc)}
					</Text>
					<Text style={styles.textStyle}>
						O'Conner Rep Max = {RMCalculation.OConner(calc)}
					</Text>
					<Text style={styles.textStyle}>
						Wathen Rep Max = {RMCalculation.Wathen(calc)}
					</Text>
					<Text style={styles.textStyle}>
						Wendler Rep Max = {RMCalculation.Wendler(calc)}
					</Text>
					<Text style={styles.textStyle}>
						Average Rep Max = {RMCalculation.Average(calc)}
					</Text>
				</View>
			</DismissKeyboard>
		</>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginStart: 30,
		marginTop: 10,
		fontSize: 15,
	},
	inputStyle: {
		marginStart: 30,
		marginEnd: 30,
		borderColor: "black",
		borderWidth: 1,
		fontSize: 15,
		padding: 10,
	},
});

export default HomeScreen;
