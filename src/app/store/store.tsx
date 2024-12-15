import { configureStore } from '@reduxjs/toolkit'
import { rewardsReducer } from '../../entities/rewards'

export const store = configureStore({
	reducer: {
		rewards: rewardsReducer,
	},
})
