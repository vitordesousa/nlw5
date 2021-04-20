import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';
import { StackRouter } from '@react-navigation/routers';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { Welcome } from '../pages/Welcome';

/* 
	Anotações:
	Criado esses dois arquivos de rotas para que quando apertar o botão para ser chamado a tela, é para ser "chamado" o componente 
*/

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
	<stackRoutes.Navigator 
		headerMode="none"
		screenOptions={{
			cardStyle: {
				backgroundColor: colors.white
			}
		}}
	>
		<stackRoutes.Screen name="Welcome" component={Welcome} />
		<stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
		<stackRoutes.Screen name="Confirmation" component={Confirmation} />
	</stackRoutes.Navigator>
)

export default AppRoutes;