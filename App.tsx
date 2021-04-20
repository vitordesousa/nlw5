import React from 'react';
import { Confirmation } from './src/pages/Confirmation';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';

/* 
	Anotações:
	AppLoading Serve para segurar na tela do loading (de acordo com o condição ali embaixo) enquanto as fontes pré-destinadas não estão carregadas
*/
export default function App() {
	let [ fontsLoaded ] = useFonts({
		Jost_400Regular, 
		Jost_600SemiBold
	})

	if(!fontsLoaded){
		return <AppLoading />
	}

	return (
		<Confirmation />
	);
}
/* #missaoespacial */