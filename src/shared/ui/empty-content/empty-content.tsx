import {
	ActivityIndicator,
	StyleProp,
	Text,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native'

import styles from './empty-content.styles'

interface EmptyContentProps {
	style?: StyleProp<ViewStyle>
	title?: string
	subTitle?: string
	buttonTitle: string
	onPress: () => unknown
	loading?: boolean
}

export function EmptyContent({
	style,
	title = 'Oops...',
	subTitle,
	buttonTitle,
	onPress,
	loading,
}: EmptyContentProps) {
	return (
		<View style={[styles.wrapper, style]}>
			<Text style={styles.title}>{title}</Text>
			<Text>{subTitle || ''}</Text>
			<TouchableOpacity style={styles.button} onPress={onPress}>
				{loading ? (
					<ActivityIndicator size="small" />
				) : (
					<Text style={styles.buttonTitle}>{buttonTitle}</Text>
				)}
			</TouchableOpacity>
		</View>
	)
}
