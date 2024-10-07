import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Operation from './src/pages/Operation';
import Result from './src/pages/Result';

const AppStack = createNativeStackNavigator();

//Cuida da navegação entre as telas do app
export default function App() {
	return (
		<NavigationContainer>
			<AppStack.Navigator initialRouteName="Operation">
				<AppStack.Screen name="Operation" component={Operation} options={{ headerShown: false }} />
				<AppStack.Screen name="Result" component={Result} options={{ headerShown: false }} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
}