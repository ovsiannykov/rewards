import React from 'react'
import { Text, View } from 'react-native'

import styles from './home-screen.styles'

export function HomeScreen() {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>HomeScreen</Text>
		</View>
	)
}
