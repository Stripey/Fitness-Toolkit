import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RepMaxScreen from "./src/screens/RepMaxScreen";
import PlateCalculatorScreen from "./src/screens/PlateCalculatorScreen";
const Stack = createStackNavigator();

App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Home Screen" }}
				/>
				<Stack.Screen
					name="RepMax"
					component={RepMaxScreen}
					options={{ title: "Calculate 1 RM" }}
				/>
				<Stack.Screen
					name="PlateCalculator"
					component={PlateCalculatorScreen}
					options={{ title: "Calculate Plates Needed" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
const styles = StyleSheet.create({});

export default App;
