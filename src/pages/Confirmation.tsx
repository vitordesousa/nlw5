import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function Confirmation() {
	
	return (
		<SafeAreaView style={styles.container}> 
			<View  style={styles.content}>
				<Text style={styles.emoji}>
				😄
				</Text>
				<Text style={styles.title}>
					Prontinho!
				</Text>
				<Text style={styles.subtitle}>
					Agora vamos começar a cuidar das suas{'\n'}
					plantinhas com muito cuidado
				</Text>

				<View style={styles.footer}>
					<Button title="Confirmar" />
				</View>
			</View>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	container: {
		alignItems : 'center',
		flex: 1,
		justifyContent : 'space-around',
	},
	content: {
		alignItems : 'center',
		flex: 1,
		justifyContent: 'center',
		width: '100%',
		padding: 30,
	},
	emoji: {
		fontSize: 78,
	},
	title : {
		color: colors.heading,
		fontFamily : fonts.heading,
		fontSize: 22,
		lineHeight: 38,
		marginTop: 15,
		textAlign: 'center',
	},
	subtitle : {
		color: colors.heading,
		fontFamily : fonts.heading,
		fontSize: 17,
		paddingHorizontal: 10,
		textAlign: 'center',
	},
	footer : {
		marginTop: 30,
		paddingHorizontal: 50,
		width: '100%',
	}
});