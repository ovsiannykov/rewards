import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import HeartFillSvg from '../../../../shared/assets/heart-fill.svg'
import HeartSvg from '../../../../shared/assets/heart.svg'
import { HIT_SLOP_15 } from '../../../../shared/constants'
import { RewardType } from '../../../../shared/types'
import styles from './rewards-list-item.styles'

interface RewardsListItemProps {
	item: RewardType
}

export function RewardsListItem({ item }: RewardsListItemProps) {
	// temporary:
	const isCollected = false

	return (
		<TouchableOpacity style={styles.box}>
			<Text style={styles.title} numberOfLines={2}>
				{item.name}
			</Text>
			<TouchableOpacity hitSlop={HIT_SLOP_15}>
				{isCollected ? (
					<HeartFillSvg width={24} height={24} />
				) : (
					<HeartSvg width={24} height={24} />
				)}
			</TouchableOpacity>
		</TouchableOpacity>
	)
}
