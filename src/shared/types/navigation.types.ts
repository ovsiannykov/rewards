import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamsList = {
	HOME: undefined
	REWARD_DETAILS: { id: string }
}

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'HOME'>

export type HomeNavProp = HomeProps['navigation']

type RewardDetailsProps = NativeStackScreenProps<
	RootStackParamsList,
	'REWARD_DETAILS'
>

export type RewardDetailsRouteProp = RewardDetailsProps['route']
