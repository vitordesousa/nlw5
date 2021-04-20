import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

/* Anotações:
KeyboardAvoidingView Serve para quando o usuário apertar para digitar o texto no campo, o botão de confirmar não ficar oculto na tela

*/

export function UserIdentification() {
	return (
		<SafeAreaView style={styles.container}> 
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
				<View style={styles.content}>
					<View style={styles.form}>
						<View style={styles.header}>
							<Text style={styles.emoji}>
								😄 
							</Text>
							<Text style={styles.title}>
								Como podemos{'\n'}
								chamar você?
							</Text>
						</View>

						<TextInput style={styles.input}  placeholder="Digite seu nome" />

						<View style={styles.footer}>
							<Button title="Confirmar" />
						</View>
						
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}


const styles = StyleSheet.create({
	container: {
		alignItems : 'center',
		flex: 1,
		justifyContent : 'space-around',
		width: '100%',
	},
	header:{
		alignItems : 'center',
	},
	content: {
		flex: 1,
		width: '100%',		
	},
	form: {
		justifyContent : 'center',
		flex: 1,
		paddingHorizontal: 54,
		alignItems : 'center',		
	},
	emoji: {
		fontSize: 54,
		marginVertical: 20
	},
	title : {
		color: colors.heading,
		lineHeight: 32,
		fontFamily : fonts.heading,
		fontSize: 24,
		textAlign: 'center',
	},
	input : {
		borderBottomWidth: 1,
		borderColor: colors.gray,
		color: colors.heading,
		marginTop: 50,
		padding: 10,
		fontSize: 18,
		width: '100%',
		textAlign: 'center',
	},
	footer : {
		marginTop: 40,
		paddingHorizontal: 20,
		width: '100%',
	}
});