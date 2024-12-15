import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../screens/home'

const Root = createNativeStackNavigator()

export function RootStack() {
	return (
		<Root.Navigator>
			<Root.Screen name="Home" component={HomeScreen} />
		</Root.Navigator>
	)
}
