import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../styles/styleSheet';

export default function Result() {
	const route = useRoute();
	const navigation = useNavigation();

	//receber os dados dos parametros da tela de operação
	const { result, valueA, valueB, desirableOperation } = route.params;

	//função para formatar os números negativos com parenteses
	function formatNegativeValue(value) {
		return value < 0 ? `(${value})` : value;
	}

	//função define os sinais de cada operação matematica, ajuda a montar a operação completa na tela
	function fullOperation() {
		let mathOperation;
		switch (desirableOperation) {
			case "Adição":
				mathOperation = " + ";
				break;

			case "Subtração":
				mathOperation = " - ";
				break;

			case "Multiplicação":
				mathOperation = " * ";
				break;
			
			case "Divisão":
				mathOperation = " / ";
				break;
		}

		//monta a operação completa
		return formatNegativeValue(valueA) + mathOperation + formatNegativeValue(valueB);
	}

	//elentos da tela, e botão para voltar a tela anterior
	return (
		<View style={styles.container}>
			<Text style={styles.titleContainer}>Trabalho 01 - Cálculos</Text>
			<Text style={styles.boldText}>Valor 1: {formatNegativeValue(valueA)}</Text>
			<Text style={styles.boldText}>Valor 2: {formatNegativeValue(valueB)}</Text>
			<Text style={styles.boldText}>Operação: {fullOperation()}</Text>
			<Text style={styles.resultText}>Resultado: {result}</Text>
		
			<TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
				<Text style={styles.buttonText}>Voltar</Text>
			</TouchableOpacity>
		</View>
	);
}
