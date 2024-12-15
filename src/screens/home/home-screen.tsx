import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { useRewards } from '../../entities/rewards'
import styles from './home-screen.styles'

export function HomeScreen() {
	// temporary:
	// #Todo: manage it:

	// const { allRewards, collectedRewards } = useSelector(
	// 	(state: RootState) => state.rewards
	// )
	const { getRewardsHandler } = useRewards()

	useEffect(() => {
		getRewardsHandler()
	}, [])

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>HomeScreen</Text>
		</View>
	)
}
