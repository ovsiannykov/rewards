import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RewardsState, RewardType } from '../../../../shared/types'

const initialState: RewardsState = {
	allRewards: [],
	collectedRewards: [],
}

const rewardsSlice = createSlice({
	name: 'rewards',
	initialState,
	reducers: {
		setRewards: (state, action: PayloadAction<RewardType[]>) => {
			state.allRewards = action.payload
		},
		collectReward: (state, action: PayloadAction<RewardType>) => {
			const reward = action.payload
			if (!state.collectedRewards.some((r) => r.id === reward.id)) {
				state.collectedRewards.push(reward)
			}
		},
		removeCollectedReward: (state, action: PayloadAction<string>) => {
			state.collectedRewards = state.collectedRewards.filter(
				(reward) => reward.id !== action.payload
			)
		},
	},
})

export const { setRewards, collectReward, removeCollectedReward } =
	rewardsSlice.actions
export const rewardsReducer = rewardsSlice.reducer
