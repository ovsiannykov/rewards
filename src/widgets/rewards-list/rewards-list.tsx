import { useCallback } from 'react'
import { FlatList, ListRenderItem, RefreshControl } from 'react-native'

import { RewardType } from '../../shared/types'
import { RewardsListItem } from './components'
import styles from './rewards-list.styles'

interface RewardsListProps {
	data: RewardType[]
	getDataHandler: () => Promise<
		{ payload: RewardType[]; type: 'rewards/setRewards' } | undefined
	>
	loading?: boolean
}

export function RewardsList({
	data,
	getDataHandler,
	loading = false,
}: RewardsListProps) {
	const keyExtractor = useCallback((item: RewardType) => item.id.toString(), [])

	const renderItem: ListRenderItem<RewardType> = useCallback(
		({ item }) => <RewardsListItem item={item} />,
		[]
	)

	return (
		<FlatList
			renderItem={renderItem}
			data={data}
			keyExtractor={keyExtractor}
			refreshControl={
				<RefreshControl refreshing={loading} onRefresh={getDataHandler} />
			}
			style={styles.list}
		/>
	)
}
