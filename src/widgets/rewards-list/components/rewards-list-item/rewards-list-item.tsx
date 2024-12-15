import React, { useMemo } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { useSelector } from 'react-redux'
import { useRewards } from '../../../../entities/rewards'
import HeartFillSvg from '../../../../shared/assets/heart-fill.svg'
import HeartSvg from '../../../../shared/assets/heart.svg'
import { HIT_SLOP_15 } from '../../../../shared/constants'
import { RewardType, RootState } from '../../../../shared/types'
import styles from './rewards-list-item.styles'

interface RewardsListItemProps {
	item: RewardType
}

export function RewardsListItem({ item }: RewardsListItemProps) {
	const { collectedRewards } = useSelector((state: RootState) => state.rewards)
	const { handleCollectReward, handleRemoveCollectedReward } = useRewards()

	const isCollected = useMemo(
		() => collectedRewards.some((reward) => reward.id === item.id),
		[collectedRewards, item.id]
	)

	const handleToggleCollect = () => {
		if (isCollected) {
			handleRemoveCollectedReward(item.id)
		} else {
			handleCollectReward(item)
		}
	}

	return (
		<TouchableOpacity style={styles.box}>
			<Text style={styles.title} numberOfLines={2}>
				{item.name}
			</Text>
			<TouchableOpacity hitSlop={HIT_SLOP_15} onPress={handleToggleCollect}>
				{isCollected ? (
					<HeartFillSvg width={24} height={24} />
				) : (
					<HeartSvg width={24} height={24} />
				)}
			</TouchableOpacity>
		</TouchableOpacity>
	)
}
