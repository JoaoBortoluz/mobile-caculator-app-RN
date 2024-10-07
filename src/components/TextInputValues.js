import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function TextInputValues({ valueParam, setValueParam }) {

	//função para restringir o uso de characteres para apenas numeros, 
	//ponto final e sinal de menos sejam escritos
	const handleChangeText = (text) => {
		const filteredText = text.replace(/[^0-9.-]/g, '');
		setValueParam(filteredText);
	};

	//componente de text imput que aceita apenas numeros pelo teclado do celular
	return (
		<View>
			<TextInput
				style={styles.TextInputContainer}
				value={valueParam}
				onChangeText={handleChangeText}
				keyboardType='numeric' />
		</View>
	);
}

const styles = StyleSheet.create({
	TextInputContainer: {
		height: 40,
		width: 250,
		backgroundColor: '#d9d9d9',
		borderColor: 'gray',
		borderRadius: 10,
		borderWidth: 1,
		paddingLeft: 8,
		margin: 10,
		marginBottom: 25,
	}
});