
import { useState } from 'react'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'
import { instance } from '../../../../shared/core'
import { RewardType } from '../../../../shared/types'
import {
	collectReward,
	removeCollectedReward,
	setRewards,
} from '../rewards-store'

export function useRewards() {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(false)

	function showErrorToast() {
		Toast.show({
			type: 'error',
			text1: 'Oops...',
			text2: 'Failed to get data, please try again!',
		})
	}

	const getRewardsHandler = async () => {
		setLoading(true)

		try {
			const response = await instance.get('/bounties')

			if (response.status === 200 && response?.data?.length) {
				return setRewards(response.data)
			}

			showErrorToast()
		} catch (error) {
			showErrorToast()
		} finally {
			setLoading(false)
		}
	}

	const handleCollectReward = (reward: RewardType) => {
		dispatch(collectReward(reward))
	}

	const handleRemoveCollectedReward = (rewardId: string) => {
		dispatch(removeCollectedReward(rewardId))
	}

	return {
		handleCollectReward,
		handleRemoveCollectedReward,
		getRewardsHandler,
		rewardsLoading: loading,
	}
}
