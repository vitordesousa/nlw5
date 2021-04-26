import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
	title : string;
	subtitle: string;
	buttonTitle: string;
	icon: 'smile' | 'hug';
	nextScreen : string;
}

const emojis = {
	hug: '🤗',
	smile : '😄'
}

export function Confirmation() {
	
	const navigation = useNavigation();
	const routes = useRoute();

	const {
		title, subtitle, buttonTitle, icon, nextScreen
	} = routes.params as Params;



	function handleMoveOn(){
		navigation.navigate( nextScreen)
	}


	return (
		<SafeAreaView style={styles.container}> 
			<View  style={styles.content}>
				<Text style={styles.emoji}>
					{emojis[icon]}
				</Text>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.subtitle}>
					{subtitle}{/* Agora vamos começar a cuidar das suas{'\n'}
					plantinhas com muito cuidado */}
				</Text>

				<View style={styles.footer}>
					<Button title="Começar" onPress={handleMoveOn}  />
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