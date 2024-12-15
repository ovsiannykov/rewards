import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { useRewards } from '../../entities/rewards'
import { RootState } from '../../shared/types'
import { EmptyContent } from '../../shared/ui'
import { RewardsList } from '../../widgets/rewards-list'
import styles from './favorites-screen.styles'

export function FavoritesScreen() {
	const navigation = useNavigation()
	const { collectedRewards } = useSelector((state: RootState) => state.rewards)
	const { getRewardsHandler, rewardsLoading } = useRewards()
	const goBack = () => navigation.goBack()

	return (
		<View style={styles.screen}>
			<RewardsList
				data={collectedRewards}
				getDataHandler={getRewardsHandler}
				loading={rewardsLoading}
				emptyContent={
					<EmptyContent
						title="No data"
						subTitle="Please add favorites rewards"
						buttonTitle="Go Back"
						onPress={goBack}
						loading={rewardsLoading}
					/>
				}
			/>
		</View>
	)
}
