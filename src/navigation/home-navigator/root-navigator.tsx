import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RewardDetailsScreen } from '../../screens/reward-details-screen'
import { DISABLED_HEADER_STYLE_CONFIG } from '../../shared/constants'
import { RootStackParamsList } from '../../shared/types'
import { TabNavigator } from '../tab-navigator'

const Root = createNativeStackNavigator<RootStackParamsList>()

export function RootStack() {
	return (
		<Root.Navigator>
			<Root.Screen
				name="TABS"
				component={TabNavigator}
				options={DISABLED_HEADER_STYLE_CONFIG}
			/>
			<Root.Screen name="REWARD_DETAILS" component={RewardDetailsScreen} />
		</Root.Navigator>
	)
}
