import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamsList = {
	TABS: undefined
	REWARD_DETAILS: { id: string }
}

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'TABS'>

export type HomeNavProp = HomeProps['navigation']

type RewardDetailsProps = NativeStackScreenProps<
	RootStackParamsList,
	'REWARD_DETAILS'
>

export type RewardDetailsRouteProp = RewardDetailsProps['route']
