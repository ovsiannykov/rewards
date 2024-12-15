import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { FavoriteButton } from '../../../../features/favorite-button'
import DefaultImage from '../../../../shared/assets/default-image.png'

import { HomeNavProp, RewardType } from '../../../../shared/types'
import styles from './rewards-list-item.styles'

interface RewardsListItemProps {
	item: RewardType
}

export function RewardsListItem({ item }: RewardsListItemProps) {
	const navigation = useNavigation<HomeNavProp>()
	const image = item.image ? { uri: item.image } : DefaultImage

	const goToDetailsHandler = () =>
		navigation.navigate('REWARD_DETAILS', { id: item.id })

	return (
		<TouchableOpacity style={styles.box} onPress={goToDetailsHandler}>
			<Image style={styles.image} defaultSource={DefaultImage} source={image} />
			<View style={styles.container}>
				<View style={styles.text_container}>
					<Text numberOfLines={2} style={styles.title}>
						{item.name}
					</Text>
					<Text numberOfLines={1} style={styles.price}>
						Points: {item.needed_points.toString()}
					</Text>
				</View>
				<FavoriteButton item={item} />
			</View>
		</TouchableOpacity>
	)
}
