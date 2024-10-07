import { Button, StyleSheet } from 'react-native';

//estilos comuns entre as duas telas do App
const styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: '#333',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttonContainer: {
		height: 40,
		width: 250,
		backgroundColor: '#4a6983',
		borderColor: 'gray',
		borderRadius: 10,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},

	buttonText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
	},

	titleContainer: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 30,
		color: 'white',
	},

	textContainer: {
		alignSelf: 'center',
		color: 'white',
	},

	containerViewImage: {
		flexDirection: "row",
	},

	containerImage: {
		width: 50,
		height: 50,
		margin: 10,
	},

	boldText: {
		fontSize: 20,
		margin: 10,
		color: 'white',
		fontWeight: 'bold',
	},

	resultText: {
		fontSize: 25,
		margin: 10,
		color: 'white',
		fontWeight: 'bold',
	},

});

export default styles;