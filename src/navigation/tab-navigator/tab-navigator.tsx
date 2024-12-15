import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FavoritesScreen } from '../../screens/favorites-screen'
import { HomeScreen } from '../../screens/home'

const Tab = createBottomTabNavigator()

// #Todo: add tabs icons

export function TabNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="HOME" component={HomeScreen} />
			<Tab.Screen name="FAVORITES" component={FavoritesScreen} />
		</Tab.Navigator>
	)
}
