import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { FavoriteButton } from '../../features/favorite-button'
import DefaultImage from '../../shared/assets/default-image.png'
import { RewardDetailsRouteProp, RootState } from '../../shared/types'
import { EmptyContent } from '../../shared/ui'
import styles from './reward-details-screen.styles'

export function RewardDetailsScreen() {
	const navigation = useNavigation()
	const route = useRoute<RewardDetailsRouteProp>()
	const id = route.params?.id || ''
	const { allRewards } = useSelector((state: RootState) => state.rewards)
	const item = allRewards.filter((el) => el.id === id)?.[0]
	const goBack = () => navigation.goBack()

	useEffect(() => {
		navigation.setOptions({
			title: item?.name || '',
			headerRight: item ? () => <FavoriteButton item={item} /> : undefined,
			headerBackButtonDisplayMode: 'minimal',
		})
	}, [])

	if (!item) {
		return (
			<EmptyContent
				subTitle="Failed to find the post"
				buttonTitle="Go Back"
				onPress={goBack}
			/>
		)
	}

	const image = item?.image ? { uri: item.image } : DefaultImage

	return (
		<View style={styles.screen}>
			<ScrollView>
				<Image
					style={styles.image}
					defaultSource={DefaultImage}
					source={image}
				/>
				<View style={styles.container}>
					<Text style={styles.title} numberOfLines={2}>
						{item.name}
					</Text>
					<Text style={styles.price} numberOfLines={1}>
						Points: {item.needed_points.toString()}
					</Text>
					<Text style={styles.mb10}>{item.redeem_description}</Text>
					<Text style={styles.mb10}>{item.bounty_redeem_alert_header}</Text>
					<Text style={styles.mb10}>{item.bounty_redeem_alert_text}</Text>
					<Text style={styles.mb10}>{item.activation_description}</Text>
				</View>
			</ScrollView>
		</View>
	)
}
