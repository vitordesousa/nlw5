import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Header } from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';
import { PlantCardPrimary } from '../components/PlantCardPrimary';


/* 
	Anotações: 
	FlatList serve para fazer uma listagem através de um array (ou json, acredito eu). É como fazer um for/foreach, mas tem algumas opções interessantes
	useEffect com async await serve para quando a rota for iniciada, ele consumir a api e aguardar até os dados necessários serem carregados.
*/

interface EnviromentProps {
	key: string,
	title: string
}

interface PlantProps {
	id: string;
	name: string;
	about: string;
	water_tips : string;
	photo : string;
	environments : [string];
	frequency : {
		times : number;
		repeat_every : string;
	}
}

export function PlantSelect(){

	const [enviroments, setEnviroments ] = useState<EnviromentProps[]>([]);
	const [ plants, setPlants ] = useState<PlantProps[]>([]);
	const [ filteredPlants, setFilteredPlants ] = useState<PlantProps[]>([]);
	const [ enviromentSelected, SetEnviromentSelected] =  useState('all');

	function handleEnviromentSelected(environment: string){
		SetEnviromentSelected(environment);

		if(environment == 'all'){
			return setFilteredPlants(plants);
		}

		const filtered = plants.filter(plant => plant.environments.includes(environment));

		setFilteredPlants(filtered);
	}

	useEffect(() => {
		async function fetchEnviroment(){
			const { data } = await api.get('plants_environments?_sort=title&_order=asc');
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

	useEffect(() => {
		async function fetchPlants(){
			const { data } = await api.get('plants?_sort=name&_order=asc');
			setPlants( data );
		}

		fetchPlants();
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
					<EnviromentButton title={item.title} active={item.key === enviromentSelected} onPress={ () => handleEnviromentSelected(item.key)} />
				)} />
			</View>

			<View style={styles.plants}>
				<FlatList data={filteredPlants} contentContainerStyle={styles.plantsList} showsVerticalScrollIndicator={false} numColumns={2} renderItem={({ item }) => (
					<PlantCardPrimary data={item} />
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
	},
	plants : {
		flex: 1,
		paddingHorizontal: 32,
		justifyContent : 'center'
	},
	plantsList :{
	}
})