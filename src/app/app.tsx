import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Toast from 'react-native-toast-message'

import { Provider } from 'react-redux'
import { RootStack } from '../navigation/home-navigator'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
			<Toast />
		</Provider>
	)
}

export default App
