import React, { Children } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

// Needed to dismiss keyboard
const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

export default DismissKeyboard;
