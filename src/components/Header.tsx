import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Header(){
	return (
		<View style={styles.container}>
			<Text>
				Texto
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.red,
		flexDirection: 'row',
		justifyContent : 'space-between',
		//marginTop : 20,
		paddingVertical: 20,
		width: '100%',
	},
	
});