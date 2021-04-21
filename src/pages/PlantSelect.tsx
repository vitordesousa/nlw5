import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Header } from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';


/* 
	Anotações: 
	FlatList serve para fazer uma listagem através de um array (ou json, acredito eu). É como fazer um for/foreach, mas tem algumas opções interessantes
	useEffect com async await serve para quando a rota for iniciada, ele consumir a api e aguardar até os dados necessários serem carregados.
*/

interface EnviromentProps {
	key: string,
	title: string
}

export function PlantSelect(){

	const [enviroments, setEnviroments ] = useState<EnviromentProps[]>([]);

	useEffect(() => {
		async function fetchEnviroment(){
			const { data } = await api.get('plants_environments');
			setEnviroments([
				{
					key: 'all',
					title: "Todos"
				},
				... data
			]);
		}

		fetchEnviroment();
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.header}>

				<Header />

				<Text style={styles.title}>Em qual ambiente</Text>
				<Text style={styles.subtitle}>você quer colocar sua planta?</Text>
			</View>
			
			<View>
				<FlatList data={enviroments} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.enviromentList} renderItem={({ item }) => (
					<EnviromentButton title={item.title} />
				)} />
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: colors.background
	},
	header :{
		paddingHorizontal: 30,
	},
	title :{
		color: colors.heading,
		fontFamily: fonts.heading,
		fontSize: 17,
		lineHeight: 20,
	},
	subtitle :{
		color: colors.heading,
		fontFamily: fonts.text,
		fontSize: 17,
		lineHeight: 20,
	},
	enviromentList: {
		height: 40,
		justifyContent : 'center',
		marginLeft: 32,
		marginVertical: 32,
		paddingBottom: 5,
	}
})