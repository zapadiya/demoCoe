import * as React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
import AddLocationScreen from "../Screens/AddLocationScreen";
const Stack = createStackNavigator();
const platform = Platform.OS;

export default function Navigation(props) {
	const routeNameRef = React.useRef();
	const navigationRef = React.useRef();
	return (
		<NavigationContainer ref={navigationRef} onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name} 
			onStateChange={() => {
				const previousRouteName = routeNameRef.current; 
				const currentRouteName = navigationRef.current.getCurrentRoute().name
				//props.setCurrentRouteName(currentRouteName);
			}}>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
				<Stack.Screen options={{ headerShown: false }} name="AddLocation" component={AddLocationScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
