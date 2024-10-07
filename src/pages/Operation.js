import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import TextInputValues from '../components/TextInputValues';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styleSheet';

export default function Operation() {
	const [valueA, setValueA] = useState(null);
	const [valueB, setValueB] = useState(null);
	const [desirableOperation, setDesirableOperation] = useState('');
	const navigation = useNavigation();

	//função para setar a operação desejada
	function pickOperation(operation) {
		setDesirableOperation(operation);
	}

	//conjunto de funções para cada operação matematica
	const operations = {
		Adição: (a, b) => a + b,
		Subtração: (a, b) => a - b,
		Multiplicação: (a, b) => a * b,
		Divisão: (a, b) => a / b,
	};

	//função para calcular os valores de acordo como a operação desejada
	function calculateValues() {
		//transforma os valores em float para serem calculados
		const valA = parseFloat(valueA);
		const valB = parseFloat(valueB);

		let calculateResult = null;

		//condição para verificar se os valores são números
		if (isNaN(valA) || isNaN(valB)) {
			console.log("Valores invalidos");
			alert('Por favor, insira valores válidos.');
			return;
		}

		//função para validar se foi escolhido um operação, 
		//passando as variaveis que terão seus dados mandados para a tela de resultado
		//faz a navegação para a tela de resultado
		if (desirableOperation != '') {
			calculateResult = operations[desirableOperation](valA, valB);
			console.log(calculateResult);
			navigation.navigate('Result', { 
				result: calculateResult, result: calculateResult, 
				valueA: valA, 
				valueB: valB, 
				desirableOperation: desirableOperation 
			});


		} else {
			alert('Por favor, selecione uma operação.');
		}



	}

	return (
		<View style={styles.container}>
			<Text style={styles.titleContainer}>Trabalho 01 - Cálculos</Text>

			<Text style={styles.textContainer}>Digite o primeiro valor</Text>
			<TextInputValues
				valueParam={valueA}
				setValueParam={setValueA} />

			<Text style={styles.textContainer}>Digite o segundo valor</Text>
			<TextInputValues
				valueParam={valueB}
				setValueParam={setValueB} />

			<Text style={styles.textContainer}>Selecione a operação desejada</Text>
			<View style={styles.containerViewImage}>

				<TouchableOpacity onPress={() => pickOperation("Adição")}>
					<Image style={styles.containerImage}
						source={require("../assets/images/AdditionIcon.png")} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => pickOperation("Subtração")}>
					<Image style={styles.containerImage}
						source={require("../assets/images/SubtractionIcon.png")} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => pickOperation("Multiplicação")}>
					<Image style={styles.containerImage}
						source={require("../assets/images/MultiplicationIcon.png")} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => pickOperation("Divisão")}>
					<Image style={styles.containerImage}
						source={require("../assets/images/DivisionIcon.png")} />
				</TouchableOpacity>

			</View>

			<Text style={styles.boldText}>Operação escolhida: {desirableOperation}</Text>

			<TouchableOpacity style={styles.buttonContainer} onPress={calculateValues}>
				<Text style={styles.buttonText}>Efetuar Cálculo</Text>
			</TouchableOpacity>

		</View>
	);
}