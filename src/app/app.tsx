import React from 'react'
import Toast from 'react-native-toast-message'

import { Provider } from 'react-redux'
import { HomeScreen } from '../screens/home'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<HomeScreen />
			<Toast />
		</Provider>
	)
}

export default App
