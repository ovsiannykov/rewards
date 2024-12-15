import React, { useMemo } from 'react'
import { TouchableOpacity } from 'react-native'

import { useSelector } from 'react-redux'
import { useRewards } from '../../entities/rewards'
import HeartFillSvg from '../../shared/assets/heart-fill.svg'
import HeartSvg from '../../shared/assets/heart.svg'
import { HIT_SLOP_15 } from '../../shared/constants'
import { RewardType, RootState } from '../../shared/types'

interface FavoriteButtonProps {
	item: RewardType
}

export function FavoriteButton({ item }: FavoriteButtonProps) {
	const { collectedRewards } = useSelector((state: RootState) => state.rewards)
	const { handleCollectReward, handleRemoveCollectedReward } = useRewards()

	const isCollected = useMemo(
		() => collectedRewards.some((reward) => reward.id === item.id),
		[collectedRewards]
	)

	const handleToggleCollect = () => {
		if (isCollected) {
			handleRemoveCollectedReward(item.id)
		} else {
			handleCollectReward(item)
		}
	}

	return (
		<TouchableOpacity hitSlop={HIT_SLOP_15} onPress={handleToggleCollect}>
			{isCollected ? (
				<HeartFillSvg width={24} height={24} />
			) : (
				<HeartSvg width={24} height={24} />
			)}
		</TouchableOpacity>
	)
}
