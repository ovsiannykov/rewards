import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FavoritesScreen } from '../../screens/favorites-screen'
import { HomeScreen } from '../../screens/home'
import HeartFillSvg from '../../shared/assets/heart-fill.svg'
import HeartSvg from '../../shared/assets/heart.svg'
import HomeFillSvg from '../../shared/assets/home-fill.svg'
import HomeSvg from '../../shared/assets/home.svg'

const Tab = createBottomTabNavigator()

const getTabBarIcon = (routeName: string, focused: boolean) => {
	switch (routeName) {
		case 'HOME':
			return focused ? <HomeFillSvg /> : <HomeSvg />
		case 'FAVORITES':
			return focused ? <HeartFillSvg /> : <HeartSvg />
		default:
			return null
	}
}

const screenOptions = ({ route }: { route: { name: string } }) => ({
	tabBarIcon: ({ focused }: { focused: boolean }) =>
		getTabBarIcon(route.name, focused),
	tabBarActiveTintColor: 'black',
	tabBarInactiveTintColor: 'black',
})

export function TabNavigator() {
	return (
		<Tab.Navigator screenOptions={screenOptions}>
			<Tab.Screen name="HOME" component={HomeScreen} />
			<Tab.Screen name="FAVORITES" component={FavoritesScreen} />
		</Tab.Navigator>
	)
}
