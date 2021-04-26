import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

	/* Anotações:
	KeyboardAvoidingView Serve para quando o usuário apertar para digitar o texto no campo, o botão de confirmar não ficar oculto na tela
	TouchableWithoutFeedback Serve para quando o usuário apertar fora do input, ele fecha o teclado
	*/

export function UserIdentification() {

	const [ isFocused, setIsFocused ] = useState(false);
	const [ isFilled, setIsFilled ] = useState(false);
	const [ name, setName ] = useState<string>(); // definido como string, porque como nos "useState" de cima estão com valor padrão false, ele já entende que é bool

	function handleInputBlur(){
		setIsFocused(false);
		setIsFilled(!!name);
	}	
	function handleInputFocus(){
		setIsFocused(true);
	}

	function handleInputChange(value: string){
		setIsFilled(!!value);
		setName(value);
	}

	
	const navigation = useNavigation();

	// foi colocada a função como async por causa do AsyncStorage que ele precisa aguardar até que o AsyncStorage salve o nome do usuário para que então possa continuar 
	async function handleSubmit(){

		if(!name){ // valida se o usuário digitou o nome
			return Alert.alert('Me diz como chamar você ... 😥');
		}
		/* 
		colocar o @nomeDoApp:user para que fique mais padronizado em questão de o async storage não sobrepor caso tenha uma chave igual em outro app
		*/
		
		try {
			await AsyncStorage.setItem('@plantmanager:user', name);

			navigation.navigate('Confirmation', {
				title : 'Prontinho',
				subtitle: `Agora vamos começar a cuidar das suas${'\n'} plantinhas com muito cuidado`,
				buttonTitle : 'Começar',
				icon : 'smile',
				nextScreen : 'PlantSelect'
			})	
		} catch {
			Alert.alert('Falha ao gravar o seu nome. 😥 Por favor tente novamente!');
		}
	}

	
	return (
		<SafeAreaView style={styles.container}> 
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.content}>
						<View style={styles.form}>
							<View style={styles.header}>
								<Text style={styles.emoji}>
									{ isFilled ? '😄' : '😁' } 
								</Text>
								<Text style={styles.title}>
									Como podemos{'\n'}
									chamar você?
								</Text>
							</View>

							<TextInput style={[
								styles.input,
								(isFocused || isFilled) && { borderColor: colors.green}
							]}  placeholder="Digite seu nome" onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange} />

							<View style={styles.footer}>
								<Button title="Confirmar"  onPress={handleSubmit} />
							</View>
							
						</View>
					</View>
				</TouchableWithoutFeedback>
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