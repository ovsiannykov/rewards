import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	box: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginBottom: 8,
		borderRadius: 8,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.17,
		shadowRadius: 3.05,
		elevation: 4,
		minHeight: 70,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		backgroundColor: 'white',
	},
	title: {
		maxWidth: '80%',
	},
})
