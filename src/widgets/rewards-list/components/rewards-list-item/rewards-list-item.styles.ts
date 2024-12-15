import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	box: {
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
		width: '100%',
		backgroundColor: 'white',
	},
	container: {
		minHeight: 70,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 16,
		alignItems: 'center',
	},
	image: {
		width: '100%',
		height: 160,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	text_container: {
		maxWidth: '80%',
	},
	title: {
		fontSize: 18,
		marginBottom: 8,
	},
	price: {
		fontSize: 10,
	},
})
