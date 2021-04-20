import React from 'react';
import { StyleSheet, Text,  TouchableOpacity, TouchableOpacityProps } from 'react-native';
import colors from '../styles/colors';

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
		marginBottom : 10,
		paddingHorizontal : 20,
	},
	buttonText : {
		color: '#FFFFFF'
	}
});