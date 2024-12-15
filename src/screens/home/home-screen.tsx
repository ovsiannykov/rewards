import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { instance } from '../../shared/core'
import styles from './home-screen.styles'

export function HomeScreen() {
	const [data, setData] = useState(null)

	const getRewardsHandler = async () => {
		try {
			const response = await instance.get('/bounties')

			if (response?.data?.length) {
				setData(response.data)
			}
		} catch (error) {
			console.log('error', error)
		}
	}

	useEffect(() => {
		getRewardsHandler()
	}, [])

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>HomeScreen</Text>
		</View>
	)
}
