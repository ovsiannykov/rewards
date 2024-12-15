import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 32,
		fontWeight: '600',
		marginBottom: 12,
	},
	button: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderWidth: 0.3,
		borderRadius: 12,
		position: 'absolute',
		bottom: '20%',
	},
	buttonTitle: {
		fontSize: 16,
	},
})
