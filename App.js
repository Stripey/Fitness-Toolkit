import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RepMaxScreen from "./src/screens/RepMaxScreen";

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
			</Stack.Navigator>
		</NavigationContainer>
	);
};
const styles = StyleSheet.create({});

export default App;
