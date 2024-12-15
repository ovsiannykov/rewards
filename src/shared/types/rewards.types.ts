export interface RewardType {
	activation_description: string
	amount: unknown
	availability: number
	consume_points: boolean
	cr_points: unknown
	cr_rank: number
	description: unknown
	highscore_contest: boolean
	id: string
	image: string
	is_activateable: unknown
	is_deactivatable: unknown
	is_activated: unknown
	is_active: boolean
	ThrottleType: ThrottleType
	time_range_redeem_count: unknown
	contest: boolean
	is_redeemable: unknown
	limited: boolean
	name: string
	needed_points: number
	needed_visits: number
	pictures: unknown[]
	point_contest: boolean
	ranks: number
	redeem_count: unknown
	redeem_description: string
	require_shop_when_redeemed: boolean
	show_progress_bar: boolean
	single_use: boolean
	shipping: boolean
	redeem_success_alert_text: string
	app_form: unknown
	bounty_redeem_alert_header: string
	bounty_redeem_alert_text: string
	show_ranking: boolean
	contest_type: unknown
	bounty_activate_alert_header: string
	bounty_activate_alert_text: string
	can_participate: unknown
	is_participating: unknown
	required_status: unknown
	instant: boolean
	valid_from: unknown
	valid_until: unknown
	manual_claim: boolean
	shop: unknown
	category: unknown
	condition_id: unknown
	is_expired: boolean
	point_pool: unknown
	order: number
	terms: unknown
	variations: unknown
	promo_redeem_types: PromoRedeemType[]
	show_confirmation_dialog: string
	reward_type: number
	prizes: unknown
	is_free_reward_usage_enabled: boolean
	type: number
}

export interface ThrottleType {
	redeem_limit: number
	redeem_limit_time_range: string
}

export interface PromoRedeemType {
	type: string
}

export interface RewardsState {
	allRewards: RewardType[]
	collectedRewards: RewardType[]
}
