import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { useRewards } from '../../entities/rewards'
import { RootState } from '../../shared/types'
import { EmptyContent } from '../../shared/ui'
import { RewardsList } from '../../widgets/rewards-list'
import styles from './home-screen.styles'

export function HomeScreen() {
	const { allRewards } = useSelector((state: RootState) => state.rewards)
	const { getRewardsHandler, rewardsLoading } = useRewards()

	useEffect(() => {
		getRewardsHandler()
	}, [])

	return (
		<View style={styles.screen}>
			<RewardsList
				data={allRewards}
				getDataHandler={getRewardsHandler}
				loading={rewardsLoading}
				emptyContent={
					<EmptyContent
						title="No data"
						buttonTitle="Reload"
						onPress={getRewardsHandler}
						loading={rewardsLoading}
					/>
				}
			/>
		</View>
	)
}
