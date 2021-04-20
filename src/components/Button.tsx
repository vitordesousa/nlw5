import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

	/*
		Anotações:
		Ao definir propriedades para o botão (ex: titulo dele), eu preciso dizer qual é o tipo de informação que virá através do componente, nesse caso, string
		Eu consigo as propriedades do TouchableOpacity importando também o TouchableOpacityProps com o react-native
	*/

interface ButtonProps extends TouchableOpacityProps {
	title: string;
}


export function Button( { title, ...rest } : ButtonProps){
	return (
		<TouchableOpacity style={styles.button} activeOpacity={0.7} { ...rest }>
			<Text style={styles.buttonText}>
				{ title }
			</Text>
		</TouchableOpacity>
	)
}



const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor : colors.green,
		borderRadius : 16,
		height : 56,
		justifyContent : 'center',
	},
	buttonText : {
		color: colors.white,
		fontFamily: fonts.heading,
		fontSize: 16,
	}
});