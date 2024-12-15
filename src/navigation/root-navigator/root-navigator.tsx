import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../screens/home'
import { RewardDetailsScreen } from '../../screens/reward-details-screen'
import { RootStackParamsList } from '../../shared/types'

const Root = createNativeStackNavigator<RootStackParamsList>()

export function RootStack() {
	return (
		<Root.Navigator>
			<Root.Screen name="HOME" component={HomeScreen} />
			<Root.Screen name="REWARD_DETAILS" component={RewardDetailsScreen} />
		</Root.Navigator>
	)
}
